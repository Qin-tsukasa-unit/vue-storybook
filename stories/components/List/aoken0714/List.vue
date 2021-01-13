<template>
  <ol v-if="hasOrderedList" :type="orderType">
    <li v-for="item in itemList" :key="item">
      {{ item }}
    </li>
  </ol>
  <ul v-else :type="unOrderType">
    <li v-for="item in itemList" :key="item">
      {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    hasOrderedList: {
      type: Boolean,
      default: false,
    },
    orderType: {
      type: String,
      default: "1",
      validator: function (value) {
        return ["1", "a", "i"].includes(value);
      },
    },
    unOrderType: {
      type: String,
      default: "disc",
      validator: function (value) {
        return ["disc", "circle", "square"].includes(value);
      },
    },
    itemList: {
      type: Array,
      required: true
    },
  },
};
</script>
