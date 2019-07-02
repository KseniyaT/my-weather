const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  REACT_APP_API_KEY: JSON.stringify(process.env.REACT_APP_API_KEY),
  REACT_APP_ENDPOINT: JSON.stringify(process.env.REACT_APP_API_URL),
  REACT_APP_FORECAST_5: JSON.stringify(process.env.REACT_APP_FORECAST_5),
};