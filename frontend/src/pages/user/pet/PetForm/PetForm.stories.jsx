import PetForm from "."

export default {
  title: "Pages/PetForm",
  component: PetForm,
}

const Template = (args) => <PetForm {...args} />

export const Default = Template.bind({})
Default.args = {}
