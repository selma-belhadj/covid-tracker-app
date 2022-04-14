import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CountryCard from './CountryCard';
import { fetchAllCountries } from '../redux/countries/countries';
import Header from './Header';
import Footer from './Footer';
import './countriesList.css';

let totalInfected = 0;
let countries = Object;
const today = new Date().toJSON().slice(0, 10).replace(/-/g, '-');
const backgroudColorBg = '#d18700';
const backgroudColorSecondary = '#a36a00';
let backgroudColorForCountry = backgroudColorBg;

function Countries() {
  const state = useSelector((state) => state.countries);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllCountries());
  }, []);

  if (state.total !== undefined) {
    countries = state.dates[today].countries;
    totalInfected = state.total.today_confirmed.toLocaleString();
  }

  const [countriesToShow, setCountriesToShow] = useState({});

  useEffect(() => {
    setCountriesToShow(countries);
  }, [countries]);

  const handleSearch = (e) => {
    let { value } = e.target;
    const searchCounrty = {};
    Object.assign(searchCounrty, countries);
    if (value !== '') {
      value = value[0].toUpperCase() + value.slice(1, value.length);
      const deletedKeys = Object.keys(searchCounrty).filter((key) => !key.includes(value));
      for (let i = 0; i < deletedKeys.length; i += 1) {
        delete searchCounrty[deletedKeys[i]];
      }
      setCountriesToShow(searchCounrty);
    } else {
      setCountriesToShow(countries);
    }
  };

  return (
    <div>
      <Header title="Covid Around The World" total={`${totalInfected}`} />
      <div>
        <div className="searchDiv">
          <h1 className="titles-paragraph">Covid Cases by Countries</h1>
          <input type="text" className="search-bar" onChange={handleSearch} placeholder="Search" />
        </div>
        <div className="countriesContainer">
          {
        Object.keys(countriesToShow).map((country, index) => {
          if ((index + 1) % 2 === 0) {
            if (backgroudColorForCountry === backgroudColorBg) {
              backgroudColorForCountry = backgroudColorSecondary;
            } else {
              backgroudColorForCountry = backgroudColorBg;
            }
          }
          return (
            <CountryCard
              key={country}
              country={countries[country].name}
              confirmed={countries[country].today_confirmed.toLocaleString()}
              backgroudColorForCountry={backgroudColorForCountry}
            />
          );
        })
        }
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Countries;
