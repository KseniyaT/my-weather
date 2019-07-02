import React from 'react';
import { shallow, mount, render } from 'enzyme';
import SearchForm from '../../../scripts/components/forms/SearchForm';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as func from '../../../scripts/actions/forecast/index';

const initialState = {
  forecast: {
    isLoading: false,
  },
};

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
let store;
let wrapper;

const getForecast = () => async (dispatch) => {
  await dispatch(func.getForecast());
};

jest.useFakeTimers();

describe('SearchForm', () => {
  it('renders 1 spinner due skills are loading', () => {
    store = mockStore(initialState);
    wrapper = mount(<SearchForm store={ store } />);
    store.dispatch(getForecast()).then(() => {
      jest.runAllTimers();
      expect(wrapper.find('.spinner').length).toBe(1);
    });
  });
});


