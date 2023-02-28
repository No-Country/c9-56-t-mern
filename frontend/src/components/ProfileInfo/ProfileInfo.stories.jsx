import React from "react"

import ProfileInfo from "."

export default {
  title: "Components/ProfileInfo",
  component: ProfileInfo,
  args: {
    handleImageChange: () => {},
    handleEdit: () => {},
  },
}

const Template = (args) => <ProfileInfo {...args} />

export const Story = Template.bind({})
Story.args = {
  urlImage:
    "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745",
  name: "Name",
  personalInfo: [
    {
      type: "address",
      value: "Sample Address",
    },
    {
      type: "phone",
      value: "123456789",
    },
  ],
}
