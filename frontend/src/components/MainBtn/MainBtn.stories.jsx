import MainBtn from "./MainBtn"

export default {
  title: "Components/MainBtn",
  component: MainBtn,
  args: {},
}

const Template = (args) => <MainBtn {...args} />

export const SampleText = Template.bind({})
SampleText.args = {
  text: "Sample Button",
}
