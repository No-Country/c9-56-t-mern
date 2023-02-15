// import React, { useState } from "react";
import React, { useState } from "react";
import RegisterFormStep2 from "./RegisterFormStep2";
import RegisterFormStep1 from "./RegisterFormStep1";
import StepNavigation from "../stepper/StepNavigation";



const RegisterForm = () => {
  // Registro Form
  const labelArray = ['Step 1', 'Step 2']
  const [currentStep, setCurrentStep] = useState(1);

  const [formValues, setFormValues] = useState({});

  const updateStep = (step) => {
    setCurrentStep(step);
  }
  const getInfoPerPage = () => {
    if (currentStep === 1) {
      return (
        <div>
          <RegisterFormStep1
            labelArray={labelArray}
            // onRefreshForm={setForm}
            currentStep={currentStep}
            ssetCurrentStep={setCurrentStep}
            updateStep={updateStep}
            formValues={formValues}
            setFormValues={setFormValues}
          />
        </div>
      )
    }
    else if (currentStep === 2) {
      return (
        <div >
          <RegisterFormStep2
            labelArray={labelArray}
            // onRefreshForm={setForm}
            currentStep={currentStep}
            ssetCurrentStep={setCurrentStep}
            updateStep={updateStep}
            formValues={formValues}
            setFormValues={setFormValues}
          // onRefreshForm={setForm}
          />
          {/* <ProfilePet /> */}
        </div>
      )
    }

  }

  const handleForm = (data) => {
    console.log(data)
  }

  return (
    <div className="App">
      <StepNavigation
        labelArray={labelArray}
        currentStep={currentStep}
        updateStep={updateStep}
      >

      </StepNavigation>
      <h2><strong>Registro</strong></h2>
      <br />
      <br />
      <p>Texto de Bienvenida</p>
      <br />
      <br />
      {getInfoPerPage()}


      <p>Ya tienes una cuenta? <a href="/auth/login">Inciar Sesion</a> </p>
      <br />
      <br />
      {/* <button onClick={()=> handleForm(form) } >Continuar</button> */}
      <button className="primaryButton" onClick={() => setCurrentStep(currentStep - 1)}>Back</button>
      <button className="primaryButton" onClick={() => setCurrentStep(currentStep + 1)}>Next</button>


    </div>
  )
}


export default RegisterForm;