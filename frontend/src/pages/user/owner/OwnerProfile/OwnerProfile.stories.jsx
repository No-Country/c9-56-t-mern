import MockAdapter from "axios-mock-adapter"
import { MemoryRouter } from "react-router-dom"
import OwnerProfile from "."
import pawfulApi from "../../../../api/pawfulApi"

const mock = new MockAdapter(pawfulApi)
mock.onGet("/perfil").reply(200, [
  {
    id: "sampleId",
    address: "Sample Address",
    image:
      "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745",
    name: "Name",
    lastname: "Lastname",
    phone: "123456789",
    userId: "userId",
  },
])

mock.onPost("/perfil").reply(() => {
  console.log("Mocking post request")
  return pawfulApi.get("/perfil")
})

export default {
  title: "Pages/OwnerProfile",
  component: OwnerProfile,
  args: {},
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
}

const Template = (args) => <OwnerProfile {...args} />

export const Default = Template.bind({})
Default.args = {}
