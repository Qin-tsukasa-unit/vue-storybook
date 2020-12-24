<template>
  <form action="">
    <p>{{ title }}</p>

    <MyCheckBox :items="items" @on-change="onCheckChange" v-model="check"></MyCheckBox>
    <p>{{ check }}</p>
    <MyRadioButton :items="radioItems" name="sample-radio" @on-change="onRadioChange" v-model="radio"></MyRadioButton>
    <p>{{ radio }}</p>
  </form>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { ItemAlternative } from '../ItemAlternative'
import MyCheckBox from '../CheckBoxTs/CheckBox.vue'
import MyRadioButton from '../RadioButtonTs/RadioButton.vue'

@Component({
  components:{
    MyCheckBox,
    MyRadioButton
  }
})

export default class FormItems extends Vue {

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
  private title: string

  private onCheckChange(e: Array<string>): void {
    // console.log(e);
  }

  private onRadioChange(e: string): void {
    // console.log(e);
  }
}
</script>

<style scorped>
label {
  margin-right: 5px;
}
</style>
