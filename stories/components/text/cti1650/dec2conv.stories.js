import dec2conv from './dec2conv.vue';

export default {
  title: 'Example/Text/cti1650',
  component: dec2conv,
  argTypes: {
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { dec2conv },
  template: '<dec2conv v-bind="$props" />',
});

export const Sample = Template.bind({});
Sample.args = {
    numDec:15,
};
