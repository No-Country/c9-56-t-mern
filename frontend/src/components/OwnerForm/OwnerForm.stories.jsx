import { Provider } from "react-redux"
import { MemoryRouter } from "react-router-dom"
import { onLogin } from "../../store/auth/authSlice"
import { store } from "../../store/store"
import OwnerForm from "./OwnerForm"

store.dispatch(onLogin({ role: ["OWNER"] }))

export default {
  title: "Components/OwnerForm",
  component: OwnerForm,
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

const Template = (args) => <OwnerForm {...args} />

export const Default = Template.bind({})
Default.args = {}
