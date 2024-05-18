import React from 'react';
import { useNavigate } from 'react-router-dom';
import Crear from './Crear'; // Asegúrate de que la ruta sea correcta

const CrearWrapper = () => {
    const navigate = useNavigate();

    return <Crear navigate={navigate} />;
};

export default CrearWrapper;
