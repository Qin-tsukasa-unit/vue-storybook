<template>
  <fieldset>
    <template v-for="(item, key) in items">
      <label :key="key">
        <input
          type="checkbox"
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
    items: Array
  },
  data() {
    return {
      selected: []
    }
  },
  methods: {
    updateValue: function(e) {
      if(e.target.checked){
        this.selected.push(e.target.value);
        this.selected = [...new Set(this.selected)];
      }else{
        this.selected = this.selected.filter((value, index, self) => self.indexOf(e.target.value) !== index);
      }
      this.$emit("input", this.selected);
    }
  }
};
</script>
