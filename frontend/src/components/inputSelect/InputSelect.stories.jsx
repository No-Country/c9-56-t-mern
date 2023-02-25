import InputSelect from "./InputSelect"

export default {
  title: "components/inputSelect",
  component: InputSelect,
  args: {
    children: "InputSelect",
  },
}

const Template = (args) => <InputSelect {...args} />

export const Primary = Template.bind({})
