/**
 * Правило отключено потому что используется underscore в полях в API
 * https://eslint.org/docs/rules/camelcase
 */
/* eslint camelcase: "off" */

export type LoginAndPass = {
  login: string;
  password: string;
};

export type ErrorLogin = string;
