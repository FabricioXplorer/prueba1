// AccesoInternetForm.js
import React, { useState } from 'react';

const AccesoInternetForm = () => {
  const [accesoInternet, setAccesoInternet] = useState({
    estudianteId: '',
    accesoInternet: '',
    frecuenciaUsoInternet: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAccesoInternet((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos de Acceso a Internet:', accesoInternet);
    // Puedes enviar los datos a tu servidor o realizar acciones adicionales aquí
  };

  return (
    <div >
      <h1>Acceso a Internet</h1>
      <form onSubmit={handleSubmit}>
        <label>
          ID del Estudiante:
          <input
            type="text"
            name="estudianteId"
            value={accesoInternet.estudianteId}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Acceso a Internet:
          <select
            name="accesoInternet"
            value={accesoInternet.accesoInternet}
            onChange={handleChange}
          >
            <option value="Si">Sí</option>
            <option value="No">No</option>
          </select>
        </label>
        <br />
        <label>
          Frecuencia de Uso de Internet:
          <input
            type="text"
            name="frecuenciaUsoInternet"
            value={accesoInternet.frecuenciaUsoInternet}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Guardar</button>
      </form>
      <hr/> {/* Línea divisora */}
    </div>
  );
};

export default AccesoInternetForm;
