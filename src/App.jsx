import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Contacto from "./componentes/contacto/contacto";
import Navbar from "./componentes/navbar/navbar";
import Footer from "./componentes/footer/footer";
import Nosotros from "./componentes/nosotros/nosotros";
import Servicios from "./componentes/servicios/servicios";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';



function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div>
        <nav>
          <Navbar />
        </nav>
        <Routes>
          <Route path="/" element={<Contacto />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/servicios" element={<Servicios />} />

          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
