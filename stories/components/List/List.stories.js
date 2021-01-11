import List from "./List.vue";

export default {
  title: "Example/List",
  component: List,
  argTypes: {
    orderType: { control: { type: "select", options: ["1", "a", "i"] } },
    unOrderType: {
      control: { type: "select", options: ["disc", "circle", "square"] },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { List },
  template: '<list v-bind="$props" />',
});

export const OrderedList = Template.bind({});
OrderedList.args = {
  hasOrderedList: true,
  itemList: [
    "hogehogehogehogehogehogehogehoge\nhogehogehogehoge",
    "hogehogehogehogehogehogehogehoge",
  ],
};

export const UnOrderedList = Template.bind({});
UnOrderedList.args = {
  hasOrderedList: false,
  itemList: [
    "hogehogehogehogehogehogehogehoge\nhogehogehogehoge",
    "hogehogehogehogehogehogehogehoge",
  ],
};
