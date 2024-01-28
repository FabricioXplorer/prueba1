// EstudianteForm.js
import React, { useState } from 'react';

const EstudianteForm = () => {
  const [estudiante, setEstudiante] = useState({
    unidadEducativaId: '',
    sexo: '',
    nombre: '',
    apellido: '',
    lugarNacimiento: '',
    fechaNacimiento: '',
    discapacidad: '',
    padreCarnetIdentidad: '',
    madreCarnetIdentidad: '',
    tutorCarnetIdentidad: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEstudiante((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del Estudiante:', estudiante);
    // Puedes enviar los datos a tu servidor o realizar acciones adicionales aquí
  };

  return (
    <div>
      <h1>Formulario Estudiante</h1>
      <form onSubmit={handleSubmit}>
        <label>
          ID de la Unidad Educativa:
          <input
            type="text"
            name="unidadEducativaId"
            value={estudiante.unidadEducativaId}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Sexo:
          <input
            type="text"
            name="sexo"
            value={estudiante.sexo}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Nombre:
          <input
            type="text"
            name="nombre"
            value={estudiante.nombre}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Apellido:
          <input
            type="text"
            name="apellido"
            value={estudiante.apellido}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Lugar de Nacimiento:
          <input
            type="text"
            name="lugarNacimiento"
            value={estudiante.lugarNacimiento}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Fecha de Nacimiento:
          <input
            type="text"
            name="fechaNacimiento"
            value={estudiante.fechaNacimiento}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Discapacidad:
          <input
            type="text"
            name="discapacidad"
            value={estudiante.discapacidad}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Carnet de Identidad del Padre:
          <input
            type="text"
            name="padreCarnetIdentidad"
            value={estudiante.padreCarnetIdentidad}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Carnet de Identidad de la Madre:
          <input
            type="text"
            name="madreCarnetIdentidad"
            value={estudiante.madreCarnetIdentidad}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Carnet de Identidad del Tutor:
          <input
            type="text"
            name="tutorCarnetIdentidad"
            value={estudiante.tutorCarnetIdentidad}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
};

export default EstudianteForm;
