<template>
  <div class="l-heading-container" :class="headingContainerClass">
      <h2 class="m-heading-2" :class="heading2ClassOptions" v-if="headingLevel2"><slot>見出しレベル2コンポーネント</slot></h2>
      <h3 class="m-heading-3" :class="heading3ClassOptions" v-if="headingLevel3"><span><slot>見出しレベル3コンポーネント</slot></span></h3>
  </div>
</template>

<script>
export default {
  name: 'Heading',
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
    /**
     * 見出しレベル3の左に縦線を付与
     */
    headingLevel3Border: {
      type:Boolean,
      default: true
    }
  },
  computed: {
    heading2ClassOptions() {
      return {
        [`m-heading-${this.align}`]: true
      };
    },
    heading3ClassOptions() {
      return {
        'm-heading-3-border': this.headingLevel3Border,
        [`m-heading-${this.align}`]: true
      };
    },
    headingContainerClass() {
      return {
        'l-heading-container-2': this.headingLevel2,
        'l-heading-container-3': this.headingLevel3,
      };
    },
  }
};
</script>

<style lang="scss" scoped>
.l-heading{
  &-container{
    text-align: left;
    &-2{
      margin-top: 30px;
      margin-bottom: 50px;
    }
    &-3{
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