<template>
  <fieldset>
    <template v-for="(item, key) in items">
      <label :key="key">
        <input
          type="checkbox"
          :value="item.text"
          :checked="item.checked"
          @change="changeSelected"
        >{{ item.text }}
      </label>
    </template>
  </fieldset>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import { ItemAlternative } from '../ItemAlternative';

@Component
export default class CheckBox extends Vue {
  private item: ItemAlternative
  private selected: Array<string> = []

  @Prop()
  private items: Array<ItemAlternative>

  private changeSelected() :void {
    if (event!.target instanceof HTMLInputElement) {
      const e: HTMLInputElement = event.target;
      if(e.checked){
        this.selected.push(e.value);
        this.selected = [...new Set(this.selected)];
      }else{
        this.selected = this.selected.filter((value, index, self) => self.indexOf(e.value) !== index);
      }
      this.updateValue(event!.target)
    }
  }

  @Emit('input')
  private updateValue(elm: HTMLInputElement) :Array<string>{
    return this.selected;
  }
}
</script>