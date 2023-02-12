import React, { useState } from "react";
import RegisterFormStep1 from "./components/registerForm/RegisterFormStep1";
import RegisterFormStep2 from "./components/registerForm/RegisterFormStep2";
import StepNavigation from "./components/stepper/StepNavigation";


const RegisterForm =() => {
  // Registro Form
  const labelArray = ['Step 1', 'Step 2']
  const [currentStep, setCurrentStep] = useState(1);
  const updateStep = (step)=> {
    setCurrentStep(step);
  }
 const getInfoPerPage = () =>{
if(currentStep === 1){
  return (
    <div>
<RegisterFormStep1 
labelArray={labelArray}  
currentStep={currentStep} 
setCurrentStep={setCurrentStep}
updateStep={updateStep}/>
    </div>
  )}
  else {
    return (
      <div >
  <RegisterFormStep2 />
    </div>
    )
  }

 }


  return (
    <div className="App">
      <StepNavigation 
      labelArray={labelArray} 
      currentStep={currentStep} 
      updateStep={updateStep}>

      </StepNavigation>
      <h2><strong>Registro</strong></h2>
    <br />
       <br />
    <p>Texto de Bienvenida</p>
    <br />
    <br />

      {getInfoPerPage()}

      <p>Ya tienes una cuenta? <a href="http://">Inciar Sesion</a> </p>
      <br />
            <br />
      <button className="primaryButton" disabled={currentStep === 1} onClick={() => updateStep(currentStep - 1)}>Back</button>
      <button className="primaryButton" disabled={currentStep === labelArray.length} onClick={() => updateStep(currentStep+1)}>Next</button>


    </div> 
  ) 
}


export default RegisterForm;