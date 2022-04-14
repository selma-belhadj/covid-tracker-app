import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import countriesReducer from './countries/countries';

const rootReducer = combineReducers({
  countries: countriesReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export {
  store as default,
  rootReducer,
};
