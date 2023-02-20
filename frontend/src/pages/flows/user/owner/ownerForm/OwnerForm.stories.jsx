import OwnerForm from "."

export default {
  title: "Components/OwnerForm",
  component: OwnerForm,
  args: {},
}

const Template = (args) => <OwnerForm {...args} />

export const Default = Template.bind({})
Default.args = {}
