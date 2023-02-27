import TitlesPanel from "."

export default {
  title: "Components/TitlesPanel",
  component: TitlesPanel,
  args: {
    titleCareers: [],
    own: false,
  },
}

const Template = (args) => <TitlesPanel {...args} />

export const Empty = Template.bind({})
Empty.args = {}

export const WithTitles = Template.bind({})
WithTitles.args = {
  titleCareers: ["Title 1", "Title 2"],
}

export const Own = Template.bind({})
Own.args = {
  own: true,
}
