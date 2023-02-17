import RegisterForm from "./RegisterForm"
import SimpleText from "../recycleComponents/SimpleText/SimpleText"

export default {
  title: "Components/RegisterForm",
  component: RegisterForm,
  args: {},
}

const Template = (args) => <RegisterForm {...args} />

export const Default = Template.bind({})
Default.args = {}
