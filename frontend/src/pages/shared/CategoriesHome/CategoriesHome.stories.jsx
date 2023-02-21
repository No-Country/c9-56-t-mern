import React from "react"

import CategoriesHome from "."

export default {
  title: "Components/CategoriesHome",
  component: CategoriesHome,
  args: {},
}

const Template = (args) => <CategoriesHome {...args} />

export const Default = Template.bind({})
Default.args = {}
