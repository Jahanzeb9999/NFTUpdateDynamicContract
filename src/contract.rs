use coreum_wasm_sdk::assetnft;
use coreum_wasm_sdk::pagination::PageRequest;
use coreum_wasm_sdk::types::coreum::asset::nft::v1::{
    DataBytes, DataDynamic, DataDynamicIndexedItem, DataDynamicItem, DataEditor,
    MsgAddToClassWhitelist, MsgAddToWhitelist, MsgBurn, MsgClassFreeze, MsgClassUnfreeze,
    MsgFreeze, MsgIssueClass, MsgMint, MsgRemoveFromClassWhitelist, MsgRemoveFromWhitelist,
    MsgUnfreeze, MsgUpdateData,
};
use coreum_wasm_sdk::assetnft::{
     BurntNFTResponse, BurntNFTsInClassResponse, ClassFrozenAccountsResponse,
    ClassFrozenResponse, ClassResponse, ClassWhitelistedAccountsResponse, ClassesResponse,
    FrozenResponse, ParamsResponse, WhitelistedAccountsForNFTResponse, WhitelistedResponse,
};
use coreum_wasm_sdk::types::cosmos::nft::v1beta1::MsgSend;
use cosmwasm_std::{
    entry_point, to_json_binary, Binary, CosmosMsg, Deps, DepsMut, Env, MessageInfo, QueryRequest, Response, StdResult
};
use coreum_wasm_sdk::core::{CoreumMsg, CoreumQueries, CoreumResult};
use cw2::set_contract_version;
use cw_ownable::{assert_owner, initialize_owner};

use crate::error::ContractError;
use crate::msg::{ExecuteMsg, InstantiateMsg, QueryMsg};
use crate::state::CLASS_ID;
// version info for migration info
const CONTRACT_NAME: &str = env!("CARGO_PKG_NAME");
const CONTRACT_VERSION: &str = env!("CARGO_PKG_VERSION");
// ********** Instantiate **********
#[entry_point]
pub fn instantiate(
    deps: DepsMut,
    env: Env,
    info: MessageInfo,
    msg: InstantiateMsg,
) -> CoreumResult<ContractError> {
    set_contract_version(deps.storage, CONTRACT_NAME, CONTRACT_VERSION)?;
    initialize_owner(deps.storage, deps.api, Some(info.sender.as_ref()))?;

    let issue_msg = CoreumMsg::AssetNFT(assetnft::Msg::IssueClass {
        name: msg.name,
        symbol: msg.symbol.clone(),
        description: msg.description,
        uri: msg.uri,
        uri_hash: msg.uri_hash,
        data: msg.data,
        features: msg.features,
        royalty_rate: msg.royalty_rate,
    });

    let class_id = format!("{}-{}", msg.symbol, env.contract.address).to_lowercase();
    CLASS_ID.save(deps.storage, &class_id)?;

    Ok(Response::new()
        .add_attribute("owner", info.sender)
        .add_attribute("class_id", class_id)
        .add_message(issue_msg))
}

// ********** Execute **********
#[entry_point]
pub fn execute(
    deps: DepsMut,
    env: Env,
    info: MessageInfo,
    msg: ExecuteMsg,
) -> CoreumResult<ContractError> {
    match msg {ExecuteMsg::MintImmutable{id,uri,uri_hash,data,recipient,}=>mint_immutable(deps,info,env,id,uri,uri_hash,data,recipient),ExecuteMsg::MintMutable{id,uri,uri_hash,data,recipient,}=>mint_mutable(deps,info,env,id,uri,uri_hash,data,recipient),ExecuteMsg::ModifyData{id,data}=>modify_data(deps,info,env,id,data),
    ExecuteMsg::MintLegacy { id, uri, uri_hash, data, recipient } => todo!(),
            ExecuteMsg::Burn { id } => todo!(),
    ExecuteMsg::Freeze { id } => todo!(),
    ExecuteMsg::Unfreeze { id } => todo!(),
    ExecuteMsg::ClassFreeze { account } => todo!(),
    ExecuteMsg::ClassUnfreeze { account } => todo!(),
    ExecuteMsg::AddToWhitelist { id, account } => todo!(),
    ExecuteMsg::RemoveFromWhitelist { id, account } => todo!(),
    ExecuteMsg::AddToClassWhitelist { account } => todo!(),
    ExecuteMsg::RemoveFromClassWhitelist { account } => todo!(),
    ExecuteMsg::Send { id, receiver } => todo!(), }
}

// ********** Transactions **********
fn mint_immutable(
    deps: DepsMut,
    info: MessageInfo,
    env: Env,
    id: String,
    uri: Option<String>,
    uri_hash: Option<String>,
    data: Option<Binary>,
    recipient: Option<String>,
) -> CoreumResult<ContractError> {
    assert_owner(deps.storage, &info.sender)?;
    let class_id = CLASS_ID.load(deps.storage)?;
    let data = match data {
        Some(data) => Some(
            DataBytes {
                data: data.to_vec(),
            }
            .to_any(),
        ),
        None => None,
    };

    let recipient = recipient
        .map(|addr| deps.api.addr_validate(&addr))
        .transpose()?
        .unwrap();

    let mint = MsgMint {
        sender: env.contract.address.to_string(),
        class_id: class_id.clone(),
        id: id.clone(),
        uri: uri.unwrap_or_default(),
        uri_hash: uri_hash.unwrap_or_default(),
        data,
        recipient: recipient.to_string(),
    };

    let mint_bytes = mint.to_proto_bytes();
    let msg = CosmosMsg::Stargate {
        type_url: mint.to_any().type_url,
        value: Binary::from(mint_bytes),
    };

    Ok(Response::new()
        .add_attribute("method", "mint_immutable")
        .add_attribute("class_id", class_id)
        .add_attribute("id", id)
        .add_message(msg))
}

fn mint_mutable(
    deps: DepsMut,
    info: MessageInfo,
    env: Env,
    id: String,
    uri: Option<String>,
    uri_hash: Option<String>,
    data: Option<Binary>,
    recipient: Option<String>,
) -> CoreumResult<ContractError> {
    assert_owner(deps.storage, &info.sender)?;
    let class_id = CLASS_ID.load(deps.storage)?;
    let data = match data {
        Some(data) => Some(
            DataDynamic {
                items: vec![DataDynamicItem {
                    editors: vec![DataEditor::Admin as i32, DataEditor::Owner as i32],
                    data: data.to_vec(),
                }],
            }
            .to_any(),
        ),
        None => None,
    };

    let recipient = recipient
        .map(|addr| deps.api.addr_validate(&addr))
        .transpose()?
        .unwrap();

    let mint = MsgMint {
        sender: env.contract.address.to_string(),
        class_id: class_id.clone(),
        id: id.clone(),
        uri: uri.unwrap_or_default(),
        uri_hash: uri_hash.unwrap_or_default(),
        data,
        recipient: recipient.to_string(),
    };

    let mint_bytes = mint.to_proto_bytes();
    let msg = CosmosMsg::Stargate {
        type_url: mint.to_any().type_url,
        value: Binary::from(mint_bytes),
    };

    Ok(Response::new()
        .add_attribute("method", "mint_mutable")
        .add_attribute("class_id", class_id)
        .add_attribute("id", id)
        .add_message(msg))
}

fn modify_data(
    deps: DepsMut,
    info: MessageInfo,
    env: Env,
    id: String,
    data: Binary,
) -> CoreumResult<ContractError> {
    assert_owner(deps.storage, &info.sender)?;
    let class_id = CLASS_ID.load(deps.storage)?;

    let modify_data = MsgUpdateData {
        sender: env.contract.address.to_string(),
        class_id: class_id.clone(),
        id: id.clone(),
        items: vec![DataDynamicIndexedItem {
            index: 0,
            data: data.to_vec(),
        }],
    };

    let modify_data_bytes = modify_data.to_proto_bytes();
    let msg = CosmosMsg::Stargate {
        type_url: modify_data.to_any().type_url,
        value: Binary::from(modify_data_bytes),
    };

    Ok(Response::new()
        .add_attribute("method", "modify_data")
        .add_attribute("class_id", class_id)
        .add_attribute("id", id)
        .add_message(msg))
}

// ********** Queries **********
#[entry_point]
pub fn query(deps: Deps<CoreumQueries>, _env: Env, msg: QueryMsg) -> StdResult<Binary> {
    match msg {QueryMsg::Params{}=>to_json_binary(&query_params(deps)?),QueryMsg::Class{}=>to_json_binary(&query_class(deps)?),QueryMsg::Classes{issuer}=>to_json_binary(&query_classes(deps,issuer)?),
    QueryMsg::Frozen { id } => todo!(),
            QueryMsg::ClassFrozen { account } => todo!(),
    QueryMsg::ClassFrozenAccounts {  } => todo!(),
    QueryMsg::Whitelisted { id, account } => todo!(),
    QueryMsg::WhitelistedAccountsForNft { id } => todo!(),
    QueryMsg::ClassWhitelistedAccounts {  } => todo!(),
    QueryMsg::Balance { owner } => todo!(),
    QueryMsg::Owner { id } => todo!(),
    QueryMsg::Supply {  } => todo!(),
    QueryMsg::Nft { id } => todo!(),
    QueryMsg::Nfts { owner } => todo!(),
    QueryMsg::ClassNft {  } => todo!(),
    QueryMsg::ClassesNft {  } => todo!(),
    QueryMsg::BurntNft { nft_id } => todo!(),
    QueryMsg::BurntNftsInClass {  } => todo!(), }
}

fn query_params(deps: Deps<CoreumQueries>) -> StdResult<ParamsResponse> {
    let request: QueryRequest<CoreumQueries> =
        CoreumQueries::AssetNFT(assetnft::Query::Params {}).into();
    let res = deps.querier.query(&request)?;
    Ok(res)
}

fn query_class(deps: Deps<CoreumQueries>) -> StdResult<ClassResponse> {
    let class_id = CLASS_ID.load(deps.storage)?;
    let request: QueryRequest<CoreumQueries> =
        CoreumQueries::AssetNFT(assetnft::Query::Class { id: class_id }).into();
    let res = deps.querier.query(&request)?;
    Ok(res)
}

fn query_classes(deps: Deps<CoreumQueries>, issuer: String) -> StdResult<ClassesResponse> {
    let mut pagination = None;
    let mut classes = vec![];
    let mut res: ClassesResponse;

    loop {
        let request = CoreumQueries::AssetNFT(assetnft::Query::Classes {
            pagination,
            issuer: issuer.clone(),
        })
        .into();

        res = deps.querier.query(&request)?;
        classes.append(&mut res.classes);

        if res.pagination.next_key.is_none() {
            break;
        } else {
            pagination = Some(PageRequest {
                key: res.pagination.next_key,
                offset: None,
                limit: None,
                count_total: None,
                reverse: None,
            });
        }
    }

    let res = ClassesResponse {
        pagination: res.pagination,
        classes,
    };
    Ok(res)
}