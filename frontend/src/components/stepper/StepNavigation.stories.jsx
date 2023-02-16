import StepNavigation from "./StepNavigation"

export default {
  title: "Components/StepNavigation",
  component: StepNavigation,
  args: {
    labelArray: ["Label A", "Label B", "Label C", "Label D", "Label E"],
    updateStep: () => {},
    currentStep: 0,
  },
}

const Template = (args) => <StepNavigation {...args} />

export const Default = Template.bind({})
Default.args = {}
