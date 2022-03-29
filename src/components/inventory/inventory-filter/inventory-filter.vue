<template>
    <section class="filter">
        <input placeholder="Search for item" type="text"/>
        <button v-b-modal.add-new-item class="btn btn__add">Add new item</button>
        <b-modal :hide-footer="true" :hide-header="true" id="add-new-item">
            <modal-component/>
        </b-modal>
    </section>
</template>
<script>
import modalComponent from '../../modal/modal';
export default {
    name: 'inventoryFilter',
    components: {
        modalComponent
    }
}
</script>
<style lang="scss" scoped>
    @import './inventory-filter';
</style>