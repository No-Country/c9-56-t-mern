import OwnerForm from "./OwnerForm"

export default {
  title: "Components/OwnerForm",
  component: OwnerForm,
  args: {},
}

const Template = (args) => <OwnerForm {...args} />

export const Default = Template.bind({})
Default.args = {}
