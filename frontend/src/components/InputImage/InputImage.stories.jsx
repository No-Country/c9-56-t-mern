import InputImage from "./InputImage"

export default {
  title: "Components/InputImage",
  component: InputImage,
  args: {
    onChange: () => {},
  },
}

const Template = (args) => <InputImage {...args} />

export const Sample = Template.bind({})
Sample.args = {
  urlImage: "https://www.w3schools.com/howto/img_avatar.png",
}

export const NoImage = Template.bind({})
NoImage.args = {}
