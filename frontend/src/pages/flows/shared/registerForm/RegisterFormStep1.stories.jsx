import RegisterFormStep1 from "./RegisterFormStep1"

export default {
  title: "Components/bothFlows/registerForm/RegisterFormStep1",
  component: RegisterFormStep1,
  args: {
    setFormValues: () => {},
    updateStep: () => {},
    formValues: {},
  },
}

const Template = (args) => <RegisterFormStep1 {...args} />

export const Default = Template.bind({})
Default.args = {
  currentStep: 0,
}
