
import './App.css';
import Contactlist from './Component/Contactlist';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Download from './Pages/Download';
import ImportContact from './Pages/ImportContact';
import FilterContact from './Pages/FilterContact'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Contactlist />}/>
        <Route path="download" element={<Download />} />
        <Route path="import" element={<ImportContact />} />
        <Route path="filter" element={<FilterContact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
