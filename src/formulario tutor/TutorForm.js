// TutorForm.js
import React, { useState } from 'react';

const TutorForm = () => {
  const [tutor, setTutor] = useState({
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
    setTutor((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del Tutor:', tutor);
    // Puedes enviar los datos a tu servidor o realizar acciones adicionales aquí
  };

  return (
    <div>
      <h1>Formulario Datos del Tutor</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Carnet de Identidad:
          <input
            type="text"
            name="carnetIdentidad"
            value={tutor.carnetIdentidad}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Apellido Paterno:
          <input
            type="text"
            name="apellidoPaterno"
            value={tutor.apellidoPaterno}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Apellido Materno:
          <input
            type="text"
            name="apellidoMaterno"
            value={tutor.apellidoMaterno}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Nombres:
          <input
            type="text"
            name="nombres"
            value={tutor.nombres}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Idioma Frecuente:
          <input
            type="text"
            name="idiomaFrecuente"
            value={tutor.idiomaFrecuente}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Ocupación Laboral:
          <input
            type="text"
            name="ocupacionLaboral"
            value={tutor.ocupacionLaboral}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Grado de Instrucción:
          <input
            type="text"
            name="gradoInstruccion"
            value={tutor.gradoInstruccion}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Fecha de Nacimiento:
          <input
            type="text"
            name="fechaNacimiento"
            value={tutor.fechaNacimiento}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
};

export default TutorForm;
