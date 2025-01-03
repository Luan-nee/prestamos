import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css'
import Navbar from './layout/Navbar'

import RegistroDePrestamos from "./pages/RegistroDePrestamos.jsx";
import Registrar from "./pages/Registrar.jsx";
import Pagina3 from "./pages/Pagina3.jsx";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar>
        <section>
          <Routes>
            <Route path="/" element={<RegistroDePrestamos />} />
            <Route path="/pagina2" element={<Registrar />} />
            <Route path="/pagina3" element={<Pagina3 />} />
          </Routes>
        </section>
      </Navbar>
    </BrowserRouter>
  </StrictMode>
);
