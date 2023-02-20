import { MemoryRouter } from "react-router-dom"

import SuccessfulRegistration from "."

export default {
  title: "Components/SuccessfulRegistration",
  component: SuccessfulRegistration,
  args: {},
}

const Template = (args) => (
  <MemoryRouter>
    <SuccessfulRegistration {...args} />
  </MemoryRouter>
)

export const Default = Template.bind({})
Default.args = {}
