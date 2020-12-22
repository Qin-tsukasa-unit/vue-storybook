import Select from './Select.vue';
import SelectBox from './SelectBox.vue';

export default {
  title: 'Example/Select/thayashi1988',
  component: Select, SelectBox,
  argTypes: {
    // layerBackgroundColor: { control: 'color' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Select, SelectBox },
  template: '<Select v-bind="$props" />',
});

export const SelectDefault = Template.bind({});
SelectDefault.args = {};