import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { BsFillArrowRightSquareFill } from 'react-icons/bs';
import { fetchAllRegions } from '../redux/regions/regions';
import Footer from './Footer';
import Navbar from './NavBar';
import CountryFlag from './CountryFlag';
import '../styles/RegionsList.css';

function Regions() {
  const { country } = useParams();
  const dispatch = useDispatch();
  const { countryData } = useSelector((state) => state.regions);
  useEffect(() => {
    dispatch(fetchAllRegions(country));
  }, []);

  let totalCountryCases = '';
  let todayRecovered = '';
  let todayDeaths = '';
  let todayOpenCases = '';
  if (countryData !== undefined && Object.keys(countryData).indexOf(country) !== -1) {
    totalCountryCases = countryData[country].today_confirmed.toLocaleString();
    todayRecovered = countryData[country].today_recovered.toLocaleString();
    todayDeaths = countryData[country].today_deaths.toLocaleString();
    todayOpenCases = countryData[country].today_open_cases.toLocaleString();
  }

  const CurrFlag = `https://countryflagsapi.com/png/${country}`;

  return (
    <>
      {(countryData === undefined || Object.keys(countryData).indexOf(country) === -1) && (
        <div className="loader">
          <p>Wait a moment please...</p>
        </div>
      )}
      {countryData !== undefined && Object.keys(countryData).indexOf(country) !== -1 && (
        <div className="flag-div">
          <Navbar nav="Regions" />
          <CountryFlag flag={CurrFlag} title={country} timing="sdsas" />
          <div className="RegionDetail">
            <div className="DetailBorder">
              <p className="text-paragraph">
                Total Confirmed Today:
                <span>
                  {`${totalCountryCases}`}
                  {' '}
                </span>
              </p>
              <p className="text-paragraph">
                Total Recovered Today:
                <span>{`${todayRecovered}`}</span>
              </p>
              <p className="text-paragraph">
                Total Death Today:
                <span>{`${todayDeaths}`}</span>
              </p>
              <p className="text-paragraph">
                Actual Cases:
                <span>{`${todayOpenCases}`}</span>
              </p>
            </div>
          </div>
          {countryData !== undefined && countryData[country].regions.length === 0
          && Object.keys(countryData).indexOf(country) !== -1
          && (
          <div className="notAvailable"><p>Regions are not Available</p></div>
          )}
          {countryData !== undefined && countryData[country].regions.length !== 0
          && Object.keys(countryData).indexOf(country) !== -1
          && (
            <div className="searchDiv">
              <h1 className="titles-paragraph region-title">Cases by Regions</h1>
            </div>
          )}
          { countryData !== undefined && countryData[country].regions.length > 0
          && Object.keys(countryData).indexOf(country) !== -1
          && countryData[country].regions.map((regionItem) => (
            <div key={regionItem.id} className="dark-bg">
              <div key={regionItem.id} className="region-container region">
                <div>
                  {' '}
                  {regionItem.name}
                </div>
                <div className="region-details">
                  <p className="cases">{regionItem.today_confirmed}</p>
                  <BsFillArrowRightSquareFill className="regions-open-svg" />
                </div>
              </div>
            </div>
          )) }
          <div />
        </div>
      )}
      <Footer />
    </>
  );
}

export default Regions;
