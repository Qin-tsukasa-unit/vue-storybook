import counters from './Counters.vue';

export default {
  title: 'Example/Counter/cti1650',
  component: counters,
  argTypes: {},
};
 
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { counters },
  template: '<counters />',
});

export const Sample = Template.bind({});
Sample.args = {};
