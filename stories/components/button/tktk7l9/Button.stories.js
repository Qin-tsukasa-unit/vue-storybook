import MyButton from './Button.vue';

export default {
  title: 'Example/Button/tktk7l9',
  component: MyButton,
  argTypes: {
    backgroundColor: { control: 'color' },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
    shape: { control: { type: 'select', options: ['oval', 'rectangle'] } },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyButton },
  template: '<my-button @onClick="onClick" v-bind="$props" />',
});

export const Oval = Template.bind({});
Oval.args = {
  shape: 'oval',
  label: 'Button',
};

export const Rectangle = Template.bind({});
Rectangle.args = {
  shape: 'rectangle',
  label: 'Button',
};
