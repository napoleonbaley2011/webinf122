import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './pages/NavBar';
import ImageCarousel from './pages/ImageCarousel';
import Virtual from './pages/Virtual';
import Instalaciones from './pages/Instalaciones';
import Biblio from './pages/Biblio';
import Programas from './pages/Programas'
import Seguridad from './pages/Seguridad'
import Examen from './pages/Examen';
import Institucion from './pages/Institucion';
import  Personal  from './pages/Personal';
import  Contactos  from './pages/Contactos';
import Mas from './pages/Mas'


import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './pages/Footer';

function App() {
  return (
    <div>
      <NavBar />
      <div className='espacio'></div>
      <Routes>
        <Route path="/" element={<ImageCarousel/>} />
        <Route path="/virtual" element={<Virtual/>} />
        <Route path="/Instalaciones" element={<Instalaciones />} />
        <Route path="/biblioteca" element={<Biblio  />} />
        <Route path="/programas" element={<Programas/>} />
        <Route path="/examen" element={<Seguridad/>} />
        <Route path="/institucion" element={<Institucion/>} />
        <Route path="/personal" element={<Personal/>} />
        <Route path="/contactos" element={<Contactos/>} />
        <Route path="/mas" element={<Mas/>} />
      </Routes>
      <div className='espaciof'></div>
      <Footer/>
    </div>
  );
}

export default App;
