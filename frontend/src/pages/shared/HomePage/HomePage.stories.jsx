import React from "react"
import { MemoryRouter } from "react-router-dom"

import HomePage from "."

export default {
  title: "Components/HomePage",
  component: HomePage,
  args: {},
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
}

const Template = (args) => <HomePage {...args} />

export const Default = Template.bind({})
Default.args = {}
