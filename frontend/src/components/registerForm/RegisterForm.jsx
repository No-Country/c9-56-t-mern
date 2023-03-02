import React, { useState } from "react"
import RegisterFormStep2 from "./RegisterFormStep2"
import RegisterFormStep1 from "./RegisterFormStep1"
import StepNavigation from "../stepper/StepNavigation"
import SimpleText from "../SimpleText/SimpleText"
import Stepper1 from "../Stepper1and2/Stepper1"
import Stepper2 from "../Stepper1and2/Stepper2"
import NavbarBack from "../../pages/shared/Navbar/NavbarBack"

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
          <NavbarBack />
          <div className="mt-10">
            <SimpleText
              title={"Registro"}
              paragraph={"Crea tu cuenta en simples pasos"}
            />
          </div>
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
    <div className="global-main-container">
      <StepNavigation
        labelArray={labelArray}
        currentStep={currentStep}
        updateStep={updateStep}
      ></StepNavigation>

      {getInfoPerPage()}

      <div className="flex w-full justify-center mt-6">
        <p className="text-caption font-caption mr-2">
          ¿Ya tienes una cuenta?{" "}
        </p>
        <a href="/auth/login" className="global-link text-link font-link">
          Iniciar sesión
        </a>
      </div>
    </div>
  )
}

export default RegisterForm
