import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import "aos/dist/aos.css";
import MainPage from './Pages/MainPage';
import ContactPage from './Pages/Contact';
import 'leaflet/dist/leaflet.css';
import RegistPage from './Pages/RegistPage';
import CategoryPage from './Pages/CategoryPage';
import ListingPage from './Pages/ListingPage';
import ProfilPage from './Pages/ProfilPage';
import AdminPage from './Admin/AdminPage';
import AdminCategory from './Admin/AdminCategory';
import AdminRegion from './Admin/AdminRegion';
import AdminRequest from './Admin/AdminRequest';
import AdminRequestUpdate from './Admin/AdminUpdateRequest';
import 'moment/locale/ru';
import AdminShowAdv from './Admin/AdminShowAdv';
import Picture from './Pages/Picture';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/Pages/Contact' element={<ContactPage />} />
        <Route path='/Pages/RegistPage' element={<RegistPage />} />
        <Route path='/Pages/CategoryPage/:category' element={<CategoryPage />} />
        <Route path='Pages/ListingPage/:id' element={<ListingPage />} />
        <Route path='Pages/ProfilPage' element={<ProfilPage />} />
        <Route path='Admin/AdminPage' element={<AdminPage />} />
        <Route path='Admin/AdminCategory' element={<AdminCategory />} />
        <Route path='Admin/AdminRegion' element={<AdminRegion />} />
        <Route path='Admin/AdminRequest' element={<AdminRequest />} />
        <Route path='Admin/AdminUpdateRequest/:id' element={<AdminRequestUpdate />} />
        <Route path='Admin/AdminShowAdv/:id' element={<AdminShowAdv />} />
        <Route path='Pages/Picture/:id' element={<Picture />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
