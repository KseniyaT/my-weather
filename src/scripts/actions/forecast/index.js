import axios from 'axios';
import CONSTANTS from '../../constants/index';
import filters from './filters';

const { ACTION_TYPES } = CONSTANTS;

function getForecastSuccess(values) {
  return {
    type: ACTION_TYPES.FORECAST_SUCCESS,
    forecast: values,
  };
}

function getForecastError() {
  return {
    type: ACTION_TYPES.FORECAST_ERROR,
  };
}

function getForecastStart() {
  return {
    type: ACTION_TYPES.FORECAST_REQUEST,
  };
}

const { getFilteredList } = filters;

/**
 *
 * @param city {String} city name
 * @param countryCode {String} country code in ISO 3166
 * @returns {function(*)}
 */
const getForecast = (city, countryCode) => { // eslint-disable-line
  return (dispatch) => { // eslint-disable-line
    dispatch(getForecastStart());

    const gatewayProtocol = (window.location.protocol === 'https:') ? 'https://' : 'http://';
    const forecast5Url = `${gatewayProtocol}${REACT_APP_ENDPOINT}${REACT_APP_FORECAST_5}?q=${city}${countryCode ? `,${countryCode}` : ''}&appid=${REACT_APP_API_KEY}`; // eslint-disable-line

    return axios.get(encodeURI(forecast5Url))
      .then((response) => {
        const conditions = getFilteredList(response.data.list, response.data.city.timezone);
        const data = {
          city: response.data.city.name,
          country: response.data.city.country,
          timezone: response.data.city.timezone,
          conditions,
        };
        dispatch(getForecastSuccess(data));
      })
      .catch(() => {
        dispatch(getForecastError());
      });
  };
};

export default { getForecast };
