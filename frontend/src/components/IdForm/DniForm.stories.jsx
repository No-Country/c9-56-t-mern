import DniForm from "./"

export default {
  title: "components/dniForm",
  component: DniForm,
  args: {
    children: "IdForm",
  },
}

const Template = (args) => <DniForm {...args} />

export const Primary = Template.bind({})
