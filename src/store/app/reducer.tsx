import { FETCH_COUNTRIES, RESET_COUNTRIES, SET_LOCALE } from "./actionTypes";
import { getCurrentLocale } from "../../utils/i18n";

const initialState = {
  locale: getCurrentLocale(),
  loading: false,
  error: null,
  countries: [],
  currentUser: null
};

const appReducer = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case `${FETCH_COUNTRIES}_PENDING`:
      return { ...state, loading: true, error: null };
    case `${FETCH_COUNTRIES}_FULFILLED`:
      return { ...state, loading: false, countries: payload };
    case `${FETCH_COUNTRIES}_REJECTED`:
      return { ...state, loading: false, error: payload };

    case RESET_COUNTRIES:
      return { ...state, countries: [] };

    case SET_LOCALE:
      return { ...state, locale: payload };

    default:
      return state;
  }
};

export default appReducer;
