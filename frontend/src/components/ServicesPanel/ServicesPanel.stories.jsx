import MockAdapter from "axios-mock-adapter"
import { MemoryRouter } from "react-router-dom"
import ServicesPanel from "."
import pawfulApi from "../../api/pawfulApi"

const mock = new MockAdapter(pawfulApi)

const mockContent = () => {
  mock.onGet("/services").reply(200, [
    {
      id: "id1",
      presentacionPersonal: "Presentación personal",
      presentacion_del_servicio: "Service",
      profileId: "profileId",
      categoryId: "CATEGORY1",
      image:
        "https://media.cnn.com/api/v1/images/stellar/prod/220818142713-dogs-tears-emotions-wellness-stock.jpg?c=original",
    },
    {
      id: "id2",
      presentacionPersonal: "Presentación personal",
      presentacion_del_servicio: "Service 2",
      profileId: "profileId",
      categoryId: "CATEGORY1",
      image:
        "https://media.istockphoto.com/id/1217828258/photo/grey-stripped-mixed-breed-cat-sitting-isolated-on-white.jpg?s=612x612&w=0&k=20&c=ZdsQKhn9NqMm8KQ-AlpT7D7E0SBv9pNJF-Sbs-j91R0=",
    },
  ])
}

export default {
  title: "Components/ServicesPanel",
  component: ServicesPanel,
  args: {},
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
}

export const Empty = () => {
  mock.onGet("/services").reply(200, [])
  return <ServicesPanel />
}

export const WithServices = () => {
  mockContent()
  return <ServicesPanel />
}

export const Own = () => {
  mockContent()
  return <ServicesPanel own />
}
