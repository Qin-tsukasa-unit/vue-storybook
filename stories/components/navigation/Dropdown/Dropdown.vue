<template>
  <div class="dropdown">
    <nav>
      <my-button
        size="small"
        @onClick="isMenuOpen = !isMenuOpen"
        :label="text"
      />
    </nav>
    <transition
      enter-active-class="_transition-class"
      enter-class="_transition-class _enter-class"
      enter-to-class="_transition-class _enter-to-class"
      leave-active-class="_transition-class _leave-active-class"
      leave-class="_transition-class _leave-class"
      leave-to-class="_transition-class _leave-to-class"
    >
      <div v-if="isMenuOpen" class="dropdown__select">
        <ul :class="classes">
          <li v-for="(value, key) in items" :key="key" class="dropdown__item">
            <a
              :href="value.href"
              @click="isMenuOpen = false"
              class="dropdown__itemLink"
            >
              {{ value.text }}
            </a>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import MyButton from "../../button/Button.vue";

export default {
  components: { MyButton },
  data() {
    return {
      isMenuOpen: false,
      items: [
        {
          text: "メニュー１",
          href: "javascript:;",
        },
        {
          text: "メニュー２",
          href: "javascript:;",
        },
        {
          text: "メニュー３",
          href: "javascript:;",
        },
      ],
    };
  },
  props: {
    text: String,
    size: {
      type: String,
      default: "",
      validator(val) {
        return ["", "medium", "large"].indexOf(val) + 1;
      },
    },
  },
  computed: {
    classes() {
      const styles = { dropdown__items: true };
      this.size ? (styles[`dropdown__items--size-${this.size}`] = true) : "";
      return styles;
    },
  },
  methods: {
    closeMenu: function () {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style scoped>
.dropdown__select {
  position: relative;
}

.dropdown__items {
  position: absolute;
  width: 200px;
  list-style: none;
  padding: 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
}

.dropdown__items--size-medium {
  width: 300px;
}

.dropdown__items--size-large {
  width: 100%;
}

.dropdown__item {
  margin-bottom: 0;
  border-bottom: 1px solid #eee;
  overflow: hidden;
}

.dropdown__item:first-child {
  border-radius: 4px 4px 0 0;
}

.dropdown__item:last-child {
  border-radius: 0 0 4px 4px;
  border-bottom: 0;
}

.dropdown__itemLink {
  box-sizing: border-box;
  display: block;
  width: 100%;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  color: #666;
  background: #fff;
}

.dropdown__itemLink:hover {
  color: #fff;
  background: #666;
}
</style>

<style>
._transition-class {
  transition-property: opacity, transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  transform-origin: 0 0;
}

._enter-class {
  opacity: 0;
  transform: scale(0.95, 0.95);
}

._enter-to-class {
  opacity: 1;
  transform: scale(1, 1);
}

._leave-active-class {
  transition-duration: 100ms;
}

._leave-class {
  opacity: 1;
  transform: scale(1, 1);
}

._leave-to-class {
  opacity: 0;
  transform: scale(0.95, 0.95);
}
</style>
