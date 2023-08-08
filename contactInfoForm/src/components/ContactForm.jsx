import React from "react";
import profileImage from "../assets/icon-user.png";

const ContactForm = ({ handleChange, formData }) => {
  return (
    <div className="mb-3">
      <div className="d-flex align-items-start">
        <img src={profileImage} alt="Profile" className="img-profile me-2" />
        <div className="form-group chat-bubble-left bg-secondary-subtle flex-grow-1">
          <h4>Datos de Contacto</h4>
          <input
            type="text"
            name="correoElectronico"
            value={formData.correoElectronico}
            onChange={handleChange}
            placeholder="Correo Electrónico"
            className="form-control mb-2"
          />
          <input
            type="text"
            name="telefonoCelular"
            value={formData.telefonoCelular}
            onChange={handleChange}
            placeholder="Teléfono Celular"
            className="form-control mb-2"
          />
        </div>
      </div>
      {formData.correoElectronico && formData.telefonoCelular && (
        <div className="chat-bubble-right">
          <div className="p-3 bg-pink">
            <p>Correo Electrónico: {formData.correoElectronico}</p>
            <p>Teléfono Celular: {formData.telefonoCelular}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
