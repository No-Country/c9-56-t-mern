import InputImage from "./InputImage"

export default {
  title: "Components/InputImage",
  component: InputImage,
  args: {
    onChange: () => {},
  },
}

const Template = (args) => <InputImage {...args} />

export const Default = Template.bind({})
Default.args = {}
