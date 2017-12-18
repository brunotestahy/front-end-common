// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
import { FrontEndConfig } from '../app/modules/configuration/configuration';

export interface Environment extends FrontEndConfig {
  production: boolean;
}

const identificationServer = 'https://10.25.44.130:8459/identification_server';

export const environment: Environment = {
  production: false,

  // front-end-common configs
  his: 'source:copastar',
  homeRoute: '/',
  practitioner: {
    baseURL: `${identificationServer}/api/practitioner`,
    roleURL : '/role',
    searchURL: '/search',
    paginationURL: '/paginate'
  },
  patient: {
    baseURL: `${identificationServer}/api/patient`,
    searchURL: '/search',
    paginationURL: '/paginate',
    careProviderURL: '/practitioner',
    careProvidersURL: '/careProviders'
  },
  room: {
    baseURL: `${identificationServer}/api/room`,
    sectorURL: '/sector'
  },
  conceptmap: {
    baseURL: `${identificationServer}/api/conceptmap`
  },
  login: {
    authType: 'SMART',
    baseURL: `${identificationServer}`,
    ldapURL: '/users/login',
    smartURL: '/users/login/smart',
    meURL: '/api/users/me'
  },
  log: {
    baseURL: `${identificationServer}/api/log`,
    bulkRetry: 5,
    bulkSaveURL: '/bulksave',
    loggingInterval: 15000
  },
  appointment: {
    baseURL: `${identificationServer}/api/appointment`,
    shiftURL: '/shift'
  },
  rating: {
    baseURL: `${identificationServer}/api/rating`,
    searchURL: '/search',
    reasonURL: '/reason',
    paginationURL: '/paginate'
  },
  thumbnail: 'http://10.25.44.132:8080/thumbnail_server/thumbnail'
};
