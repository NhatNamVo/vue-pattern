<template>
  <div id="app">
    <h1 class="app-title">Inventory</h1>
    <category-component/>
    <inventory-component/>
  </div>
</template>

<script>
import categoryComponent from './components/category/category';
import inventoryComponent from './components/inventory/inventory.vue';
export default {
  name: 'App',
  components: {
    categoryComponent,
    inventoryComponent,
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
@import './App';
</style>
