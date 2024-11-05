import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import "aos/dist/aos.css";
import MainPage from './Pages/MainPage';
import Footer from './attach/footer';
import ContactPage from './Pages/Contact';
import 'leaflet/dist/leaflet.css';
import RegistPage from './Pages/RegistPage';
import CategoryPage from './Pages/CategoryPage';
import ListingPage from './Pages/ListingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/Pages/Contact' element={<ContactPage/>}/>
        <Route path='/Pages/RegistPage' element={<RegistPage/>}/>
        <Route path='/Pages/CategoryPage' element={<CategoryPage/>}/>
        <Route path='Pages/ListingPage' element={<ListingPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
