<template>
    <section class="listContainer">
        <div class="no-item" v-if="!getItemLists.length">
            No item
        </div>
        <div class="item-list" v-else>
            <b-row>
                <inventory-item v-for="(item, index) in getItemLists" :item="item" :key="index" @update-item="handleShowModalEdit(item.id)" @delete-item="handleShowConfirmDelete(item.id)"/>
            </b-row>
        </div>
        <b-modal ref="modalRef" :hide-footer="true" :hide-header="true" id="update-item">
            <modal-component :valid-status="validStatus" :modal-title="modalTitle" :button-class="buttonClass" v-model="itemInfo" @form-submit="handleUpdateItem"/>
        </b-modal>
        <b-modal ref="confirmRef" :hide-footer="true" :hide-header="true" id="update-item">
            <confirm-delete @delete-cancel="handleCancelDelete" @delete-accept="handleDeleteItem"/>
        </b-modal>
    </section>
</template>
<script>
import inventoryItem from '../inventory-item/inventory-item.vue';
import modalComponent from '../../modal/modal.vue';
import confirmDelete from '../../confirm-delete/confirm-delete.vue';
import {mapGetters, mapMutations} from 'vuex';
export default {
    name: 'inventoryList',
    components: {
        modalComponent,
        inventoryItem,
        confirmDelete
    },
    data() {
        return {
            modalTitle: 'Update Item',
            buttonClass: 'btn__update',
            itemInfo: {},
            validStatus: false
        }
    },
    computed: {
        ...mapGetters(['getItemLists', 'getOneItem']),
    },
    methods: {
        ...mapMutations(['selectItemEdit', 'updateItem', 'deleteItem']),
        handleUpdateItem() {
            if(this.itemInfo.name !== '' && this.itemInfo.category !== '' && this.itemInfo.leftQty<=this.itemInfo.oriQty){
                this.updateItem(this.itemInfo);
                this.$refs.modalRef.onClose();
                this.resetItemInfo();
                this.validStatus= false;
            }
            else{
                this.validStatus = true;
            }
            
        },
        handleDeleteItem(){
            this.deleteItem();
            this.$refs.confirmRef.onClose();
        },
        handleCancelDelete() {
            this.$refs.confirmRef.onClose();
        },
        resetItemInfo() {
            this.itemInfo = {};
        },
        handleShowModalEdit(id) {
            this.selectItemEdit(id);
            this.validStatus= false;
            this.$refs.modalRef.show();
        },
        handleShowConfirmDelete(id){
            console.log('itemId: ',id);
            this.selectItemEdit(id);
            this.$refs.confirmRef.show();
        }
    },
    watch: {
        getOneItem(newValue) {
            if(newValue) this.itemInfo = {...newValue};
        },
        itemInfo(value){
            if(value){
                if(value.leftQty <= value.oriQty && value.name && value.category){
                    this.validStatus= false;
                }
            }
            
        }
    }
}
</script>
<style lang="scss" scoped>
    @import './inventory-list';
</style>