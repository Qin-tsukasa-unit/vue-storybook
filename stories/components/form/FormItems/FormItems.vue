<template>
  <form action="">
    <p>{{ title }}</p>

    <MyCheckBox :items="itemData.items" @on-change="onCheckChange" v-model="itemData.check"></MyCheckBox>
    <p>{{ itemData.check }}</p>
    <MyRadioButton :items="itemData.radioItems" name="sample-radio" @on-change="onRadioChange" v-model="itemData.radio"></MyRadioButton>
    <p>{{ itemData.radio }}</p>
  </form>
</template>

<script>
import MyCheckBox from "../CheckBox/CheckBox.vue";
import MyRadioButton from "../RadioButton/RadioButton.vue";

export default {

  components: {
    MyCheckBox,
    MyRadioButton
  },
  data() {
    return {
      itemData: {
        check: [],
        radio: '',
        items: [
          { text: 'item1', checked: false  },
          { text: 'item2', checked: false },
          { text: 'item3', checked: false },
        ],
        radioItems: [
          { text: 'radio1', checked: true  },
          { text: 'radio2', checked: false },
        ],
      },
    };
  },
  props: {
    title: String,
  },
  methods: {
    onCheckChange(e) {
      // console.log(e);
    },
    onRadioChange(e) {
      // console.log(e);
    }
  }

};
</script>

<style scorped>
label {
  margin-right: 5px;
}
</style>
