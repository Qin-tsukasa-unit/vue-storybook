import MyAccordion from './Accordion.vue'

export default {
  title: 'Example/Accordion/ume05',
  component: MyAccordion,
  argTypes: {
    buttonBgColor: {control: 'color'},
    buttonTextColor: {control: 'color'},
    buttonArrowColor: {control: 'color'},
    innerBgColor: {control: 'color'},
    innerTextColor: {control: 'color'}
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyAccordion },
  template:
    '<my-accordion :title="title" :text="text" :buttonBgColor="buttonBgColor" :buttonTextColor="buttonTextColor" :buttonArrowColor="buttonArrowColor" :innerBgColor="innerBgColor" :innerTextColor="innerTextColor"/>',
});

export const Accordion = Template.bind({})
Accordion.args = {
  title: 'Sample Button Text.',
  text: 'Sample Inner Text.'
}