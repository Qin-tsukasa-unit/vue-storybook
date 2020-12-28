<template>
  <div :class="headingContainerClass">
      <h2 :class="heading2Class" v-if="headingLevel2"><slot>見出しレベル2コンポーネント</slot></h2>
      <h3 :align="align" :class="heading3Class" v-if="headingLevel3"><span><slot>見出しレベル3コンポーネント</slot></span></h3>
  </div>
</template>

<script>
export default {
  name: 'Heading',
  data() {
    return{

    }
  },
  props: {
    /**
     * テキストの配置
     */
    align: {
      type: String,
      default: 'left',
      validator: function (value) {
        return ['left', 'center', 'right',].indexOf(value) !== -1;
      },
    },
    /**
     * 見出しレベル2
     */
    headingLevel2: {
      type:Boolean,
      default: true
    },
    /**
     * 見出しレベル3
     */
    headingLevel3: {
      type:Boolean,
      default: false
    },
    headingLevel3Border: {
      type:Boolean,
      default: true
    }
  },
  computed: {
    heading2Class() {
      return {
        'm-heading-2': true,
        'm-heading-3': false,
        [`m-heading-${this.align}`]: true
      };
    },
    heading3Class() {
      return {
        'm-heading-2': false,
        'm-heading-3': true,
        'm-heading-3-border': this.headingLevel3Border,
        [`m-heading-${this.align}`]: true
      };
    },
    headingContainerClass() {
      return {
        'l-heading-container': true,
        'l-heading2-container': this.headingLevel2,
        'l-heading3-container': this.headingLevel3,
      };
    },
  }
};
</script>

<style lang="scss" scoped>
.l-heading{
  $this: &;
  &-container{
    text-align: left;
    &#{$this}2-container{
      margin-top: 30px;
      margin-bottom: 50px;
    }
    &#{$this}3-container{
      margin-top: 15px;
      margin-bottom: 25px;
    }
  }
}
.m-heading{
  &-2{
    display: block;
    border-bottom: 2px solid #000;
    padding-bottom: 10px;
  }
  &-center{
    text-align: center;
  }
  &-right{
    text-align: right;
  }
  &-3{
    margin: 0;
    &-border{
      padding-left: 15px;
      span{
        position: relative;
        &::before{
          content: "";
          top: 0;
          left: -15px;
          position: absolute;
          width: 5px;
          height: 100%;
          background: #000;
        }
      }
    }
  }
}
</style>