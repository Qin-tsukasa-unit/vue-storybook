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
      type:Boolean,
      default: false,
    },
    orderType: {
      type: String,
      default: "1",
      validator: function (value) {
        return ['1', 'a', 'i'].filter( type => type === value).length > 0;
      },
    },
    unOrderType: {
      type: String,
      default: "disc",
      validator: function (value) {
        return ['disc', 'circle', 'square'].filter(type => type === value).length > 0;
      },
    },
    itemList: {
      type: Array,
      default: ["a", "b", "c"],
    },
  },
  computed: {
  }
}
</script>