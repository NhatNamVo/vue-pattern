<template>
    <section class="listContainer">
        <div class="no-item" v-show="!getItemLists.length">
            No item
        </div>
        <div class="item-list" v-show="getItemLists.length">
            <b-row>
                <inventory-item v-for="(item, index) in getItemLists" :item="item" :key="index" @update-item="handleShowModalEdit(item.id)" @delete-item="handleShowConfirmDelete(item.id)"/>
            </b-row>
        </div>
        <b-modal ref="modalRef" :hide-footer="true" :hide-header="true" id="update-item">
            <modal-component :invalid-status="invalidStatus" :modal-title="modalTitle" :button-class="buttonClass" v-model="itemInfo" @form-submit="handleUpdateItem"/>
        </b-modal>
        <b-modal ref="confirmRef" :hide-footer="true" :hide-header="true" id="update-item">
            <confirm-delete @delete-cancel="handleCancelDelete" @delete-accept="handleDeleteItem"/>
        </b-modal>
    </section>
</template>
<script>
import InventoryItem from '../../dumb-component/inventory-item/inventory-item.vue';
import ModalComponent from '../../dumb-component/inventory-modal/modal-form-inventory.vue';
import ConfirmDelete from '../../dumb-component/inventory-confirm-delete/inventory-confirm-delete.vue';
import {mapGetters, mapMutations} from 'vuex';
export default {
    name: 'InventoryList',
    components: {
        ModalComponent,
        InventoryItem,
        ConfirmDelete
    },
    data() {
        return {
            modalTitle: 'Update Item',
            buttonClass: 'btn__update',
            itemInfo: {},
            invalidStatus: false
        }
    },
    computed: {
        ...mapGetters(['getItemLists', 'getSelectedItem']),
    },
    methods: {
        ...mapMutations(['selectItemEdit', 'updateItem', 'deleteItem']),
        handleUpdateItem() {
            if(this.itemInfo.name !== '' && this.itemInfo.category !== '' && this.itemInfo.leftQty<=this.itemInfo.oriQty){
                this.updateItem(this.itemInfo);
                this.$refs.modalRef.onClose();
                this.resetItemInfo();
                this.invalidStatus= false;
            }
            else{
                this.invalidStatus = true;
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
            this.itemInfo = {...this.getSelectedItem};
            this.invalidStatus= false;
            this.$refs.modalRef.show();
        },
        handleShowConfirmDelete(id){
            console.log('itemId: ',id);
            this.selectItemEdit(id);
            this.$refs.confirmRef.show();
        }
    },
    watch: {
        // getSelectedItem(newValue) {
        //     if(newValue) this.itemInfo = {...newValue};
        // },
        itemInfo(value){
            if(value){
                if(value.leftQty <= value.oriQty && value.name && value.category){
                    this.invalidStatus= false;
                }
            }
            
        }
    }
}
</script>
<style lang="scss" scoped>
    @import './inventory-list';
</style>