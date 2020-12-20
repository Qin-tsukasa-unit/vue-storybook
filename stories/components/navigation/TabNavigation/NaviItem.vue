<template>
  <li class="tabNavigation__item">
    <span class="tabNavigation__itemBody">
      <a :href="item.href" class="tabNavigation__itemLink">
        {{ item.text }}
      </a>
    </span>
  </li>
</template>

<script>
export default {
  props: {
    item: Object,
  },
};
</script>

<style scoped>
.tabNavigation__item {
  margin: 0;
  padding: 4px 2px 0 2px;
  align-items: center;
  justify-content: center;
  flex: 1;
  display: flex;
  font-size: 10px;
  border-bottom: 2px solid #666;
  white-space: nowrap;
  overflow: hidden;
}

.tabNavigation__itemBody {
  box-sizing: border-box;
  display: block;
  width: 100%;
  border: 1px solid;
  border-bottom: 0;
  border-radius: 8px 8px 0 0;
  background: #fff;
}

.tabNavigation__itemLink {
  box-sizing: border-box;
  display: block;
  width: 100%;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  color: #666;
}

.tabNavigation--color-primary .tabNavigation__item {
  color: rgb(30 167 253);
  border-bottom: 2px solid rgb(30 167 253);
}

.tabNavigation--color-light .tabNavigation__item {
  color: #999;
  border-bottom: 2px solid #999;
}

.tabNavigation--color-dark .tabNavigation__item {
  color: #333;
  background: #999;
  border-bottom: 2px solid #999;
}

.tabNavigation--size-medium .tabNavigation__item {
  font-size: 14px;
}

.tabNavigation--size-large .tabNavigation__item {
  font-size: 18px;
}

.tabNavigation .tabNavigation__itemLink:hover {
  color: rgb(30 167 253);
  opacity: 0.6;
}
</style>
