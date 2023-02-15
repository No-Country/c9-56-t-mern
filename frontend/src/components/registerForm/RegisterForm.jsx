import React, { useState } from "react";
import RegisterFormStep2 from "./RegisterFormStep2";
import RegisterFormStep1 from "./RegisterFormStep1";
import StepNavigation from "../stepper/StepNavigation";



const RegisterForm = () => {
  // Registro Form
  const labelArray = ['Step 1', 'Step 2']
  const [currentStep, setCurrentStep] = useState(1);
  const updateStep = (step) => {
    setCurrentStep(step);
  }
  const getInfoPerPage = () => {
    if (currentStep === 1) {
      return (
        <div>
          <RegisterFormStep1
            labelArray={labelArray}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            updateStep={updateStep} />
        </div>
      )
    }
    else {
      return (
        <div >
          <RegisterFormStep2 />
        </div>
      )
    }

  }


  return (
    <div className="max-w-sm mt-5 mx-auto p-6 rounded-lg flex flex-col items-center">
      <StepNavigation
        labelArray={labelArray}
        currentStep={currentStep}
        updateStep={updateStep}>

      </StepNavigation>
      <h2 className="text-lg font-bold mb-4"><strong>Registro</strong></h2>
      <br />
      <br />
      <p className="text-lg font-bold mb-4">Texto de Bienvenida</p>
      <br />
      <br />

      {getInfoPerPage()}
      
      {currentStep === 1? 
      (<button
      className="bg-black text-white py-3 px-6 rounded-lg sm:py-4 sm:px-8 sm:rounded-xl"
       disabled={currentStep === labelArray.length} 
       onClick={() => updateStep(currentStep + 1)}>
        Continuar</button>)
      :(
      <button 
       className="primaryButton"
       disabled={currentStep === 1} 
       onClick={() => updateStep(currentStep -1)}>Back</button>)}
      <p>¿ya tienes una cuenta? 
      <a 
      href="http:#" 
      className="text-blue-600 hover:text-blue-800">Inciar Sesion</a>
       </p>
      <br />
      <br />
      
     

    
</div>
  )
}


export default RegisterForm;
