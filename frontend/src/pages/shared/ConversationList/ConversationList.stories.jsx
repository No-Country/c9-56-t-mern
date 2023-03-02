import ConversationList from "./ConversationList"

export default {
  title: "shared/ConversationList",
  component: ConversationList,
  args: {},
}

const Template = (args) => <ConversationList {...args} />

export const Default = Template.bind({})
