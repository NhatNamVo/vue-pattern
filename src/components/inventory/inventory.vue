<template>
    <section class="inventory">
        <inventory-filter/>
        <inventory-list/>
    </section>
</template>
<script>
import inventoryFilter from './inventory-filter/inventory-filter.vue';
import inventoryList from './inventory-list/inventory-list.vue';
export default {
    name: 'inventoryComponent',
    components: {
        inventoryFilter,
        inventoryList
    }
}
</script>
<style lang="scss" scoped>
    @import './inventory';
</style>