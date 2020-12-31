<template>
  <fieldset>
    <template v-for="(item, key) in items">
      <label :key="key">
        <input
          type="radio"
          :name="name"
          :value="item.text"
          :checked="item.checked"
          @change="changeSelected"
        >{{ item.text }}
      </label>
    </template>
  </fieldset>
</template>

<script lang="ts">
import { Component, Prop, Vue , Emit} from 'vue-property-decorator';
import { ItemAlternative } from '../ItemAlternative';

@Component
export default class RadioButton extends Vue {
  private item!: ItemAlternative

  @Prop()
  private items!: Array<ItemAlternative>

  @Prop({ default: '' })
  value!: string;

  @Prop({ default: '' })
  name!: string;

  private changeSelected() :void {
    if (event!.target instanceof HTMLInputElement) {
      this.updateValue(event!.target.value)
    }
  }

  @Emit('input')
  private updateValue(value: string) :string {
    return value;
  }
}
</script>
