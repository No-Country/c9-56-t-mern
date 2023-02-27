import ProfilePet from "."

export default {
  title: "Components/PetProfile",
  component: ProfilePet,
  args: {},
}

const Template = (args) => <ProfilePet {...args} />

export const Default = Template.bind({})
Default.args = {}
