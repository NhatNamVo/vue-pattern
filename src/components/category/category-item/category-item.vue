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
  name: "categoryItem",
  props: ["active", "itemName"],
};
</script>
<style lang="scss" scoped>
@import "./category-item";
</style>