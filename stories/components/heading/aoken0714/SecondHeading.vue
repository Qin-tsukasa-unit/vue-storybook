<script>
export default {
  render: function (createElement) {
    return createElement("h" + this.level, this.$slots.default);
  },
  props: {
    level: {
      type: Number,
      required: true,
      validator: function (value) {
        return [1, 2, 3, 4, 5, 6].includes(value);
      },
    },
  },
};
</script>
