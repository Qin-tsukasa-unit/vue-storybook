<template>
  <form action="">
    <p>{{ title }}</p>

    <MyCheckBox :items="items" v-model="check"></MyCheckBox>
    <p>{{ check }}</p>
    <MyRadioButton :items="radioItems" name="sample-radio" v-model="radio"></MyRadioButton>
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

}
</script>

<style scorped>
label {
  margin-right: 5px;
}
</style>
