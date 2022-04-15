import { fetchRegions } from '../../API/CovidAPI';

const initialState = {};

const GET_REGIONS = 'GET_REGIONS';

const fetchAllRegions = (region) => async (dispatch) => {
  const data = await fetchRegions(region);
  if (data) {
    dispatch({ type: GET_REGIONS, data });
  }
};

const regionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REGIONS:
      return action.data;
    default:
      return state;
  }
};

export {
  regionsReducer as default,
  fetchAllRegions,
};
