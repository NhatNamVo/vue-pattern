<template>
    <section class="listContainer">
        <div class="no-item" v-if="!itemLists.lenght">
            No item
        </div>
        <div class="item-list">
            <inventory-item v-for="(item, index) in itemLists" :key="index"/>
        </div>
    </section>
</template>
<script>
import inventoryItem from '../inventory-item/inventory-item.vue';
import {mapState} from 'vuex';
export default {
    name: 'inventoryList',
    components: {
        inventoryItem
    },
    computed: {
        ...mapState({
            itemLists: state => state.inventory.itemlists,
        }),
    }
}
</script>
<style lang="scss" scoped>
    @import './inventory-list';
</style>