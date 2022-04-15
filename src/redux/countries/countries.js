import fetchCountries from '../../API/narrativaAPI';

const initialState = {};

const GET_COUNTRIES = 'Get_COUNTRIES';

const fetchAllCountries = () => async (dispatch) => {
  const data = await fetchCountries();
  if (data) {
    dispatch({ type: GET_COUNTRIES, data });
  }
};

const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return action.data;
    default:
      return state;
  }
};

export {
  countriesReducer as default,
  fetchAllCountries,
  GET_COUNTRIES,
};
