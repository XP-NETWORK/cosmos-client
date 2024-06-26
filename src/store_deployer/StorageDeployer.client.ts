/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.35.7.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { Coin, StdFee } from "@cosmjs/amino";
import { SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { InstantiateMsg, ExecuteMsg, Addr } from "./StorageDeployer.types";
export interface StorageDeployerInterface {
  contractAddress: string;
  sender: string;
  createStorage721: ({
    collectionAddress,
    collectionCodeId,
    isOriginal,
    label,
    owner,
    tokenId
  }: {
    collectionAddress: Addr;
    collectionCodeId: number;
    isOriginal: boolean;
    label: string;
    owner: string;
    tokenId: string;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
}
export class StorageDeployerClient implements StorageDeployerInterface {
  client: SigningCosmWasmClient;
  sender: string;
  contractAddress: string;

  constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string) {
    this.client = client;
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.createStorage721 = this.createStorage721.bind(this);
  }

  createStorage721 = async ({
    collectionAddress,
    collectionCodeId,
    isOriginal,
    label,
    owner,
    tokenId
  }: {
    collectionAddress: Addr;
    collectionCodeId: number;
    isOriginal: boolean;
    label: string;
    owner: string;
    tokenId: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      create_storage721: {
        collection_address: collectionAddress,
        collection_code_id: collectionCodeId,
        is_original: isOriginal,
        label,
        owner,
        token_id: tokenId
      }
    }, fee, memo, _funds);
  };
}