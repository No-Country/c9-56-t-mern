import LoadingSpinner from "."

export default {
  title: "Components/LoadingSpinner",
  component: LoadingSpinner,
  args: {},
}

const Template = (args) => <LoadingSpinner {...args} />

export const Story = Template.bind({})
Story.args = {}
