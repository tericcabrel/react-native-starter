import http from 'axios';

import * as actionTypes from './actionTypes';
import { changeLocale } from "../../utils/i18n";

export const fetchCountries = () => ({
  type: actionTypes.FETCH_COUNTRIES,
  async payload() {
    try {
      console.log('Request !');
      const res = await http.get('https://restcountries.eu/rest/v2/all');
      return res.data;
    } catch (err) {
      return Promise.reject(err);
    }
  }
});

export const resetCountries = (data: any|null = null) => ({
  type: actionTypes.RESET_COUNTRIES,
  payload: data
});

export const setLocale = (locale: string) => {
  changeLocale(locale);
  return {
    type: actionTypes.SET_LOCALE,
      payload: locale
  }
};
