import DialogSample from './DialogSample.vue';

export default {
  title: 'Example/Dialog/thayashi1988',
  component: DialogSample,
  argTypes: {
    layerBackgroundColor: { control: 'color' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { DialogSample },
  template: '<DialogSample v-bind="$props" />',
});

export const DialogSamples = Template.bind({});
DialogSamples.args = {
  layerOpen: true,
};