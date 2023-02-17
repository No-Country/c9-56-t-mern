import SecondaryBtn from "./SecondaryBtn"

export default {
  title: "Components/SecondaryBtn",
  component: SecondaryBtn,
  args: {},
}

const Template = (args) => <SecondaryBtn {...args} />

export const Sample = Template.bind({})
Sample.args = {
  text: "Sample Button",
}
