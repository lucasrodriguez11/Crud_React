import React from 'react';
import Listar from './componentes/Listar';
import Crear from './componentes/Crear';
import Editar from './componentes/Editar';
import './App.css';
import CrearWrapper from './componentes/CrearWrapper';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand navbar-light bg-light">
        <div className="nav navbar-nav">
          <Link className="nav-item nav-link active" to={"/"}>Sistema <span className="sr-only"></span></Link>
          <Link className="nav-item nav-link" to={"/crear"}>Crear Empleado</Link>
          <Link className="nav-item nav-link" to={"/editar/"}>Editar Empleado</Link>
        </div>
      </nav>

      <div className="container">
        <br></br>
        <Routes>
          <Route path="/" element={<Listar />} />
          <Route path="/crear" element={<CrearWrapper />} />
          <Route path="/editar/:id" element={<Editar />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
