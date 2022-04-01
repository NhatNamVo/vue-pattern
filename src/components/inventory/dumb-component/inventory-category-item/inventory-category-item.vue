<template>
  <div>
    <div
      class="category-item"
      :class="active"
      @click="$emit('select-category')"
    >
      {{ itemName }}
    </div>
  </div>
</template>
<script>
export default {
  name: "CategoryItem",
  props: ["active", "itemName"],
};
</script>
<style lang="scss" scoped>
@import "./inventory-category-item";
</style>