<template>
  <div class="l-btn-container">
    <a :href="href" :class="classes" :style="style" v-if="showAnchorBtn">{{ anchorTxt }}</a>
    <button :type="type" :class="classes" @click="onClick" :style="style" v-else>{{ btnTxt }}</button>
  </div>
</template>

<script>
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
    type: {
      type: String,
      default: 'button',
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
<style lang="scss" scoped>
.l-btn{
  &-container{
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
  }
}

.m-btn{
  position: relative;
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  display: inline-block;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  border: none;
  border-radius: 3em;
  cursor: pointer;
  width: 100%;
  max-width: 50%;
  background-color: #42b983;
  padding: 15px 30px;
  outline: none;
  &-arrow{
    &-before{
      &::before{
        content: "";
        position: absolute;
        top: calc(50% - 4px);
        left: 15px;
        width: 8px;
        height: 8px;
        border: 3px solid #333;
        border-left: 0;
        border-bottom: 0;
        transform: rotate(45deg);
      }
    }
    &-after{
      &::after{
        content: "";
        position: absolute;
        top: calc(50% - 4px);
        right: 15px;
        width: 8px;
        height: 8px;
        border: 3px solid #333;
        border-left: 0;
        border-bottom: 0;
        transform: rotate(45deg);
      }
    }
  }
  &-white{
    color: #333;
    border: 1px solid #333;
    background-color: #fff;
  }
  &-full{
    max-width: 100%;
  }
  &-small{
    max-width: 30%;
  }
}
</style>