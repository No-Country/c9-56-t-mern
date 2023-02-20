import React, { useState } from "react";
import SimpleText from "../../../../components/simpleText/SimpleText";
import RegisterFormStepOne from "./RegisterFormStepOne";
import RegisterFormStepTwo from "./RegisterFormStepTwo";

function RegisterFormm() {
  const [page, setPage] = useState(0); // determina en que step estoy

  const [formData, setFormData] = useState({
    // este estado ayuda a mantener el hilo de datos durante 
    // el uso del stepper
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    username: "",
    nationality: "",
    other: "",
  }); //esto se le pasa por medio de props a los value= de los inputs de 
  //los dos componentes: RegisterFormStep1 y 2

  const FormTitles = ["Step 1", "Step 2"];
  // Array para mostrar en que paso vas

  const GetInfoPerPage = () => {
    if (page === 0) {
      return <div>
          <SimpleText
            title={"Registro"}
            paragraph={"Te pediremos algunos datos para crear tu perfil"}
          />
        <RegisterFormStepOne
      formData={formData} 
      setFormData={setFormData} />;</div> //envia las props
    } else if (page === 1) {
      return <div> 
          <SimpleText
            title={"Registro"}
            paragraph={"¡Falta poco! Ya casi tenés tu cuenta en Pawful. "}
          />
        <RegisterFormStepTwo 
      formData={formData} 
      setFormData={setFormData} /></div>;
    }
  };
  // renderizado condicional para mostrar dif forms

  return (
    <div className="form">
      <div className="stepperProgress"> {/* div para el stepper */}
        <div
          style={{ width: page === 0 ?"0%" : "100%" }}
        ></div>
      </div>
      <div className="form-container">
        <div className="header">

          <h1>{FormTitles[page]}</h1>
          {/* el titulo cambia dinamicamente segun el seteo del step */}
        </div>
        <div className="body">{GetInfoPerPage()}</div>
        <div className="footer">
          <button
          // se desactiva el boton cuando el index es 0
            disabled={page == 0}
            onClick={() => {
              setPage((currentStep) => currentStep - 1);
            }}
          >
            Volver
          </button>
          <button
            onClick={() => {
              // estas al final de la pagina haz esto
              if (page === FormTitles.length - 1) {
                alert(console.log(formData));
                ; //aca captura la data del formulario entero
              } else {
                //si no estas en el final sigue
                setPage((currentStep) => currentStep + 1);
              }
            }}
         > 
         {/* si la pagina termina su recorrido el boton cambia el nombre a 
         guardar */}
            {page === FormTitles.length - 1 ? "Guardar" : "Continuar"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegisterFormm;
