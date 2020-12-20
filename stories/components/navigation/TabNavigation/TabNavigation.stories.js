import TabNavigation from "./TabNavigation.vue";

export default {
  title: "Example/TabNavigation",
  component: TabNavigation,
  argTypes: {
    color: {
      control: { type: "select", options: ["", "primary", "light", "dark"] },
    },
    size: { control: { type: "select", options: ["", "medium", "large"] } },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TabNavigation },
  template: '<TabNavigation v-bind="$props" />',
});

export const TabPrimary = Template.bind({});
TabPrimary.args = {
  size: "medium",
  color: "primary",
  title: "TabNavigation",
};
