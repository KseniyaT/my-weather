import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Select from 'react-select';
import SubmitButton from '../buttons/SubmitButton';
import actions from '../../actions/forecast/index';
import COUNTRIES from '../../constants/countries';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: this.props.isLoading,
      city: '',
      country: COUNTRIES[0],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) { // eslint-disable-line no-unused-vars
    const { isLoading } = nextProps;
    return { isLoading };
  }

  /**
   * It sends an Ajax request to get weather for the respective city and country
   * @param event {Event} event object
   */
  handleSubmit(event) {
    event.preventDefault();
    const { city, country } = this.state;
    this.props.actions.getForecast(city, country.value);
  }

  handleInputChange(event) {
    this.setState({ city: event.target.value });
  }

  handleSelectChange(country) {
    this.setState({ country });
  }

  render() {
    const { isLoading, city, country } = this.state;
    return (
      <div className="search">
        <h1 className="search_title">{'Check forecast'}</h1>
        <form className="search_form" onSubmit={this.handleSubmit}>
          <div className="search_group">
            <input
              type="text"
              className="input search_input"
              value={city}
              onChange={this.handleInputChange}
            />
            <Select
              isSearchable
              className="search_select"
              classNamePrefix="search"
              value={country}
              onChange={this.handleSelectChange}
              options={COUNTRIES}
            />
            <SubmitButton className={'search_btn'} value={city} isLoading={isLoading} />
          </div>
        </form>
        { isLoading && <div className="spinner" /> }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ // eslint-disable-line arrow-parens
  isLoading: state.forecast.isLoading,
});

const mapDispatchToProps = (dispatch) => ({ // eslint-disable-line arrow-parens
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
