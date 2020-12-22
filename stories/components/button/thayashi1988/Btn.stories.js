import Btn from './Btn.vue';

export default {
  title: 'Example/button/thayashi1988',
  component: Btn,
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
    size: { control: { type: 'select', options: ['small', 'middle', 'full'] } },
    type: { control: { type: 'select', options: ['button', 'submit'] } },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Btn },
  template: '<Btn @onClick="onClick" v-bind="$props" />',
});

export const Middle = Template.bind({});
Middle.args = {
  btnTxt: 'buttonタグでのボタン(width50%)',
  anchorTxt: 'router-link（aタグ）でのボタン(width50%)',
};

export const Full = Template.bind({});
Full.args = {
  size: 'full',
  btnTxt: 'buttonタグでのボタン(width100%)',
  anchorTxt: 'router-link（aタグ）でのボタン(width100%)',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  btnTxt: 'buttonタグでのボタン(width30%)',
  anchorTxt: 'router-link（aタグ）でのボタン(width30%)',
};

export const Arrow = Template.bind({});
Arrow.args = {
  arrow: true,
  btnTxt: 'buttonタグでのボタン(右に矢印付き)',
  anchorTxt: 'router-link（aタグ）でのボタン(右に矢印付き)',
};

export const ArrowReverse = Template.bind({});
ArrowReverse.args = {
  arrowReverse: true,
  btnTxt: 'buttonタグでのボタン(左に矢印付き)',
  anchorTxt: 'router-link（aタグ）でのボタン(左に矢印付き)',
};
