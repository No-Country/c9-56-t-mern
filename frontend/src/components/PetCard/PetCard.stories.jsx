import PetCard from "./PetCard"

export default {
  title: "Components/PetCard",
  component: PetCard,
}

const Template = (args) => <PetCard {...args} />

export const Default = Template.bind({})
Default.args = {
  name: "Luly",
}
