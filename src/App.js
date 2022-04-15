import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Countries from './components/CountriesList';
import Regions from './components/RegionsList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/:country" element={<Regions />} />
      </Routes>
    </Router>
  );
}

export default App;
