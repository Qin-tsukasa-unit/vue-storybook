<template>
  <dl class="l-form-contents">
    <dt class="l-form-label">
      <label :for="selectId"><slot></slot></label>
      <slot name="error"></slot>
    </dt>
    <dt class="l-form-parts">
      <select :name="selectName" :id="selectId" @change="onChange">
        <SelectOption
          v-for="(val, key) in optionItems"
          :key="key"
          :optionValue="val"
        ></SelectOption>
      </select>
    </dt>
  </dl>
</template>

<script>
import './select.css';
import SelectOption from './SelectOption.vue';

export default {
  name: 'SelectBox',
  data() {
    return {
      optionItems: [
        {
          valueData: 'none',
          txtData: '都道府県を選択してください'
        },
        {
          valueData: 'hokkaido',
          txtData: '北海道'
        },
        {
          valueData: 'aomori',
          txtData: '青森'
        },
        {
          valueData: 'akita',
          txtData: '秋田'
        },
        {
          valueData: 'iwate',
          txtData: '岩手'
        },
        {
          valueData: 'yamagata',
          txtData: '山形'
        },
        {
          valueData: 'miyagi',
          txtData: '宮城'
        },
        {
          valueData: 'fukushima',
          txtData: '福島'
        },
      ]
    }
  },
  model: {
    prop: 'selectValue',
    event: 'onChange'
  },
  props: {
    selectValue: String,
    notSelected: {
      type: Boolean,
      default: false
    },
    selectId: String,
    selectName: String,
  },
  methods: {
    onChange (e) {
      this.$emit('onChange', e.target.value);
    }
  },
  components: {
    SelectOption,
  }
};
</script>