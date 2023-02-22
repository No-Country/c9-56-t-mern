import DniForm from "./DniForm";

export default {
  title: "components/dniForm",
  component: DniForm,
  args: {
    children: "DniForm",
  },
};

const Template = (args) => <DniForm {...args}/>;

export const Primary = Template.bind({});