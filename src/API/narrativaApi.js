// class NarrativaAPI {
//   static baseURL = 'https://api.covid19tracking.narrativa.com/api';

//   static todayDate = new Date().toISOString().slice(0, 10);

//   static fetchCountries = async () => fetch(`${this.baseURL}/${this.todayDate}`)
//   .then(async (response) => response.json()).then((response) =>
//   ({ countryData: response.dates[todayDate].countries }));

//    {
//     if (response.ok) {
//       const data = await response.json();
//       const requiredData = [];

//       data.forEach((value) => {
//         requiredData.push({
//           id: value.id,
//           name: value.name,
//           today_confirmed: value.today_confirmed,
//           today_deaths: value.today_deaths,
//           today_recovered: value.today_recovered,
//         });
//       });
//       return requiredData;
//     }
//     return null;
//   });

//   static fetchRegions = async (region) =>
// fetch(`${this.baseURL}/${this.todayDate}/country/${region}`, {
//     method: 'GET',
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   }).then(async (response) => {
//     if (response.ok) {
//       const data = await response.json();
//       const requiredData = [];

//       data.forEach((value) => {
//         requiredData.push({
//           id: value.id,
//           name: value.name,
//           today_confirmed: value.today_confirmed,
//           today_deaths: value.today_deaths,
//           today_recovered: value.today_recovered,
//         });
//       });
//       return requiredData;
//     }
//     return null;
//   });
// }
// export default NarrativaAPI;
