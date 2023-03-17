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
            className={"pt-4 lg:pt-7"}
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
    <div className="lg:flex lg:flex-col lg:h-screen lg:bg-violet-50 lg:m-auto">
      <div className="lg:hidden">
        <NavbarBack />
      </div>
      <div className="lg:flex-col lg:w-full lg:max-w-lg lg:h-[33rem] min-[1279px]:h-[40rem] min-[1400px]:h-[50rem] max-[1399px]:max-w-none min-[1400px]:max-w-2xl m-auto items-center justify-center lg:rounded-2xl lg:bg-[#F9FAFB]">
        <div className="flex flex-col justify-center max-w-sm m-auto w-full h-full px-4 ">
          <StepNavigation
            labelArray={labelArray}
            currentStep={currentStep}
            updateStep={updateStep}
          ></StepNavigation>

          {getInfoPerPage()}
        </div>
      </div>
    </div>
  )
}

export default RegisterForm
