<template>
  <option
    :value="optionValue.valueData"
  >{{ optionValue.txtData }}</option>
</template>

<script>
import './select.css';

export default {
  name: 'SelectOption',
  props: {
    optionValue: Object,
  },
};
</script>