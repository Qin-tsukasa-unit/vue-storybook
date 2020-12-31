<template>
  <form
    action=""
    @submit="checkForm"
    method="post"
  >
    <p>{{ title }}</p>

    <MyCheckBox :items="items" v-model="check"></MyCheckBox>
    <p>{{ check }}</p>
    <MyRadioButton :items="radioItems" name="sample-radio" v-model="radio"></MyRadioButton>
    <p>{{ radio }}</p>

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

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { ItemAlternative } from '../ItemAlternative'
import MyCheckBox from '../CheckBoxTs/CheckBox.vue'
import MyRadioButton from '../RadioButtonTs/RadioButton.vue'
import MyInputEmail from '../InputEmailTs/InputEmail.vue'

interface EmailAlternative {
  value: string;
  errors: Array<string>;
}

@Component({
  components:{
    MyCheckBox,
    MyRadioButton,
    MyInputEmail
  }
})

export default class FormItems extends Vue {

  private email: string = ""
  private emailErrors: Array<string> = []
  private check: Array<string> = []
  private radio: string = ""
  private items: Array<ItemAlternative> = [
    { text: 'item1', checked: false  },
    { text: 'item2', checked: false },
    { text: 'item3', checked: false }
  ]
  private radioItems: Array<ItemAlternative> = [
    { text: 'radio1', checked: true  },
    { text: 'radio2', checked: false }
  ]

  @Prop()
  private title!: string

  private checkForm(event: Event) :void {
    if (!this.emailErrors.length) {
        event.preventDefault();
      }
  }

  private validEmail(obj: EmailAlternative) :void {
    this.email = obj.value;
    this.emailErrors = obj.errors;
  }
}
</script>

<style scorped>
label {
  margin-right: 5px;
}
</style>
