import PetPopup from "./"

export default {
  title: "Components/PopUp",
  component: PetPopup,
  args: {},
}

const Template = (args) => <PetPopup {...args} />

export const Default = Template.bind({})
Default.args = {}
