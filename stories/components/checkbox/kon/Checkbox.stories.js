import MyCheckbox from './Checkbox.vue';

export default {
  title: 'Example/Checkbox/kon',
  component: MyCheckbox,
  argTypes: {
    backgroundColor: { control: 'color' },
    color:{ control: 'color' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyCheckbox },
  template: '<my-checkbox v-bind="$props" />',
});

export const Checkbox = Template.bind({});
Checkbox.args = {
  label: 'Checkbox',
};

export const Easing = Template.bind({});
Easing.args = {
  easing:true,
  label: 'Easing',
};

