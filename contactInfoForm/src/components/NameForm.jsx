import React from "react";
import profileImage from "../assets/icon-user.png";

const NameForm = ({ handleChange, formData }) => {
  return (
    <div className="mb-3 ">
      <div className="d-flex align-items-start">
        <img src={profileImage} alt="Profile" className="img-profile me-2" />
        <div className="form-group chat-bubble-left bg-secondary-subtle flex-grow-1">
          <h4>¿Cuál es tu nombre?</h4>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Nombre"
            className="form-control mb-2"
          />
          <input
            type="text"
            name="segundoNombre"
            value={formData.segundoNombre}
            onChange={handleChange}
            placeholder="Segundo Nombre"
            className="form-control mb-2"
          />
          <input
            type="text"
            name="apellidoPaterno"
            value={formData.apellidoPaterno}
            onChange={handleChange}
            placeholder="Apellido Paterno"
            className="form-control mb-2"
          />
          <input
            type="text"
            name="apellidoMaterno"
            value={formData.apellidoMaterno}
            onChange={handleChange}
            placeholder="Apellido Materno"
            className="form-control mb-2"
          />
        </div>
      </div>
      {formData.nombre && (
        <div className="chat-bubble-right">
          <div className="p-3 bg-pink">
            <p>
              Nombre: {formData.nombre} {formData.segundoNombre}{" "}
              {formData.apellidoPaterno} {formData.apellidoMaterno}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default NameForm;
