<template>
  <ul class="tabNavigation__items">
    <slot />
  </ul>
</template>

<style scoped>
.tabNavigation__items {
  list-style: none;
  display: flex;
  padding: 0;
}
</style>