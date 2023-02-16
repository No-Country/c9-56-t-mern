import PerfilPropietario from "./PerfilPropietario"

export default {
  title: "Components/PerfilPropietario",
  component: PerfilPropietario,
  args: {},
}

const Template = (args) => <PerfilPropietario {...args} />

export const Default = Template.bind({})
Default.args = {}
