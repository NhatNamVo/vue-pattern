<template>
  <section class="filter">
    <input placeholder="Search for item" type="text" />
    <button v-b-modal.add-new-item class="btn btn__add">Add new item</button>
    <b-modal :hide-footer="true" :hide-header="true" id="add-new-item">
      <modal-component :modalTitle="modalTitle" :buttonClass="buttonClass" v-model="items" @form-submit="handleAddItem"/>
    </b-modal>
  </section>
</template>
<script>
import modalComponent from "../../modal/modal";
export default {
  name: "inventoryFilter",
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
    };
  },
  methods: {
      handleInput(value, field) {
          console.log(value,);
        this.items= {...this.items, [field]: value};
      },
      handleAddItem() {
          console.log(this.items);
      }
  },
  components: {
    modalComponent,
  },
};
</script>
<style lang="scss" scoped>
@import "./inventory-filter";
</style>