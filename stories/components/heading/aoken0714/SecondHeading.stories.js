import Heading from "./SecondHeading.vue";

export default {
  title: "Example/Heading/aoken0714",
  component: Heading,
  argTypes: {
    level: { control: { type: "select", options: [1, 2, 3, 4, 5, 6] } },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Heading },
  template: '<heading v-bind="$props" >見出しをrenderで作成</heading>',
});

export const Headings = Template.bind({});
Headings.args = {
  level: 1,
};
