import PopUp from "./PopUp"

export default {
  title: "Components/PetPopup",
  component: PopUp,
  args: {},
}

const Template = (args) => <PopUp {...args} />

export const Default = Template.bind({})
Default.args = {}
