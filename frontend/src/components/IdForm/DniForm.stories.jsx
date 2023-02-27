import DniForm from "."

export default {
  title: "components/dniForm",
  component: DniForm,
  args: {
    children: "IdForm",
  },
}

const Template = (args) => <IdForm {...args} />

export const Primary = Template.bind({})
