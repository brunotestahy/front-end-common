import { OpaqueToken } from '@angular/core';

export let FrontEndConfigProvider = new OpaqueToken('front-end-common.config');

export interface FrontEndConfig {
  his?: string;
  homeRoute?: string;
  thumbnail?: string;
  practitioner?: {
    baseURL: string;
    roleURL?: string;
    searchURL?: string;
    paginationURL?: string;
  };
  patient?: {
    baseURL: string;
    searchURL?: string;
    paginationURL?: string;
    careProviderURL?: string;
  };
  login?: {
    authType?: string;
    baseURL: string;
    ldapURL?: string;
    smartURL?: string;
    meURL: string;
  };
  log?: {
    baseURL: string,
    bulkSaveURL: string,
    bulkRetry: number,
    loggingInterval: number
  };
  room?: {
    baseURL: string;
    sectorURL: string;
  };
  conceptmap?: {
    baseURL: string;
  };
}
