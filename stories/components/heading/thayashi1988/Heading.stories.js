import Heading from './Heading.vue';

export default {
  title: 'Example/Heading/thayashi1988',
  component: Heading,
  argTypes: {
    align: { control: { type: 'select', options: ['left', 'center', 'right'] } },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Heading, },
  template: '<Heading v-bind="$props" />',
});

export const Heading2 = Template.bind({});
Heading2.args = {};