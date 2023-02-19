import PetProfile from "./PetProfile"

export default {
  title: "Components/PetProfile",
  component: PetProfile,
  args: {},
}

const Template = (args) => <PetProfile {...args} />

export const Default = Template.bind({})
Default.args = {}
