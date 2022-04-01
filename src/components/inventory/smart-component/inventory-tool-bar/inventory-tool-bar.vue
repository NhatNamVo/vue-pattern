<template>
  <section class="filter">
    <input v-model="searchText" @keyup.enter="handleSearch" class="input-app input-app__search" placeholder="Search for item" type="text" />
    <button @click="showModal" v-b-modal.add-new-item class="btn-app btn__add">Add new item</button>
    <b-modal ref="modalRef" :hide-footer="true" :hide-header="true" id="add-new-item">
      <modal-component :invalid-status="invalidStatus" :modal-title="modalTitle" :button-class="buttonClass" v-model="items" @form-submit="handleAddItem"/>
    </b-modal>
  </section>
</template>
<script>
import { mapMutations, mapState } from 'vuex';
import ModalComponent from "../../dumb-component/inventory-modal/modal-form-inventory";
export default {
  name: "InventoryTool",
  data() {
    return {
      items: {
          name: '',
          category: '',
          oriQty: 0,
          leftQty: 0,
          expireDate: ''
      },
      modalTitle: 'Add new item to inventory',
      buttonClass: 'btn__submit',
      searchText: '',
      invalidStatus: false,
    };
  },
  components: {
    ModalComponent,
  },
  computed: {
    ...mapState({
      itemLists: state => state.inventory.itemlists,
    })
  },
  methods: {
      ...mapMutations(['addNewItem', 'searchItem']),
      handleInput(value, field) {
        this.items= {...this.items, [field]: value};
      },
      handleAddItem() {
          if(this.items.name !== '' && this.items.category !== '' && this.items.leftQty<=this.items.oriQty){
            this.invalidStatus = false;
            const id = this.itemLists.length + 1;
            this.addNewItem({...this.items, id: id});
            this.resetItems();
            this.$refs.modalRef.onClose();
          }
          else{
            this.invalidStatus= true;
          }
      },
      showModal() {
        this.invalidStatus = false;
        this.resetItems();
      },
      handleSearch(event){
        const {value} = event.target;
        this.searchItem(value);
      },
      resetItems() {
        this.items={
          name: '',
          category: '',
          oriQty: 0,
          leftQty: 0,
          expireDate: ''
        }
      }
  },
  watch: {
    searchText(newValue) {
      if(!newValue){
        setTimeout(() =>{
          this.searchItem('');
        },[500])
      }
    },
    items(value){
      if(value.leftQty <= value.oriQty && value.name && value.category){
        this.invalidStatus= false;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./inventory-tool-bar";
</style>