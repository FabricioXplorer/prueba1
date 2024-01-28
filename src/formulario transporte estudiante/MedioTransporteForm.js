// MedioTransporteForm.js
import React, { useState } from 'react';

const MedioTransporteForm = () => {
  const [medioTransporte, setMedioTransporte] = useState({
    estudianteId: '',
    transporteUsado: '',
    tiempoMaximoLlegadaUE: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMedioTransporte((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos de Medio de Transporte:', medioTransporte);
    // Puedes enviar los datos a tu servidor o realizar acciones adicionales aquí
  };

  return (
    <div>
      <h1>Formulario Medio de Transporte</h1>
      <form onSubmit={handleSubmit}>
        <label>
          ID del Estudiante:
          <input
            type="text"
            name="estudianteId"
            value={medioTransporte.estudianteId}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Transporte Usado:
          <input
            type="text"
            name="transporteUsado"
            value={medioTransporte.transporteUsado}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Tiempo Máximo de Llegada a la Unidad Educativa (en minutos):
          <input
            type="text"
            name="tiempoMaximoLlegadaUE"
            value={medioTransporte.tiempoMaximoLlegadaUE}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
};

export default MedioTransporteForm;
