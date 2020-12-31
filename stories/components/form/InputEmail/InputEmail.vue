<template>
  <p>
    <label :for="name">Email（input[type={{type}}]）</label>
    <input
      :type="type"
      :name="name"
      :value="value"
      :placeholder="placeholder"
      @change="updateValue"
      @blur="updateValue"
      class="input__email"
      :class="classes"
      :id="name"
    />
  </p>
</template>

<script>
export default {
  data() {
    return {
      errors: [],
    };
  },
  props: {
    value: { type: String, required: true },
    type: { type: String, required: true },
    name: { type: String, required: true },
    placeholder: { type: String, required: false },
    primary: { type: Boolean, required: false, default: false },
  },
  computed: {
    classes() {
      return {
        'input__email--primary': this.primary,
        'input__email--secondary': !this.primary,
      };
    },
  },
  methods: {
    updateValue: function(e) {
      this.errors = [];
      if (!e.target.value) {
        this.errors.push("入力が空です。");
      } else if (!this.validEmail(e.target.value)) {
        this.errors.push("メールアドレスの形式で入力してください。");
      }
      this.$emit('input-email', e.target.value, this.errors)
    },
    validEmail: function (email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  }
};
</script>

<style lang="scss" scorped>
.input__email {
  width: 300px;
  padding: 8px;

  &--primary {
    border: 2px solid rgb(30 167 253);
  }

  &--secondary {
    border: 2px solid #666;
  }
}
</style>