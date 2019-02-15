import React from 'react';
import Enzyme, { mount, render, shallow } from 'enzyme';
import App from '../client/src/App.jsx';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter});

describe('Tests App functionality', () => {
  test('App renders', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  })
});