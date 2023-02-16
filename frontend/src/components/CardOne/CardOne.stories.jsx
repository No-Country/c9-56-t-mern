import CardOne from "./CardOne"

export default {
  title: "Components/CardOne",
  component: CardOne,
  args: {},
}

const Template = (args) => <CardOne {...args} />

export const SampleImage = Template.bind({})
SampleImage.args = {
  image:
    "https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1175550351.jpg",
}
