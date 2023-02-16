import Step from "./Step"

export default {
  title: "Components/Step",
  component: Step,
  args: {
    index: 0,
    updateStep: () => {},
  },
}

const Template = (args) => <Step {...args} />

export const Selected = Template.bind({})
Selected.args = {
  selected: true,
}

export const NotSelected = Template.bind({})
NotSelected.args = {
  selected: true,
}
