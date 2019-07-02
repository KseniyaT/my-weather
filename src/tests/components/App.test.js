import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../../scripts/components/App';
import SearchForm from '../../scripts/components/forms/SearchForm';
import Result from '../../scripts/components/results/Result';

describe('App', () => {
  const wrapper = shallow(<App />);
  it('renders main components', () => {
    expect(wrapper.length).toBe(1);
    expect(wrapper.find(SearchForm).length).toBe(1);
    expect(wrapper.find(Result).length).toBe(1);
  });
});
