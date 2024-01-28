// MadreForm.js
import React, { useState } from 'react';

const MadreForm = () => {
  const [madre, setMadre] = useState({
    carnetIdentidad: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    nombres: '',
    idiomaFrecuente: '',
    ocupacionLaboral: '',
    gradoInstruccion: '',
    fechaNacimiento: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMadre((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos de la Madre:', madre);
    // Puedes enviar los datos a tu servidor o realizar acciones adicionales aquí
  };

  return (
    <div>
      <h1>Formulario Datos de la Madre</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Carnet de Identidad:
          <input
            type="text"
            name="carnetIdentidad"
            value={madre.carnetIdentidad}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Apellido Paterno:
          <input
            type="text"
            name="apellidoPaterno"
            value={madre.apellidoPaterno}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Apellido Materno:
          <input
            type="text"
            name="apellidoMaterno"
            value={madre.apellidoMaterno}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Nombres:
          <input
            type="text"
            name="nombres"
            value={madre.nombres}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Idioma Frecuente:
          <input
            type="text"
            name="idiomaFrecuente"
            value={madre.idiomaFrecuente}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Ocupación Laboral:
          <input
            type="text"
            name="ocupacionLaboral"
            value={madre.ocupacionLaboral}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Grado de Instrucción:
          <input
            type="text"
            name="gradoInstruccion"
            value={madre.gradoInstruccion}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Fecha de Nacimiento:
          <input
            type="date"
            name="fechaNacimiento"
            value={madre.fechaNacimiento}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
};

export default MadreForm;
