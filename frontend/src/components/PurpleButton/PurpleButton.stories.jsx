import PurpleButton from "."

export default {
  title: "Components/PurpleButton",
  component: PurpleButton,
  args: {},
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["button", "submit", "reset"],
      },
    },
  },
}

const Template = (args) => <PurpleButton {...args} />

export const Sample = Template.bind({})
Sample.args = {
  text: "Sample Button",
  type: "button",
}
