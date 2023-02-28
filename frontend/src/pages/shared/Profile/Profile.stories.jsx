import MockAdapter from "axios-mock-adapter"
import React from "react"
import { Provider, useDispatch } from "react-redux"
import { MemoryRouter, Route, Routes } from "react-router-dom"
import Profile from "."
import pawfulApi from "../../../api/pawfulApi"
import { onLogin } from "../../../store/auth/authSlice"
import { store } from "../../../store/store"

export default {
  title: "Pages/Profile",
  component: Profile,
  args: {},
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
}

// Mocks

const mock = new MockAdapter(pawfulApi)

// Cloudinary
mock
  .onPost("https://api.cloudinary.com/v1_1/dvm4qew1i/image/upload")
  .reply(201, [
    {
      secure_url: "secureUrl",
    },
  ])

// Own Profile
mock.onGet("/perfil").reply(200, [
  {
    id: "ownId",
    address: "Own Address",
    image:
      "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745",
    name: "Name",
    phone: "123456789",
    userId: "ownUserId",
    titleCareer: ["Title 1", "Title 2"],
    dni: "12345678",
  },
])

// On image edit
mock.onPost("/perfil").reply(() => {
  console.log("Mocking post request")
  return pawfulApi.get("/perfil")
})

// Other Profile
mock.onGet("/perfil/sampleId").reply(200, [
  {
    id: "sampleId",
    address: "Other Address",
    image:
      "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745",
    name: "Name",
    phone: "123456789",
    userId: "userId",
    titleCareer: ["Cuidador de gatos", "Paseador de perros"],
    dni: "87654321",
  },
])

// Panels
// Pets Panel
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

// Services Panel
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

export const OwnerOwnProfile = () => {
  const dispatch = useDispatch()
  dispatch(onLogin({ role: ["OWNER"] }))

  return (
    <MemoryRouter>
      <Profile />
    </MemoryRouter>
  )
}

export const OwnerOtherProfile = () => {
  const dispatch = useDispatch()
  dispatch(onLogin({ role: ["PROFESSIONAL"] }))

  return (
    <MemoryRouter initialEntries={["/profile/owner/sampleId"]}>
      <Routes>
        <Route
          path="/profile/:profileRole/:profileId"
          element={<Profile />}
        ></Route>
      </Routes>
    </MemoryRouter>
  )
}

export const ProfessionalOwnProfile = () => {
  const dispatch = useDispatch()
  dispatch(onLogin({ role: ["PROFESSIONAL"] }))

  return (
    <MemoryRouter>
      <Profile />
    </MemoryRouter>
  )
}

export const ProfessionalOtherProfile = () => {
  const dispatch = useDispatch()
  dispatch(onLogin({ role: ["OWNER"] }))

  return (
    <MemoryRouter initialEntries={["/profile/professional/sampleId"]}>
      <Routes>
        <Route
          path="/profile/:profileRole/:profileId"
          element={<Profile />}
        ></Route>
      </Routes>
    </MemoryRouter>
  )
}
