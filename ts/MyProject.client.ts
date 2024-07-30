/**
* This file was automatically generated by @cosmwasm/ts-codegen@1.11.1.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { StdFee } from "@cosmjs/amino";
import { Binary, InstantiateMsg, ExecuteMsg, QueryMsg, BalanceResponse, BurntNFTResponse, BurntNFTsInClassResponse, PageResponse, ClassResponse, Class, ClassFrozenResponse, ClassFrozenAccountsResponse, ClassWhitelistedAccountsResponse, ClassesResponse, FrozenResponse, NFTResponse, NFT, NFTsResponse, OwnerResponse, Uint128, ParamsResponse, Params, Coin, SupplyResponse, WhitelistedResponse, WhitelistedAccountsForNFTResponse } from "./MyProject.types";
export interface MyProjectReadOnlyInterface {
  contractAddress: string;
  params: () => Promise<ParamsResponse>;
  class: () => Promise<ClassResponse>;
  classes: ({
    issuer
  }: {
    issuer: string;
  }) => Promise<ClassesResponse>;
  frozen: ({
    id
  }: {
    id: string;
  }) => Promise<FrozenResponse>;
  classFrozen: ({
    account
  }: {
    account: string;
  }) => Promise<ClassFrozenResponse>;
  classFrozenAccounts: () => Promise<ClassFrozenAccountsResponse>;
  whitelisted: ({
    account,
    id
  }: {
    account: string;
    id: string;
  }) => Promise<WhitelistedResponse>;
  whitelistedAccountsForNft: ({
    id
  }: {
    id: string;
  }) => Promise<WhitelistedAccountsForNFTResponse>;
  classWhitelistedAccounts: () => Promise<ClassWhitelistedAccountsResponse>;
  balance: ({
    owner
  }: {
    owner: string;
  }) => Promise<BalanceResponse>;
  owner: ({
    id
  }: {
    id: string;
  }) => Promise<OwnerResponse>;
  supply: () => Promise<SupplyResponse>;
  nft: ({
    id
  }: {
    id: string;
  }) => Promise<NFTResponse>;
  nfts: ({
    owner
  }: {
    owner?: string;
  }) => Promise<NFTsResponse>;
  classNft: () => Promise<ClassResponse>;
  classesNft: () => Promise<ClassesResponse>;
  burntNft: ({
    nftId
  }: {
    nftId: string;
  }) => Promise<BurntNFTResponse>;
  burntNftsInClass: () => Promise<BurntNFTsInClassResponse>;
}
export class MyProjectQueryClient implements MyProjectReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;
  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.params = this.params.bind(this);
    this.class = this.class.bind(this);
    this.classes = this.classes.bind(this);
    this.frozen = this.frozen.bind(this);
    this.classFrozen = this.classFrozen.bind(this);
    this.classFrozenAccounts = this.classFrozenAccounts.bind(this);
    this.whitelisted = this.whitelisted.bind(this);
    this.whitelistedAccountsForNft = this.whitelistedAccountsForNft.bind(this);
    this.classWhitelistedAccounts = this.classWhitelistedAccounts.bind(this);
    this.balance = this.balance.bind(this);
    this.owner = this.owner.bind(this);
    this.supply = this.supply.bind(this);
    this.nft = this.nft.bind(this);
    this.nfts = this.nfts.bind(this);
    this.classNft = this.classNft.bind(this);
    this.classesNft = this.classesNft.bind(this);
    this.burntNft = this.burntNft.bind(this);
    this.burntNftsInClass = this.burntNftsInClass.bind(this);
  }
  params = async (): Promise<ParamsResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      params: {}
    });
  };
  class = async (): Promise<ClassResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      class: {}
    });
  };
  classes = async ({
    issuer
  }: {
    issuer: string;
  }): Promise<ClassesResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      classes: {
        issuer
      }
    });
  };
  frozen = async ({
    id
  }: {
    id: string;
  }): Promise<FrozenResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      frozen: {
        id
      }
    });
  };
  classFrozen = async ({
    account
  }: {
    account: string;
  }): Promise<ClassFrozenResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      class_frozen: {
        account
      }
    });
  };
  classFrozenAccounts = async (): Promise<ClassFrozenAccountsResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      class_frozen_accounts: {}
    });
  };
  whitelisted = async ({
    account,
    id
  }: {
    account: string;
    id: string;
  }): Promise<WhitelistedResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      whitelisted: {
        account,
        id
      }
    });
  };
  whitelistedAccountsForNft = async ({
    id
  }: {
    id: string;
  }): Promise<WhitelistedAccountsForNFTResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      whitelisted_accounts_for_nft: {
        id
      }
    });
  };
  classWhitelistedAccounts = async (): Promise<ClassWhitelistedAccountsResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      class_whitelisted_accounts: {}
    });
  };
  balance = async ({
    owner
  }: {
    owner: string;
  }): Promise<BalanceResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      balance: {
        owner
      }
    });
  };
  owner = async ({
    id
  }: {
    id: string;
  }): Promise<OwnerResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      owner: {
        id
      }
    });
  };
  supply = async (): Promise<SupplyResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      supply: {}
    });
  };
  nft = async ({
    id
  }: {
    id: string;
  }): Promise<NFTResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      nft: {
        id
      }
    });
  };
  nfts = async ({
    owner
  }: {
    owner?: string;
  }): Promise<NFTsResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      nfts: {
        owner
      }
    });
  };
  classNft = async (): Promise<ClassResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      class_nft: {}
    });
  };
  classesNft = async (): Promise<ClassesResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      classes_nft: {}
    });
  };
  burntNft = async ({
    nftId
  }: {
    nftId: string;
  }): Promise<BurntNFTResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      burnt_nft: {
        nft_id: nftId
      }
    });
  };
  burntNftsInClass = async (): Promise<BurntNFTsInClassResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      burnt_nfts_in_class: {}
    });
  };
}
export interface MyProjectInterface extends MyProjectReadOnlyInterface {
  contractAddress: string;
  sender: string;
  mintLegacy: ({
    data,
    id,
    recipient,
    uri,
    uriHash
  }: {
    data?: Binary;
    id: string;
    recipient?: string;
    uri?: string;
    uriHash?: string;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  mintMutable: ({
    data,
    id,
    recipient,
    uri,
    uriHash
  }: {
    data?: Binary;
    id: string;
    recipient?: string;
    uri?: string;
    uriHash?: string;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  mintImmutable: ({
    data,
    id,
    recipient,
    uri,
    uriHash
  }: {
    data?: Binary;
    id: string;
    recipient?: string;
    uri?: string;
    uriHash?: string;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  modifyData: ({
    data,
    id
  }: {
    data: Binary;
    id: string;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  burn: ({
    id
  }: {
    id: string;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  freeze: ({
    id
  }: {
    id: string;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  unfreeze: ({
    id
  }: {
    id: string;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  classFreeze: ({
    account
  }: {
    account: string;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  classUnfreeze: ({
    account
  }: {
    account: string;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  addToWhitelist: ({
    account,
    id
  }: {
    account: string;
    id: string;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  removeFromWhitelist: ({
    account,
    id
  }: {
    account: string;
    id: string;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  addToClassWhitelist: ({
    account
  }: {
    account: string;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  removeFromClassWhitelist: ({
    account
  }: {
    account: string;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  send: ({
    id,
    receiver
  }: {
    id: string;
    receiver: string;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
}
export class MyProjectClient extends MyProjectQueryClient implements MyProjectInterface {
  client: SigningCosmWasmClient;
  sender: string;
  contractAddress: string;
  constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string) {
    super(client, contractAddress);
    this.client = client;
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.mintLegacy = this.mintLegacy.bind(this);
    this.mintMutable = this.mintMutable.bind(this);
    this.mintImmutable = this.mintImmutable.bind(this);
    this.modifyData = this.modifyData.bind(this);
    this.burn = this.burn.bind(this);
    this.freeze = this.freeze.bind(this);
    this.unfreeze = this.unfreeze.bind(this);
    this.classFreeze = this.classFreeze.bind(this);
    this.classUnfreeze = this.classUnfreeze.bind(this);
    this.addToWhitelist = this.addToWhitelist.bind(this);
    this.removeFromWhitelist = this.removeFromWhitelist.bind(this);
    this.addToClassWhitelist = this.addToClassWhitelist.bind(this);
    this.removeFromClassWhitelist = this.removeFromClassWhitelist.bind(this);
    this.send = this.send.bind(this);
  }
  mintLegacy = async ({
    data,
    id,
    recipient,
    uri,
    uriHash
  }: {
    data?: Binary;
    id: string;
    recipient?: string;
    uri?: string;
    uriHash?: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      mint_legacy: {
        data,
        id,
        recipient,
        uri,
        uri_hash: uriHash
      }
    }, fee, memo, _funds);
  };
  mintMutable = async ({
    data,
    id,
    recipient,
    uri,
    uriHash
  }: {
    data?: Binary;
    id: string;
    recipient?: string;
    uri?: string;
    uriHash?: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      mint_mutable: {
        data,
        id,
        recipient,
        uri,
        uri_hash: uriHash
      }
    }, fee, memo, _funds);
  };
  mintImmutable = async ({
    data,
    id,
    recipient,
    uri,
    uriHash
  }: {
    data?: Binary;
    id: string;
    recipient?: string;
    uri?: string;
    uriHash?: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      mint_immutable: {
        data,
        id,
        recipient,
        uri,
        uri_hash: uriHash
      }
    }, fee, memo, _funds);
  };
  modifyData = async ({
    data,
    id
  }: {
    data: Binary;
    id: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      modify_data: {
        data,
        id
      }
    }, fee, memo, _funds);
  };
  burn = async ({
    id
  }: {
    id: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      burn: {
        id
      }
    }, fee, memo, _funds);
  };
  freeze = async ({
    id
  }: {
    id: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      freeze: {
        id
      }
    }, fee, memo, _funds);
  };
  unfreeze = async ({
    id
  }: {
    id: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      unfreeze: {
        id
      }
    }, fee, memo, _funds);
  };
  classFreeze = async ({
    account
  }: {
    account: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      class_freeze: {
        account
      }
    }, fee, memo, _funds);
  };
  classUnfreeze = async ({
    account
  }: {
    account: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      class_unfreeze: {
        account
      }
    }, fee, memo, _funds);
  };
  addToWhitelist = async ({
    account,
    id
  }: {
    account: string;
    id: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      add_to_whitelist: {
        account,
        id
      }
    }, fee, memo, _funds);
  };
  removeFromWhitelist = async ({
    account,
    id
  }: {
    account: string;
    id: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      remove_from_whitelist: {
        account,
        id
      }
    }, fee, memo, _funds);
  };
  addToClassWhitelist = async ({
    account
  }: {
    account: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      add_to_class_whitelist: {
        account
      }
    }, fee, memo, _funds);
  };
  removeFromClassWhitelist = async ({
    account
  }: {
    account: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      remove_from_class_whitelist: {
        account
      }
    }, fee, memo, _funds);
  };
  send = async ({
    id,
    receiver
  }: {
    id: string;
    receiver: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      send: {
        id,
        receiver
      }
    }, fee, memo, _funds);
  };
}