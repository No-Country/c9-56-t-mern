import { Provider } from "react-redux"
import { MemoryRouter } from "react-router-dom"
import { store } from "../../../store/store"
import LoginForm from "./LoginForm"

export default {
  title: "Components/LoginForm",
  component: LoginForm,
  args: {},
  decorators: [
    (Story) => (
      <Provider store={store}>
        <MemoryRouter>
          <Story />
        </MemoryRouter>
      </Provider>
    ),
  ],
}

const Template = (args) => <LoginForm {...args} />

export const Default = Template.bind({})
Default.args = {}
