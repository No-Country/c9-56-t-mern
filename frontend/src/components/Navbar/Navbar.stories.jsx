import Navbar from "./Navbar"

export default {
  title: "Components/Navbar",
  component: Navbar,
}

const Template = (args) => <Navbar {...args} />

export const Default = Template.bind({})
Default.args = {}
