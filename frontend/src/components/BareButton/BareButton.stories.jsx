import BareButton from "."

export default {
  title: "Components/BareButton",
  component: BareButton,
  args: {},
}

const Template = (args) => <BareButton {...args} />

export const Sample = Template.bind({})
Sample.args = {
  text: "Sample Button",
}
