import FormItems from "./FormItems.vue";

export default {
  title: "Example/FormItems",
  component: FormItems,
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { FormItems },
  template: '<FormItems v-bind="$props" />',
});

export const FormSample = Template.bind({});
FormSample.args = {
  title: "FormItems",
};
