import DniForm from "."

export default {
  title: "components/IdForm",
  component: DniForm,
  args: {
    children: "IdForm",
  },
}

const Template = (args) => <IdForm {...args} />

export const Primary = Template.bind({})
