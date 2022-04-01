<template>
  <b-col lg="4">
    <div class="inventory-item">
      <div class="inventory-item__action">
        <b-icon @click="$emit('update-item')" icon="pencil-fill" />
        <b-icon @click="$emit('delete-item')" icon="basket2" />
      </div>
      <div class="inventory-item__content">
        <h1>{{ item.name }}</h1>
        <p>Expire day: {{ item.expireDate }}</p>
        <p>Origin quantity: {{ item.oriQty }}</p>
        <p>Left quantity: {{ item.leftQty }}</p>
      </div>
    </div>
  </b-col>
</template>
<script>
export default {
  name: "InventoryItem",
  props: ["item"],
};
</script>
<style lang="scss" scoped>
@import "./inventory-item";
</style>