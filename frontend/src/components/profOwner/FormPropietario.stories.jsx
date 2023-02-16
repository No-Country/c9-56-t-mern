import FormPropietario from "./FormPropietario"

export default {
  title: "Components/FormPropietario",
  component: FormPropietario,
  args: {},
}

const Template = (args) => <FormPropietario {...args} />

export const Default = Template.bind({})
Default.args = {}
