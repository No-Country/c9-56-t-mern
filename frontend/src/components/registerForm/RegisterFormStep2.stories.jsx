import { MemoryRouter } from "react-router-dom"

import RegisterFormStep2 from "./RegisterFormStep2"

export default {
  title: "Components/RegisterFormStep2",
  component: RegisterFormStep2,
  args: {},
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
}

const Template = (args) => <RegisterFormStep2 {...args} />

export const Default = Template.bind({})
Default.args = {}
