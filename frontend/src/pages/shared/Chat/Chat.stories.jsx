import MockAdapter from "axios-mock-adapter"
import React from "react"
import { Provider, useDispatch } from "react-redux"
import { MemoryRouter, Route, Routes } from "react-router-dom"
import pawfulApi from "../../../api/pawfulApi"
import { getProfile } from "../../../store/profile/profileSlice"
import { store } from "../../../store/store"
import Chat from "./Chat"

export default {
  title: "Pages/Chat",
  component: Chat,
  args: {},
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    asUser: {
      options: [0, 1, 2],
      control: {
        type: "select",
      },
    },
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

// Messages
mock.onGet("/messages").reply(200, [
  {
    content: "Newest",
    sentAt: "2021-08-03T00:00:00.000Z",
    sender: {
      id: "640224c7e1e0b6ad113bee3b",
      name: "Pietro Palombini",
      image:
        "https://res.cloudinary.com/dvm4qew1i/image/upload/v1677861985/lxhhod2rafpjf9k9uhvf.jpg",
    },
    receiver: {
      id: "64022062e1e0b6ad113bee07",
      name: "Santiago Roa",
      image:
        "https://res.cloudinary.com/dvm4qew1i/image/upload/v1677860961/anwakullyxjuidg2kw6o.webp",
    },
  },
  {
    content: "Mid",
    sentAt: "2021-08-02T00:00:00.000Z",
    sender: {
      id: "640224c7e1e0b6ad113bee3b",
      name: "Pietro Palombini",
      image:
        "https://res.cloudinary.com/dvm4qew1i/image/upload/v1677861985/lxhhod2rafpjf9k9uhvf.jpg",
    },
    receiver: {
      id: "64022062e1e0b6ad113bee07",
      name: "Santiago Roa",
      image:
        "https://res.cloudinary.com/dvm4qew1i/image/upload/v1677860961/anwakullyxjuidg2kw6o.webp",
    },
  },
  {
    content: "Oldest",
    sentAt: "2021-08-01T00:00:00.000Z",
    receiver: {
      id: "640224c7e1e0b6ad113bee3b",
      name: "Pietro Palombini",
      image:
        "https://res.cloudinary.com/dvm4qew1i/image/upload/v1677861985/lxhhod2rafpjf9k9uhvf.jpg",
    },
    sender: {
      id: "64022062e1e0b6ad113bee07",
      name: "Santiago Roa",
      image:
        "https://res.cloudinary.com/dvm4qew1i/image/upload/v1677860961/anwakullyxjuidg2kw6o.webp",
    },
  },
  //
])

const Template = ({ asUser }) => {
  const dispatch = useDispatch()

  if (asUser === 0) {
    dispatch(
      getProfile({
        id: "64022062e1e0b6ad113bee07",
        name: "Santiago Roa",
        image:
          "https://res.cloudinary.com/dvm4qew1i/image/upload/v1677860961/anwakullyxjuidg2kw6o.webp",
        userId: "userId2",
        phone: "phone",
        address: "address",
      }),
    )
  } else if (asUser === 1) {
    dispatch(
      getProfile({
        id: "640224c7e1e0b6ad113bee3b",
        name: "Pietro Palombini",
        image:
          "https://res.cloudinary.com/dvm4qew1i/image/upload/v1677861985/lxhhod2rafpjf9k9uhvf.jpg",
        userId: "userId2",
        phone: "phone",
        address: "address",
      }),
    )
  } else if (asUser === 2) {
    dispatch(
      getProfile({
        id: "63f3aa9e1d6e846b6841d5bc",
        name: "Name",
        image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
        userId: "userId2",
        phone: "phone",
        address: "address",
      }),
    )
  }

  return (
    <MemoryRouter initialEntries={["/chat"]}>
      <Routes>
        <Route path="/chat/:receiverId?" element={<Chat />} />
      </Routes>
    </MemoryRouter>
  )
}

export const Story = Template.bind({})
Story.args = {
  asUser: 0,
}
