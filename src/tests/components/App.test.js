import React from 'react';
import { render } from '@testing-library/react';

import App from '../../scripts/components/App';
import SearchForm from '../../scripts/components/forms/SearchForm';
import Result from '../../scripts/components/results/Result';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const initialState = {
    forecast: {
        isLoading: false,
        forecast: {},
    },
};

describe('With React Testing Library', () => {
  const mockStore = configureStore();
  const store = mockStore(initialState);
  let wrapper;

  it('renders without crashing', () => {
    wrapper = render(<Provider store={store}><App /></Provider>);
    // console.log('wrapper', wrapper.baseElement);
  });

  // @TODO: add the test
  // it('renders main components', () => {
  //   expect(wrapper.length).toBe(1);
  //   console.log('wrapper', wrapper.html());
  //   // expect(wrapper.find(SearchForm).length).toBe(1);
  //   // expect(wrapper.find(Result).length).toBe(1);
  // });
});