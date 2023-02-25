import RadioButton from "./RadioButton"

export default {
  title: "components/RadioButton",
  component: RadioButton,
  args: {
    children: "RadioButton",
  },
}

const Template = (args) => <RadioButton {...args} />

export const Primary = Template.bind({})
