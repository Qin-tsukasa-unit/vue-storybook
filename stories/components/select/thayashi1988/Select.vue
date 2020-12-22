<template>
  <form class="l-form" @submit.prevent="checkSubmit">
    <SelectBox
      selectId="prefSelect"
      selectName="prefSelect"
      v-model="selectValue"
    >都道府県を選択してください
    <template #error>
        <span class="m-txt-alert" v-if="notSelected">都道府県を選択してください</span>
    </template>
    </SelectBox>
    <Btn
      anchorTxt=""
      btnTxt="送信する"
      primary
      size="middle"
      type="submit"
    ></Btn>
  </form>
</template>

<script>
import './select.css';
import SelectBox from './SelectBox';
import Btn from '../../button/thayashi1988/Btn';

export default {
  name: 'Select',
  data() {
    return {
      selectValue: 'none',
      notSelected: false,
    }
  },
  methods: {
    checkSubmit() {
      console.log(this.selectValue)
      if(this.selectValue === 'none'){
        this.notSelected = true
      } else {
        this.notSelected = false
      }
    }
  },
  components: {
    SelectBox,
    Btn,
  }
};

</script>
