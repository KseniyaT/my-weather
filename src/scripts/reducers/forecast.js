import CONSTANTS from '../constants/index';

const { ACTION_TYPES } = CONSTANTS;

const initialState = {
  isLoading: false,
  forecast: {},
  isError: false,
};

const forecast = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FORECAST_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case ACTION_TYPES.FORECAST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        forecast: action.forecast,
        isError: false,
      };

    case ACTION_TYPES.FORECAST_ERROR:
      console.log('FORECAST_ERROR');
      return {
        ...state,
        isLoading: false,
        forecast: initialState.forecast,
        isError: true,
      };

    default:
      return state;
  }
};

export default forecast;
