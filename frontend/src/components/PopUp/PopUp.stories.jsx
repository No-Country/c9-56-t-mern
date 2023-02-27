import PetPopup from "."

export default {
  title: "Components/PopUp",
  component: PopUp,
  args: {},
}

const Template = (args) => <PopUp {...args} />

export const Default = Template.bind({})
Default.args = {}
