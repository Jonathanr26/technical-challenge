import React, { useState } from "react";
import NameForm from "./components/NameForm";
import DateOfBirthForm from "./components/DateOfBirthForm";
import ContactForm from "./components/ContactForm";
import ModalAlert from "./components/modals/ModalAlert";
import ModalConfirmation from "./components/modals/ModalConfirmation";
import iconForm from "./assets/icon-form.png";
import iconTimer from "./assets/icon-timer.png";

const App = () => {
  // Estado para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    nombre: "",
    segundoNombre: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    dia: "",
    mes: "",
    anio: "",
    correoElectronico: "",
    telefonoCelular: "",
  });

  // Función para actualizar el estado cuando los campos del formulario cambian
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Función para enviar los datos del formulario al servidor al confirmar
  const handleConfirmation = async () => {
    console.log("Datos capturados:", formData);
    try {
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error al enviar los datos:", error);
    }
    // Ocultar la ventana modal de confirmación y recargar la página para borrar los datos del formulario
    setShowConfirmation(false);
    window.location.reload();
  };

  // Estados para controlar la visibilidad de las ventanas modales
  const [showAlert, setShowAlert] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Función para manejar el evento de clic en el botón "Iniciar"
  const handleSubmit = () => {
    if (
      formData.nombre === "" ||
      formData.apellidoPaterno === "" ||
      formData.dia === "" ||
      formData.mes === "" ||
      formData.anio === "" ||
      formData.correoElectronico === "" ||
      formData.telefonoCelular === ""
    ) {
      // Mostrar la ventana modal de alerta si no se han completado todos los campos
      setShowAlert(true);
      setShowConfirmation(false);
    } else {
      // Mostrar la ventana modal de confirmación si todos los campos están llenos
      setShowConfirmation(true);
      setShowAlert(false);
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center ">
      <div className="w-75 p-3 my-3 border">
        <div className="bg-pink p-3 mb-3 form-header">
          <div className="d-flex align-items-center justify-content-center">
            <h2 className="me-5">Formulario</h2>
            <img className="ms-5" src={iconForm} alt="Timer Icon" />
          </div>
          <div className="d-flex align-items-center">
            <img className="me-2" src={iconTimer} alt="Timer Icon" />
            <small>En menos de 5 minutos</small>
          </div>
          <div className="red-line"></div>
        </div>
        <div>
          <NameForm formData={formData} handleChange={handleChange} />
          <DateOfBirthForm formData={formData} handleChange={handleChange} />
          <ContactForm formData={formData} handleChange={handleChange} />
        </div>
        <div className="chat-bubble-right bg-secondary-subtle">
          <div className="p-3 ">
            <p>Si tus datos son correctos por favor continuemos</p>
          </div>
        </div>
        <div className="text-center mt-3 ">
          <button onClick={handleSubmit} className="btn btn-iniciar">
            Iniciar
          </button>
        </div>
        <div className="chat-bubble-center">
          <div className="p-3 bg-pink">
            <p>
              Nombre: {formData.nombre} {formData.segundoNombre}{" "}
              {formData.apellidoPaterno} {formData.apellidoMaterno}
            </p>
            <p>
              Fecha de Nacimiento: {formData.dia} {formData.mes} {formData.anio}
            </p>
            <p>Correo Electrónico: {formData.correoElectronico}</p>
            <p>Teléfono Celular: {formData.telefonoCelular}</p>
          </div>
        </div>

        {/* Ventana modal de alerta */}
        <ModalAlert
          show={showAlert}
          onHide={() => setShowAlert(false)}
          title="Alerta"
          message="Por favor, complete todos los campos antes de continuar."
        />
        {/* Ventana modal de confirmación */}
        <ModalConfirmation
          show={showConfirmation}
          onHide={() => setShowConfirmation(false)}
          title="Confirmación"
          message="¿Estás seguro de que los datos son correctos?"
          onConfirm={handleConfirmation}
        />
      </div>
    </div>
  );
};

export default App;
