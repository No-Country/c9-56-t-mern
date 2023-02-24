// import React, { useState } from "react";
import React, { useState } from "react"
import RegisterFormStep2 from "./RegisterFormStep2"
import RegisterFormStep1 from "./RegisterFormStep1"
import StepNavigation from "../stepper/StepNavigation"
import SimpleText from "../SimpleText/SimpleText"
import Stepper1 from "../Stepper1and2/Stepper1"
import Stepper2 from "../Stepper1and2/Stepper2"

const RegisterForm = (props) => {
  const labelArray = ["Step 1", "Step 2"]
  const [currentStep, setCurrentStep] = useState(1)

  const [formValues, setFormValues] = useState({})

  const updateStep = (step) => {
    setCurrentStep(step)
  }
  const getInfoPerPage = () => {
    if (currentStep === 1) {
      return (
        <div>
          <SimpleText
            title={"Registro"}
            paragraph={"Crea tu cuenta ensimple pasos"}
          />
          <Stepper1 />
          <RegisterFormStep1
            labelArray={labelArray}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            updateStep={updateStep}
            formValues={formValues}
            setFormValues={setFormValues}
          />
        </div>
      )
    } else if (currentStep === 2) {
      return (
        <div>
          <SimpleText
            title={"Registro"}
            paragraph={"¡Estas cada vez más cerca!"}
          />
          <Stepper2 />
          <RegisterFormStep2
            labelArray={labelArray}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            updateStep={updateStep}
            formValues={formValues}
            setFormValues={setFormValues}
          />
        </div>
      )
    }
  }

  const handleForm = (data) => {
    console.log(data)
  }

  return (
    <div className="max-w-sm mt-5 mx-auto  bg-slate-50 p-6 rounded-lg flex flex-col items-center">
      <StepNavigation
        labelArray={labelArray}
        currentStep={currentStep}
        updateStep={updateStep}
      ></StepNavigation>

      <br />
      {getInfoPerPage()}

      <p>
        Ya tienes una cuenta?{" "}
        <a
          href="/auth/login"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          Iniciar sesión
        </a>{" "}
      </p>
      <br />
      <br />
    </div>
  )
}

export default RegisterForm
