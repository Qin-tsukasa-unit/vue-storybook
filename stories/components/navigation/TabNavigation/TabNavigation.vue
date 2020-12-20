<template>
  <nav :class="naviClass">
    <h1 class="tabNavigation__title">{{ title }}</h1>
    <NaviItems>
      <NaviItem v-for="(val, key) in menuList" :key="key" :item="val" />
    </NaviItems>
  </nav>
</template>

<script>
import NaviItems from "./NaviItems.vue";
import NaviItem from "./NaviItem.vue";

export default {
  components: {
    NaviItems,
    NaviItem,
  },
  data() {
    return {
      menuList: [
        {
          text: "ホーム",
          href: "/",
        },
        {
          text: "ショップ",
          href: "/shop",
        },
        {
          text: "コンタクト",
          href: "/contact",
        },
      ],
    };
  },
  props: {
    title: String,
    size: {
      type: String,
      default: "",
      validator(val) {
        return ["", "medium", "large"].indexOf(val) + 1;
      },
    },
    color: {
      type: String,
      default: "",
      validator(val) {
        return ["", "primary", "light", "dark"].indexOf(val) + 1;
      },
    },
  },
  computed: {
    naviClass() {
      const styles = { tabNavigation: true };
      this.size ? (styles[`tabNavigation--size-${this.size}`] = true) : "";
      this.color ? (styles[`tabNavigation--color-${this.color}`] = true) : "";
      return styles;
    },
  },
};
</script>

<style scoped>
.tabNavigation__title {
  font-size: 12px;
}

.tabNavigation--size-medium .tabNavigation__title {
  font-size: 16px;
}

.tabNavigation--size-large .tabNavigation__title {
  font-size: 20px;
}
</style>
