import MyCard from './Card.vue';

export default {
  title: 'Example/Card/wi-tech',
  component: MyCard,
  argTypes: {
    color: { control: 'color'},
    backgroundColor: { control: 'color' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyCard },
  template: '<my-card v-bind="$props" />',
});

export const Card = Template.bind({});
Card.args = {
  title: 'title sample',
  text: 'text sample.',
};
