import { Provider } from "react-redux"
import { MemoryRouter } from "react-router-dom"
import { store } from "../../store/store"
import SuccessfulRegistration from "./SuccessfulRegistration"

export default {
  title: "Components/SuccessfulRegistration",
  component: SuccessfulRegistration,
  args: {},
}

const Template = (args) => (
  <Provider store={store}>
    <MemoryRouter>
      <SuccessfulRegistration {...args} />
    </MemoryRouter>
  </Provider>
)

export const Default = Template.bind({})
Default.args = {}
