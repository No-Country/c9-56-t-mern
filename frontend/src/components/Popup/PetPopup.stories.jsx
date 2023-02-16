import PetPopup from "./PetPopup"

export default {
  title: "Components/PetPopup",
  component: PetPopup,
  args: {},
}

const Template = (args) => <PetPopup {...args} />

export const Default = Template.bind({})
Default.args = {}
