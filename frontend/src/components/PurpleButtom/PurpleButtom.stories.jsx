import PurpleButtom from "."

export default {
  title: "Components/PurpleButtom",
  component: PurpleButtom,
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
