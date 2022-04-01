<template>
  <div id="app">
    <inventory-component/>
  </div>
</template>

<script>

import InventoryComponent from './components/inventory/inventory.vue';
export default {
  name: 'App',
  components: {
    InventoryComponent,
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1024px;
  margin: auto;
}
</style>
