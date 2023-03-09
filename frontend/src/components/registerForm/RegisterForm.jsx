import React, { useState } from "react"
import RegisterFormStep2 from "./RegisterFormStep2"
import RegisterFormStep1 from "./RegisterFormStep1"
import StepNavigation from "../stepper/StepNavigation"
import SimpleText from "../SimpleText/SimpleText"
import Stepper1 from "../Stepper1and2/Stepper1"
import Stepper2 from "../Stepper1and2/Stepper2"
import NavbarBack from "../../pages/shared/Navbar/NavbarBack"

const RegisterForm = () => {
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
          className={"pt-4 lg:pt-7"}
            title={"Registro"}
            paragraph={"Crea tu cuenta en simples pasos"}
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
            className={"pt-4 lg-pt-7"}
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
    <div
      id="bg"
      className="lg:flex lg:flex-col lg:items-center lg:h-screen lg:bg-violet-50 lg:py-px-11 lg:m-auto"
    >
      <div className="lg:hidden">
        <NavbarBack />
      </div>
      <div
        id="rounded-container"
        className="lg:flex-col md:w-[40%] lg:h-[88%] md:h-[80%] m-auto flex items-center justify-center lg:rounded-2xl lg:bg-[#F9FAFB]"
      >
        <div
          id="content-container"
          className="flex flex-col self-center max-w-sm m-auto w-full h-full p-4 lg:px-15 lg:pb-25"
        >
          <StepNavigation
            labelArray={labelArray}
            currentStep={currentStep}
            updateStep={updateStep}
          ></StepNavigation>

          {getInfoPerPage()}

          <div className="flex justify-center py-4 lg:py-3">
            <p className="text-caption font-caption pr-2">
              ¿Ya tienes una cuenta?
            </p>
            <a
              href="/auth/login"
              className="text-indigo-600 hover:text-blue-800 underline text-link font-link"
            >
              Iniciar sesión
            </a>
          </div>
        </div>
        <div className="items-center m-auto pb-8 hidden md:block lg:block">
          <img
            className="w-32 h-6 md:hidden hidden lg:block"
            src="https://res.cloudinary.com/dw639wmis/image/upload/v1678093239/pawful_logo_i92k6p.png"
            alt="pawful-logo"
          />
        </div>
      </div>
    </div>
  )
}

export default RegisterForm
