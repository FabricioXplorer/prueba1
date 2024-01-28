// PadreForm.js
import React, { useState } from 'react';

const PadreForm = () => {
  const [padre, setPadre] = useState({
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
    setPadre((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del Padre:', padre);
    // Puedes enviar los datos a tu servidor o realizar acciones adicionales aquí
  };

  return (
    <div>
      <h1>Formulario Datos del Padre</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Carnet de Identidad:
          <input
            type="text"
            name="carnetIdentidad"
            value={padre.carnetIdentidad}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Apellido Paterno:
          <input
            type="text"
            name="apellidoPaterno"
            value={padre.apellidoPaterno}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Apellido Materno:
          <input
            type="text"
            name="apellidoMaterno"
            value={padre.apellidoMaterno}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Nombres:
          <input
            type="text"
            name="nombres"
            value={padre.nombres}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Idioma Frecuente:
          <input
            type="text"
            name="idiomaFrecuente"
            value={padre.idiomaFrecuente}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Ocupación Laboral:
          <input
            type="text"
            name="ocupacionLaboral"
            value={padre.ocupacionLaboral}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Grado de Instrucción:
          <input
            type="text"
            name="gradoInstruccion"
            value={padre.gradoInstruccion}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Fecha de Nacimiento:
          <input
            type="date"
            name="fechaNacimiento"
            value={padre.fechaNacimiento}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
};

export default PadreForm;
