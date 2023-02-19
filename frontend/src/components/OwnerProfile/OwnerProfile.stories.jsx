import OwnerProfile from "./OwnerProfile"

export default {
  title: "Components/OwnerProfile",
  component: OwnerProfile,
  args: {},
}

const Template = (args) => <OwnerProfile {...args} />

export const Default = Template.bind({})
Default.args = {}
