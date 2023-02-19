import TextArea from "./TextArea"

export default {
  title: "Components/TextArea",
  component: TextArea,
  args: {},
}

const Template = (args) => <TextArea {...args} />

export const SampleText = Template.bind({})
SampleText.args = {
  label: "Sample Label",
  placeholder: "Sample placeholder",
}
