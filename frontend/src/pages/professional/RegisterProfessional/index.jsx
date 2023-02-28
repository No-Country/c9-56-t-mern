import React, { useState } from "react"
import SimpleText from "../../../components/SimpleText/SimpleText"
import Stepper1 from "../../../components/Stepper1and2/Stepper1"
import ProfessionalDataOne from "../../../components/RegisterProfessional/ProfessionalDataOne"
import Stepper2 from "../../../components/Stepper1and2/Stepper2"
import ProfessionalDataTwo from "../../../components/RegisterProfessional/ProfessionalDataTwo"
import StepNavigation from "../../../components/stepper/StepNavigation"

const FormRegisterProfessional = (props) => {
  const labelArray = ["Step 1", "Step 2"]
  const [currentStep, setCurrentStep] = useState(1)
  const [formValues, setFormValues] = useState({})

  const updateStep = (step) => {
    setCurrentStep(step)
  }

  const getForm = () => {
    if (currentStep === 1) {
      return (
        <div>
          <SimpleText
            title={"Vamos a conocernos"}
            paragraph={
              "Completa tu perfil para comenzar a ofrecer tus servicios"
            }
          />
          <Stepper1 />
          <ProfessionalDataOne
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
            title={"¡Ya casi!"}
            paragraph={"último paso para crear tu perfil"}
          />
          <Stepper2 />
          <ProfessionalDataTwo
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

  return (
    <div className="global-main-container">
      <StepNavigation
        labelArray={labelArray}
        currentStep={currentStep}
        updateStep={updateStep}
      ></StepNavigation>

      <br />

      {getForm()}
    </div>
  )
}

export default FormRegisterProfessional
