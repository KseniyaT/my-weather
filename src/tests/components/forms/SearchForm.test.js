import React from 'react';

import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import SearchForm from '../../../scripts/components/forms/SearchForm';
import Select from 'react-select';
import SubmitButton from '../../../scripts/components/buttons/SubmitButton';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const initialState = {
  forecast: {
    isLoading: false,
  },
};

const mockStore = configureMockStore([thunk]);
let store;

describe('<SearchForm /> with no props', () => {

  store = mockStore(initialState);
  jest.useFakeTimers();

  const container = mount(
    <Provider store={store}>
      <SearchForm />
    </Provider>
  );

  it('should have main fields', () => {
    // console.log('container', container.html());
    expect(container.find('input.search_input').length).toEqual(1);
    expect(container.find(Select).length).toEqual(1);
    expect(container.find(SubmitButton).length).toEqual(1);
  });

  it('should have proper props for text field', () => {
    expect(container.find('input.search_input').props()).toEqual({
      className: 'input search_input',
      onChange: expect.any(Function),
      value: '',
      type: 'text',
    });
  });

  it ('should show spinner after the form submit', () => {
    // @TODO: add the test
    // container.find('.search_form').simulate('submit');
    // jest.runAllTimers();
    // expect(container.find('.spinner').length).toEqual(1);
  })

});
