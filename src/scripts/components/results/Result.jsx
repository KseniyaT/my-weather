import React, { Component } from 'react';
import { connect } from 'react-redux';
import NothingFound from './NothingFound';
import Forecast from './Forecast';

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forecast: this.props.forecast,
      isError: this.props.isError,
    };
  }

  static getDerivedStateFromProps(nextProps) {
    const { forecast, isError } = nextProps;
    return { forecast, isError };
  }

  render() {
    const { forecast, isError } = this.state;
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
  }
}

const mapStateToProps = (state) => ({ // eslint-disable-line arrow-parens
  forecast: state.forecast.forecast,
  isError: state.forecast.isError,
});

export default connect(mapStateToProps, null)(Result);
