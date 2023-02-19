import React from "react"

import InputForm from "./InputForm"

export default {
  title: "Components/InputForm",
  component: InputForm,
  args: {},
}

const Template = (args) => <InputForm {...args} />

export const Sample = Template.bind({})
Sample.args = {
  label: "Label",
  placeholder: "Placeholder",
}
