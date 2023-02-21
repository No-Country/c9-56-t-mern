import { Provider } from "react-redux"
import { MemoryRouter } from "react-router-dom"
import { onLogin } from "../../store/auth/authSlice"
import { store } from "../../store/store"
import FormPropietario from "./FormPropietario"

store.dispatch(onLogin({ role: ["OWNER"] }))

export default {
  title: "Components/FormPropietario",
  component: FormPropietario,
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

const Template = (args) => <FormPropietario {...args} />

export const Default = Template.bind({})
Default.args = {}
