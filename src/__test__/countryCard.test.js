import React from 'react';
import {
  render, fireEvent,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import CountryCard from '../components/CountryCard';
import store from '../redux/configureStore';
import '@testing-library/jest-dom';


test('renders cases', () => {
  const { getByText } = render(
    <Provider store={store}>
      <Router>
        <CountryCard />
      </Router>
    </Provider>,
  );

  expect(getByText(/cases/i)).toBeInTheDocument();
});


it('renders without crushing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Router>
     <CountryCard />
    </Router>, div,
  );
});


it('Test integration on click', () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <Router>
        <CountryCard country="Algeria" />
      </Router>
    </Provider>,
  );
  const link = getByTestId('linkid');
  fireEvent.click(link);
  expect(global.window.location.pathname).toEqual('/Algeria');
});

it('test applying background color taken from props', () => {
  const { getByTestId } = render(

    <Provider store={store}>
      <Router>
        <CountryCard backgroudColorForCountry="red" />
      </Router>
    </Provider>,
  );
  expect(getByTestId('linkid')).toHaveStyle('background-color: red');
});