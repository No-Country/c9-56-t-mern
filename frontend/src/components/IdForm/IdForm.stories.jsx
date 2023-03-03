import IdForm from "."

export default {
  title: "components/IdForm",
  component: IdForm,
  args: {
    children: "IdForm",
  },
}

const Template = (args) => <IdForm {...args} />

export const Primary = Template.bind({})
