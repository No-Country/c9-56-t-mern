import MockAdapter from "axios-mock-adapter"
import { MemoryRouter } from "react-router-dom"
import PetsPanel from "."
import pawfulApi from "../../api/pawfulApi"

const mock = new MockAdapter(pawfulApi)
mock.onGet("/pets").reply(200, [
  {
    id: "id1",
    name: "Pet 1",
    photo:
      "https://media.cnn.com/api/v1/images/stellar/prod/220818142713-dogs-tears-emotions-wellness-stock.jpg?c=original",
    size: "Large",
    ageRange: "Puppy",
    gender: "MALE",
    profileId: "profileId",
    type: "DOG",
    race: "Race 1",
    about: "More information about pet 1",
  },
  {
    id: "id2",
    name: "Pet 2",
    photo:
      "https://media.istockphoto.com/id/1217828258/photo/grey-stripped-mixed-breed-cat-sitting-isolated-on-white.jpg?s=612x612&w=0&k=20&c=ZdsQKhn9NqMm8KQ-AlpT7D7E0SBv9pNJF-Sbs-j91R0=",
    size: "Small",
    ageRange: "Adult",
    gender: "FEMALE",
    profileId: "profileId",
    type: "CAT",
    race: "Race 2",
  },
])

export default {
  title: "Components/PetsPanel",
  component: PetsPanel,
  args: {},
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
}

const Template = (args) => <PetsPanel {...args} />

export const Default = Template.bind({})
Default.args = {}
