import React from 'react';
import PropTypes from 'prop-types';
import ForecastMainInfo from './ForecastMainInfo';
import formater from './helpers/formater';
import icons from './helpers/icons';

const { getFormatedDate, getFormatedTemperature } = formater;
const { getIconInfo } = icons;

function Forecast(props) {
  return (
    <div className="result_body">
      <div className="result_today">
        <p className="result_info result_info--city">{`${props.cityName}, ${props.countryName}`}</p>
        <p className="result_info result_info--date">{getFormatedDate(props.dt)}</p>
        <ForecastMainInfo
          iconName={getIconInfo(props.todayIconId)}
          temp={getFormatedTemperature(props.temp)}
          tempMin={getFormatedTemperature(props.tempMin)}
          tempMax={getFormatedTemperature(props.tempMax)}
          tempClass="result_temp_value--today"
        />
        <p className="result_info result_info--text">{props.text}</p>
      </div>
      <div className="result_comings">
        {
          props.comingDaysList.map((day) => { // eslint-disable-line arrow-body-style
            return (
              <div key={day.dt} className="result_comings_day">
                <p className="result_date">{getFormatedDate(day.dt)}</p>
                <ForecastMainInfo
                  iconName={getIconInfo(day.id)}
                  temp={getFormatedTemperature(day.temp)}
                  tempMin={getFormatedTemperature(day.tempMin)}
                  tempMax={getFormatedTemperature(day.tempMax)}
                />
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

Forecast.defaultProps = {
  cityName: '',
  countryName: '',
  dt: 0,
  temp: 0,
  tempMin: 0,
  tempMax: 0,
  todayIconId: 0,
  text: '',
  comingDaysList: [{
    dt: 0,
    id: 0,
    main: '',
    temp: 0,
    tempMax: 0,
    tempMin: 0,
  }],
};

Forecast.propTypes = {
  cityName: PropTypes.string,
  countryName: PropTypes.string,
  dt: PropTypes.number,
  temp: PropTypes.number,
  tempMin: PropTypes.number,
  tempMax: PropTypes.number,
  todayIconId: PropTypes.number,
  text: PropTypes.string,
  comingDaysList: PropTypes.arrayOf(PropTypes.shape({
    dt: PropTypes.number,
    id: PropTypes.number,
    temp: PropTypes.number,
    tempMax: PropTypes.number,
    tempMin: PropTypes.number,
  })),
};

export default Forecast;
