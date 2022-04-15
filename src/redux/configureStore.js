import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import countriesReducer from './countries/countries';
import regionsReducer from './regions/regions';

const rootReducer = combineReducers({
  countries: countriesReducer,
  regions: regionsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export {
  store as default,
  rootReducer,
};
