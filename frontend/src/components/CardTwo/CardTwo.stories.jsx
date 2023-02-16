import CardTwo from "./CardTwo"

export default {
  title: "Components/CardTwo",
  component: CardTwo,
  args: {},
}

const Template = (args) => <CardTwo {...args} />

export const SampleImage = Template.bind({})
SampleImage.args = {
  image:
    "https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1175550351.jpg",
}
