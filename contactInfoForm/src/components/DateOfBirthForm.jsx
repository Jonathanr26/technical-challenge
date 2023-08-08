import React from 'react';
import profileImage from "../assets/icon-user.png";

const DateOfBirthForm = ({ handleChange, formData }) => {
  return (
    <div className="mb-3">
      <div className="d-flex align-items-start">
        <img src={profileImage} alt="Profile" className="img-profile me-2" />
        <div className="form-group chat-bubble-left bg-secondary-subtle flex-grow-1">
        <h4>¿Cuál es tu fecha de nacimiento?</h4>
        <input type="text" name="dia" value={formData.dia} onChange={handleChange} placeholder="Día" className="form-control mb-2" />
        <input type="text" name="mes" value={formData.mes} onChange={handleChange} placeholder="Mes" className="form-control mb-2" />
        <input type="text" name="anio" value={formData.anio} onChange={handleChange} placeholder="Año" className="form-control mb-2" />
      </div>
      </div>
      {formData.dia && formData.mes && formData.anio && (
        <div className="chat-bubble-right">
          <div className="p-3 bg-pink">
            <p>Fecha de Nacimiento: {formData.dia} {formData.mes}{formData.anio}</p>
          </div>
        </div>
      )}
    </div>

  );
};

export default DateOfBirthForm;
