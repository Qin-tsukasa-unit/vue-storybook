<template>
  <label :class="classes" >
    <input type="checkbox" :value="label">
    <span :style="style">{{ label }}</span>
  </label>
</template>

<script>
import './checkbox.css';

export default {
  name: 'my-checkbox',
  props: {
    label: {
      type: String,
      required: true,
    },
    easing: {
      type: Boolean,
      default: false,
    },
    backgroundColor: {
      type: String,
    },
    color: {
      type: String,
    },
  },

  computed: {
    classes() {
      return {
        'storybook-checkbox': true,
        'storybook-checkbox--easing': this.easing,
      };
    },
    style() {
      return {
        backgroundColor: this.backgroundColor,
        color: this.color,
      };
    },
  },

  methods: {
    
  },
};
</script>
