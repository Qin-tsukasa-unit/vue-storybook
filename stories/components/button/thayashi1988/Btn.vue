<template>
  <div class="l-btn-container">
    <a :href="href" :class="classes" :style="style" v-if="showAnchorBtn">{{ anchorTxt }}</a>
    <button type="button" :class="classes" @click="onClick" :style="style" v-else>{{ btnTxt }}</button>
  </div>
</template>

<script>
import './button.css';

export default {
  name: 'Btn',

  props: {
    anchorTxt: {
      type: String,
      required: true,
    },
    btnTxt: {
      type: String,
      required: true,
    },
    href: {
      type: String,
    },
    primary: {
      type: Boolean,
      default: true,
    },
    arrow: {
      type: Boolean,
      default: false,
    },
    arrowReverse: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'middle',
      validator: function (value) {
        return ['small', 'middle', 'full',].indexOf(value) !== -1;
      },
    },
    backgroundColor: {
      type: String,
    },
    color: {
      type: String,
    },
    showAnchorBtn: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    classes() {
      return {
        'm-btn': true,
        'm-btn-white': !this.primary,
        [`m-btn-${this.size}`]: true,
        'm-btn-arrow-after': this.arrow,
        'm-btn-arrow-before': this.arrowReverse,
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
    onClick() {
      this.$emit('onClick');
    },
  },
};
</script>
