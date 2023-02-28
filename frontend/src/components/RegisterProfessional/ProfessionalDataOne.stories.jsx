import React from "react"
import { MemoryRouter } from "react-router-dom"

import ProfessionalDataOne from "./ProfessionalDataOne"

export default {
  title: "RegisterProfessional/ProfessionalDataOne",
  component: ProfessionalDataOne,
  args: {},
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
}

const Template = (args) => <ProfessionalDataOne {...args} />

export const Default = Template.bind({})
Default.args = {}
