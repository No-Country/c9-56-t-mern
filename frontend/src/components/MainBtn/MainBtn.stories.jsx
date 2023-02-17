import MainBtn from "./MainBtn"

export default {
  title: "Components/MainBtn",
  component: MainBtn,
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

const Template = (args) => <MainBtn {...args} />

export const Sample = Template.bind({})
Sample.args = {
  text: "Sample Button",
  type: "button",
}
