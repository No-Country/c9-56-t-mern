import Contact from "./Contact"

export default {
  title: "shared/Contact",
  component: Contact,
  args: {},
}

const Template = (args) => <Contact {...args} />

export const Default = Template.bind({})
