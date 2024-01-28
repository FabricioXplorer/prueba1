// UnidadEducativaForm.js
import React, { useState } from 'react';

const UnidadEducativaForm = () => {
  const [unidadEducativa, setUnidadEducativa] = useState({
    tipo: '',
    ubicacion: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUnidadEducativa((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos de Unidad Educativa:', unidadEducativa);
    // Puedes enviar los datos a tu servidor o realizar acciones adicionales aquí
  };

  return (
    <div>
      <h1>Formulario Unidad Educativa</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Tipo:
          <input
            type="text"
            name="tipo"
            value={unidadEducativa.tipo}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Ubicación:
          <input
            type="text"
            name="ubicacion"
            value={unidadEducativa.ubicacion}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
};

export default UnidadEducativaForm;
