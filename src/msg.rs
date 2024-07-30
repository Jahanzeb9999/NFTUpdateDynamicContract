use cosmwasm_schema::cw_serde;
use cosmwasm_std::Binary;
use cosmwasm_schema::QueryResponses;
use coreum_wasm_sdk::{assetnft::{
    BurntNFTResponse, BurntNFTsInClassResponse, ClassFrozenAccountsResponse, ClassFrozenResponse,
    ClassResponse, ClassWhitelistedAccountsResponse, ClassesResponse, FrozenResponse,
    ParamsResponse, WhitelistedAccountsForNFTResponse, WhitelistedResponse,
}, nft};

#[cw_serde]
pub struct InstantiateMsg {
    pub name: String,
    pub symbol: String,
    pub description: Option<String>,
    pub uri: Option<String>,
    pub uri_hash: Option<String>,
    pub data: Option<Binary>,
    pub features: Option<Vec<u32>>,
    pub royalty_rate: Option<String>,
}
#[cw_serde]
pub enum ExecuteMsg {
    // Uses the deprecated wasm_handler
    MintLegacy {
        id: String,
        uri: Option<String>,
        uri_hash: Option<String>,
        data: Option<Binary>,
        recipient: Option<String>,
    },
    MintMutable {
        id: String,
        uri: Option<String>,
        uri_hash: Option<String>,
        data: Option<Binary>,
        recipient: Option<String>,
    },
    MintImmutable {
        id: String,
        uri: Option<String>,
        uri_hash: Option<String>,
        data: Option<Binary>,
        recipient: Option<String>,
    },
    ModifyData {
        id: String,
        data: Binary,
    },
    Burn {
        id: String,
    },
    Freeze {
        id: String,
    },
    Unfreeze {
        id: String,
    },
   
    ClassFreeze {
        account: String,
    },
    ClassUnfreeze {
        account: String,
    },
    AddToWhitelist {
        id: String,
        account: String,
    },
    RemoveFromWhitelist {
        id: String,
        account: String,
    },
    AddToClassWhitelist {
        account: String,
    },
    RemoveFromClassWhitelist {
        account: String,
    },
    Send {
        id: String,
        receiver: String,
    },
}
#[cw_serde]
#[derive(QueryResponses)]
pub enum QueryMsg {
    #[returns(ParamsResponse)]
    Params {},
    #[returns(ClassResponse)]
    Class {},
    #[returns(ClassesResponse)]
    Classes { issuer: String },
    #[returns(FrozenResponse)]
    Frozen { id: String },
    #[returns(ClassFrozenResponse)]
    ClassFrozen { account: String },
    #[returns(ClassFrozenAccountsResponse)]
    ClassFrozenAccounts {},
    #[returns(WhitelistedResponse)]
    Whitelisted { id: String, account: String },
    #[returns(WhitelistedAccountsForNFTResponse)]
    WhitelistedAccountsForNft { id: String },
    #[returns(ClassWhitelistedAccountsResponse)]
    ClassWhitelistedAccounts {},
    #[returns(nft::BalanceResponse)]
    Balance { owner: String },
    #[returns(nft::OwnerResponse)]
    Owner { id: String },
    #[returns(nft::SupplyResponse)]
    Supply {},
    #[returns(nft::NFTResponse)]
    Nft { id: String },
    #[returns(nft::NFTsResponse)]
    Nfts { owner: Option<String> },
    #[returns(nft::ClassResponse)]
    ClassNft {},
    #[returns(nft::ClassesResponse)]
    ClassesNft {},
    #[returns(BurntNFTResponse)]
    BurntNft { nft_id: String },
    #[returns(BurntNFTsInClassResponse)]
    BurntNftsInClass {},
}