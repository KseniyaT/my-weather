import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Select from 'react-select';
import SubmitButton from '../buttons/SubmitButton';
import actions from '../../actions/forecast/index';
import COUNTRIES from '../../constants/countries';

const SearchForm = () => {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState(COUNTRIES[0]);

  const isLoading = useSelector(state => state.forecast.isLoading);
  const dispatch = useDispatch();

  /**
   * It sends an Ajax request to get weather for the respective city and country
   * @param event {Event} event object
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(actions.getForecast(city, country.value));
  };

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleSelectChange = (newCountry) => {
    setCountry(newCountry);
  };

  return (
    <div className="search">
      <h1 className="search_title">{'Check forecast'}</h1>
      <form className="search_form" onSubmit={handleSubmit}>
        <div className="search_group">
          <input
            type="text"
            className="input search_input"
            value={city}
            onChange={handleInputChange}
          />
          <Select
            isSearchable
            className="search_select"
            classNamePrefix="search"
            value={country}
            onChange={handleSelectChange}
            options={COUNTRIES}
          />
          <SubmitButton className={'search_btn'} value={city} isLoading={isLoading} />
        </div>
      </form>
      { isLoading && <div className="spinner" /> }
    </div>
  );
};

export default SearchForm;
