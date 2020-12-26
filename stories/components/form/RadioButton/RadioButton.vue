<template>
  <fieldset>
    <template v-for="(item, key) in items">
      <label :key="key">
        <input
          type="radio"
          :name="name"
          :value="item.text"
          :checked="item.checked"
          @change="updateValue"
        >{{ item.text }}
      </label>
    </template>
  </fieldset>
</template>

<script>
export default {
  props: {
    items: Array,
    value: { type: String, required: true },
    name: { type: String, required: true },
  },
  methods: {
    updateValue(e) {
      this.$emit('input', e.target.value);
    }
  }
};
</script>
