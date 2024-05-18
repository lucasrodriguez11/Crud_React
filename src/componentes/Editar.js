import React from 'react';
import { useParams } from 'react-router-dom';

function Editar() {
  const { id } = useParams();

  // Utiliza el ID como lo necesites en tu componente

  return (
    <div className="card">
      <div className="card-header">
        Editar
      </div>
      <div className="card-body">
        {/* Usa 'id' aquí */}ss
      </div>
      <div className="card-footer text-muted">
      </div>
    </div>
  );
}

export default Editar;
