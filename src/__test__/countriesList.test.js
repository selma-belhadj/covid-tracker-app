import React from 'react';
import {
  render,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import store from '../redux/configureStore';
import Countries from '../components/CountriesList';

describe('Countries', () => {
  it('renders correctly', () => {
    const tree = render(<Provider store={store}><Router><Countries /></Router></Provider>);
    expect(tree).toMatchSnapshot();
  });
});

it('renders without crushing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <Countries />
      </Router>
    </Provider>, div,
  );
});
