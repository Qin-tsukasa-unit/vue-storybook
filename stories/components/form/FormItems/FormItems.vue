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
      @input-email="validEmail"
      type="email"
      name="email-text"
      value=""
      placeholder="e-mailを入力してください。"
    ></MyInputEmail>
    <p>{{ email }}</p>
    <p v-if="emailErrors.length">
      <ul>
        <li v-for="(error, key) in emailErrors" :key="key">{{ error }}</li>
      </ul>
    </p>
    <button>送信</button>
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
      emailErrors: [],
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
      if (!this.emailErrors.length) {
        e.preventDefault();
      }
    },
    validEmail: function (value, errors) {
      this.email = value;
      this.emailErrors = errors;
    }
  }
};
</script>

<style scorped>
label {
  margin-right: 5px;
}
</style>
