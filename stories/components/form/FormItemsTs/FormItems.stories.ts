import { storiesOf } from '@storybook/vue';

import FormItemsTs from './FormItems.vue';

storiesOf('Example/FormItems-typescript', module)
  .add('Form Sample Ts', () => ({
    title: 'Example/FormItems-typescript',
    components: { FormItemsTs },
    template: `<FormItemsTs title="FormItems TypeScript"/>`,
  }));