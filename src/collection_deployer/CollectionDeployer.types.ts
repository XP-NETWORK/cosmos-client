/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.35.7.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

export interface InstantiateMsg {
  collection721_code_id: number;
}
export type ExecuteMsg = {
  create_collection721: {
    destination_user_address: Addr;
    metadata: string;
    name: string;
    owner: string;
    royalty: number;
    royalty_receiver: Addr;
    source_chain: string;
    source_nft_contract_address: string;
    symbol: string;
    token_amount: number;
    token_id: string;
  };
};
export type Addr = string;