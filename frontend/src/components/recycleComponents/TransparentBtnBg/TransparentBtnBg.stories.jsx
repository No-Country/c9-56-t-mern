import TransparentBtnBg from "./TransparentBtnBg"

export default {
  title: "Components/TransparentBtnBg",
  component: TransparentBtnBg,
  args: {},
}

const Template = (args) => <SecondaryBtn {...args} />

export const Sample = Template.bind({})
Sample.args = {
  text: "Sample Button",
}
