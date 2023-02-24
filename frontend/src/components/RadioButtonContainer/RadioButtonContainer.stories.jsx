import RadioButtonContainer from "./RadioButtonContainer"

export default {
  title: "components/RadioButtonContainer",
  component: RadioButtonContainer,
  args: {
    children: "RadioButtonContainer",
  },
}

const Template = (args) => <RadioButtonContainer {...args} />

export const Primary = Template.bind({})
