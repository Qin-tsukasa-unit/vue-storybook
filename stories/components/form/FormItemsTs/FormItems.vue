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

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { ItemAlternative } from '../ItemAlternative'
import MyCheckBox from '../CheckBoxTs/CheckBox.vue'
import MyRadioButton from '../RadioButtonTs/RadioButton.vue'
import MyInputEmail from '../InputEmailTs/InputEmail.vue'

@Component({
  components:{
    MyCheckBox,
    MyRadioButton,
    MyInputEmail
  }
})

export default class FormItems extends Vue {

  private email: string = ""
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
    event.preventDefault();
  }

}
</script>

<style scorped>
label {
  margin-right: 5px;
}
</style>
