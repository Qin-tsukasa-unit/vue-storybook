import Dropdown from "./Dropdown.vue";

export default {
  title: "Example/Dropdown",
  component: Dropdown,
  argTypes: {
    size: { control: { type: "select", options: ["", "medium", "large"] } },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Dropdown },
  template: '<Dropdown v-bind="$props" />',
});

export const DropdownMedium = Template.bind({});
DropdownMedium.args = {
  size: "medium",
  text: "DropdownMenu",
};
