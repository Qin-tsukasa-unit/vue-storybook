import { storiesOf } from '@storybook/vue';

import HelloWorld from './HelloWorld.vue';

storiesOf('Example/typescript-test/Label', module)
  .add('hello world', () => ({
    title: 'Example/typescript-test',
    components: { HelloWorld },
    template: `<HelloWorld msg="Vue.js + TypeScript + Storybook やってみたよ！"/>`,
  }));