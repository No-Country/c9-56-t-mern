import BareButtom from "."

export default {
  title: "Components/BareButtom",
  component: BareButtom,
  args: {},
}

const Template = (args) => <SecondaryBtn {...args} />

export const Sample = Template.bind({})
Sample.args = {
  text: "Sample Button",
}
