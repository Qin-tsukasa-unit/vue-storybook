<template>
  <form
    action=""
    @submit="checkForm"
    method="post"
  >
    <p>{{ title }}</p>

    <MyCheckBox :items="itemData.items" v-model="itemData.check"></MyCheckBox>
    <p>{{ itemData.check }}</p>
    <MyRadioButton :items="itemData.radioItems" name="sample-radio" v-model="itemData.radio"></MyRadioButton>
    <p>{{ itemData.radio }}</p>

    <MyInputEmail
      v-model.lazy="email"
      type="email"
      name="email"
      value=""
      placeholder="e-mailを入力してください。"
      :primary=true
    ></MyInputEmail>
    <MyInputEmail
      v-model.lazy="email"
      type="text"
      name="email-text"
      value=""
      placeholder="e-mailを入力してください。"
    ></MyInputEmail>
    <p>{{ email }}</p>
  </form>
</template>

<script>
import MyCheckBox from "../CheckBox/CheckBox.vue";
import MyRadioButton from "../RadioButton/RadioButton.vue";
import MyInputEmail from "../InputEmail/InputEmail.vue";

export default {

  components: {
    MyCheckBox,
    MyRadioButton,
    MyInputEmail
  },
  data() {
    return {
      email: '',
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
  methods:{
    checkForm: function (e) {
      e.preventDefault();
    }
  }
};
</script>

<style scorped>
label {
  margin-right: 5px;
}
</style>
