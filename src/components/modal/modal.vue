<template>
  <section class="itemmodal">
    <h1 class="itemmodal__title">
      {{ titleModal }}
    </h1>
    <div class="itemmodal__form">
      <div class="form__item">
        <label class="form__title">ITEM NAME</label>
        <input v-model="itemName" class="form__input" type="text"/>
      </div>
      <div class="form__item">
        <label class="form__title">FOOD CATEGORY</label>
        <select class="form__select">
            <template v-for="(item, index) in categories">
                <option :key="index" value="item">{{item}}</option>
            </template>
        </select>
      </div>
      <div class="form__item">
        <label class="form__title">ORIGINAL QUANTITY</label>
        <input class="form__input" type="text"/>
      </div>
      <div class="form__item">
        <label class="form__title">QUANTITY LEFT</label>
        <input class="form__input" type="text"/>
      </div>
      <div class="form__item">
        <label class="form__title">EXPIRY DATE</label>
        <input class="form__input" type="date-picker"/>
      </div>
    </div>
    <button class="btn" :class="buttonClass">Submit</button>
  </section>
</template>
<script>
import {mapState} from 'vuex';
export default {
  name: "modalComponent",
  data() {
      return {
          itemName: '',
      }
  },
  computed: {
    ...mapState({
        categories: state => state.inventory.categories,
    }),
    titleModal() {
      return "Add new item to inventory";
    },
    buttonClass() {
        return "btn__add";
    },
  },
};
</script>
<style lang="">
</style>