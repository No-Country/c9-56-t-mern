import React, { useState } from "react"
import RegisterFormStep1 from "../RegisterFormStep1"
import RegisterFormStep2 from "../RegisterFormStep2"
import SimpleText from "../../../../components/SimpleText"
import StepNavigation from "../../../../components/stepper/StepNavigation"

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
            paragraph={"Te pediremos algunos datos para crear tu perfil"}
          />
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
            paragraph={"¡Falta poco! Ya casi tenés tu cuenta en Pawful. "}
          />
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
    <div className="max-w-sm mt-5 mx-auto p-6 rounded-lg flex flex-col items-center">
      <StepNavigation
        labelArray={labelArray}
        currentStep={currentStep}
        updateStep={updateStep}
      ></StepNavigation>

      <br />
      {getInfoPerPage()}

      <p>
        Ya tienes una cuenta? <a href="/auth/login">Inciar Sesion</a>{" "}
      </p>
      <br />
      <br />
    </div>
  )
}

export default RegisterForm
