<template>
  <section class="itemmodal">
    <h1 class="itemmodal__title">
      {{ titleModal }}
    </h1>
    <div class="itemmodal__form">
      <b-row>
        <b-col cols='6' class="form__item">
          <label class="form__title">ITEM NAME</label>
          <b-form-input v-model="itemName" class="form__input" type="text" />
        </b-col>
        <b-col cols='6' class="form__item">
          <label class="form__title">FOOD CATEGORY</label>
          <b-form-select class="form__select">
            <template v-for="(item, index) in categories">
              <option :key="index" value="item">{{ item }}</option>
            </template>
          </b-form-select>
        </b-col>
        <b-col cols='6' class="form__item">
          <label class="form__title">ORIGINAL QUANTITY</label>
          <b-form-input class="form__input" type="number" />
        </b-col>
        <b-col cols='6' class="form__item">
          <label class="form__title">QUANTITY LEFT</label>
          <b-form-input class="form__input" type="number" />
        </b-col>
        <b-col cols='6' class="form__item">
          <label class="form__title">EXPIRY DATE</label>
          <b-form-datepicker :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }" class="form__input" locale="vi" />
        </b-col>
      </b-row>
    </div>
    <button class="btn" :class="buttonClass">Submit</button>
  </section>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "modalComponent",
  data() {
    return {
      itemName: "",
      itemCategory: '',
      itemQuantity : 0,
      itemQuantityLeft : 0,
      itemExpire: ''
    };
  },
  computed: {
    ...mapState({
      categories: (state) => state.inventory.categories,
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
<style lang="scss" scoped>
@import "./modal.scss";
</style>