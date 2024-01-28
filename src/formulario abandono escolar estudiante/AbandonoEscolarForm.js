// AbandonoEscolarForm.js
import React, { useState } from 'react';

const AbandonoEscolarForm = () => {
  const [abandonoEscolar, setAbandonoEscolar] = useState({
    estudianteId: '',
    abandonoGestionAnterior: '',
    razonesAbandono: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAbandonoEscolar((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos de Abandono Escolar:', abandonoEscolar);
    // Puedes enviar los datos a tu servidor o realizar acciones adicionales aquí
  };

  return (
    <div>
      <h1>Formulario Abandono Escolar</h1>
      <form onSubmit={handleSubmit}>
        <label>
          ID del Estudiante:
          <input
            type="text"
            name="estudianteId"
            value={abandonoEscolar.estudianteId}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Abandono Gestión Anterior:
          <input
            type="text"
            name="abandonoGestionAnterior"
            value={abandonoEscolar.abandonoGestionAnterior}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Razones de Abandono:
          <textarea
            name="razonesAbandono"
            value={abandonoEscolar.razonesAbandono}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
};

export default AbandonoEscolarForm;
