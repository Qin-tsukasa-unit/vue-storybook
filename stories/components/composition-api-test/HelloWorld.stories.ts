import { storiesOf } from '@storybook/vue';

import HelloWorld from './HelloWorld.vue';

storiesOf('Example/composition-api-test/Label', module)
  .add('hello world', () => ({
    title: 'Example/composition-api-test',
    components: { HelloWorld },
    template: `<HelloWorld msg="Vue.js + CompositionAPI + Storybook" />`,
  }));