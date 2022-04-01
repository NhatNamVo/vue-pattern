<template>
  <section class="inventory">
    <h1 class="inventory__title">Inventory</h1>
    <category-component />
    <div class="inventory__container">
        <inventory-tool />
        <inventory-list />
    </div>
  </section>
</template>
<script>
import InventoryTool from "./smart-component/inventory-tool-bar/inventory-tool-bar.vue";
import CategoryComponent from './dumb-component/inventory-category/inventory-category';
import InventoryList from "./smart-component/inventory-list/inventory-list.vue";
export default {
  name: "InventoryComponent",
  components: {
    InventoryTool,
    CategoryComponent,
    InventoryList,
  },
};
</script>
<style lang="scss" scoped>
@import "./inventory";
</style>