import SimpleText from "./SimpleText"

export default {
  title: "Components/SimpleText",
  component: SimpleText,
  args: {},
}

const Template = (args) => <SimpleText {...args} />

export const SampleText = Template.bind({})
SampleText.args = {
  title: "Sample title",
  paragraph:
    "Adipisicing est labore anim est amet ea excepteur duis. Dolore excepteur adipisicing voluptate do occaecat id elit nulla. Tempor anim qui est Lorem do magna laboris. Exercitation officia do aute magna dolore ex ad. Mollit mollit nisi reprehenderit pariatur aliquip anim. In amet ex proident elit incididunt tempor. Adipisicing veniam id dolore laboris commodo nulla.",
}
