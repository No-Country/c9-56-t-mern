import RegisterForm from "./RegisterForm"

export default {
  title: "Components/RegisterForm",
  component: RegisterForm,
  args: {},
}

const Template = (args) => <RegisterForm {...args} />

export const Default = Template.bind({})
Default.args = {}
