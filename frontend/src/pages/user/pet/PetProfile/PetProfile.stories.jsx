import ProfilePet from "."

export default {
  title: "Components/PetProfile",
  component: ProfilePet,
  args: {},
}

const Template = (args) => <ProfilePet {...args} />

export const Default = Template.bind({})
Default.args = {
  image:
    "https://res.cloudinary.com/axiever/image/upload/v1677159795/Dog_zagtlo.png",
  name: "Lucy",
  raze: "Caniche",
  owner: "Sabrina",
  sex: "Hembra",
  size: "Chico",
  age: "Adulto",
}
