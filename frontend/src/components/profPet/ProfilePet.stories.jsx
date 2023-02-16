import ProfilePet from "./ProfilePet"

export default {
  title: "Components/ProfilePet",
  component: ProfilePet,
  args: {},
}

const Template = (args) => <ProfilePet {...args} />

export const Default = Template.bind({})
Default.args = {}
