<template>
  <p :class="classes" :style="style">{{ label }}</p>
</template>

<script>
import './text.css';

export default {
  name: 'notice-text',

  props: {
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: false,
    },
    backgroundColor: {
      type: String,
    },
  },

  computed: {
    classes() {
      return {
        'storybook-text': true,
        'storybook-text--question': this.type === 'question',
        'storybook-text--danger': this.type === 'danger',
      };
    },
    style() {
      return {
        backgroundColor: this.backgroundColor,
      };
    },
  },
};
</script>
