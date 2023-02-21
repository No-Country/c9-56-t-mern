import { Provider } from "react-redux"
import { MemoryRouter } from "react-router-dom"
import { store } from "../../store/store"
import RegisterFormStep2 from "./RegisterFormStep2"

export default {
  title: "Components/RegisterFormStep2",
  component: RegisterFormStep2,
  args: {
    setFormValues: () => {},
    formValues: {},
  },
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

const Template = (args) => <RegisterFormStep2 {...args} />

export const Default = Template.bind({})
Default.args = {}
