import PetServices from "./PetServices"

export default {
  title: "Pages/PetServices",
  component: PetServices,
}

const Template = (args) => <PetServices {...args} />

export const Default = Template.bind({})
Default.args = {}