import React from 'react';
import PropTypes from 'prop-types';

function ForecastMainInfo(props) {
  return (
    <div className="result_conditions">
      <p className={`result_icon icon icon--${props.iconName}`} />
      <div className="result_temp">
        <p className={`result_temp_value result_temp_value--average ${props.tempClass}`}>
          { props.temp }
        </p>
        <div className="result_temp_extra">
          <p className="result_temp_value result_temp_value--min">{ props.tempMin }</p>
          <p className="result_temp_value result_temp_value--max">{ props.tempMax }</p>
        </div>
      </div>
    </div>
  );
}

ForecastMainInfo.defaultProps = {
  iconName: 'sunny',
  temp: 0,
  tempMin: 0,
  tempMax: 0,
  tempClass: '',
};

ForecastMainInfo.propTypes = {
  iconName: PropTypes.string,
  tempClass: PropTypes.string,
  temp: PropTypes.number,
  tempMin: PropTypes.number,
  tempMax: PropTypes.number,
};

export default ForecastMainInfo;
