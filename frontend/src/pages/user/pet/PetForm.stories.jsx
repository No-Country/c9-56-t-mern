import PetForm from "./PetForm"

export default {
  title: "pages/user/pet/PetForm",
  component: PetForm,
}

const Template = (args) => <PetForm {...args} />

export const Default = Template.bind({})
Default.args = {}
