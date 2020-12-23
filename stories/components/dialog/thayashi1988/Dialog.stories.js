import Dialog from './Dialog.vue';

export default {
  title: 'Example/Dialog/thayashi1988',
  component: Dialog,
  argTypes: {
    layerBackgroundColor: { control: 'color' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Dialog },
  template: '<Dialog v-bind="$props" />',
});

export const BasicDialog = Template.bind({});
BasicDialog.args = {
  // triggerBtnTxt: '開く',
  // triggerAnchorTxt: '',
  // cardTtl: 'カードコンポーネントを',
  // cardTxt: '使ってみました',
  // closeBtnTxt: '閉じる',
  // closeAnchorTxt: '',
};