import PetForm2 from "./PetForm2"

export default {
  title: "Components/PetForm2",
  component: PetForm2,
  args: {},
}

const Template = (args) => <PetForm2 {...args} />

export const Default = Template.bind({})
Default.args = {}
