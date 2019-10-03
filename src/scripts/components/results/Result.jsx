import React from 'react';
import { useSelector } from 'react-redux';
import NothingFound from './NothingFound';
import Forecast from './Forecast';

const Result = () => {
  const forecast = useSelector(state => state.forecast.forecast);
  const isError = useSelector(state => state.forecast.isError);

  let result = null;
  if (isError && (Object.keys(forecast).length === 0 || forecast.constructor !== Object)) {
    result = <NothingFound />;
  } else if (Object.keys(forecast).length !== 0) {
    const today = forecast && forecast.conditions[0];
    result = (
      <Forecast
        cityName={forecast.city}
        countryName={forecast.country}
        dt={today.dt}
        todayIconId={today.id}
        text={today.main}
        condition={today.condition}
        temp={today.temp}
        tempMin={today.tempMin}
        tempMax={today.tempMax}
        comingDaysList={forecast.conditions.slice(1)}
      />
    );
  }
  return (
    <div className="result">
      {result}
    </div>
  );
};

export default Result;
