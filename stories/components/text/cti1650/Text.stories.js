import NoticeText from './Text.vue';

export default {
  title: 'Example/Text/ibuki',
  component: NoticeText,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { NoticeText },
  template: '<notice-text v-bind="$props" />',
});

export const Question = Template.bind({});
Question.args = {
  type: 'question',
  label: 'texttexttexttexttext',
};

export const Danger = Template.bind({});
Danger.args = {
  type: 'danger',
  label: 'texttexttexttexttext',
};
