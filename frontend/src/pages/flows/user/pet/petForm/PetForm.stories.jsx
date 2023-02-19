import PetForm from "./PetForm"

export default {
  title: "Components/PetForm",
  component: PetForm,
  args: {},
}

const Template = (args) => <PetForm {...args} />

export const Default = Template.bind({})
Default.args = {}
