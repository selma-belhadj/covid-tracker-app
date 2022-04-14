import axios from 'axios';

const day = new Date().toJSON().slice(0, 10).replace(/-/g, '-');

const fetchCountries = async () => {
  const res = await axios.get(`https://api.covid19tracking.narrativa.com/api/${day}`);
  return res.data;
};

export default fetchCountries;
