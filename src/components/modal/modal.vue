<template>
  <section class="itemmodal">
    <h1 class="itemmodal__title">
      {{ modalTitle }}
    </h1>
    <div class="itemmodal__form">
      <b-row>
        <b-col cols="6" class="form__item">
          <label class="form__title">ITEM NAME</label>
          <b-form-input
            :value="itemInfo.name"
            name="name"
            @input="$emit('input', $event, 'name')"
            class="form__input"
            type="text"
          />
        </b-col>
        <b-col cols="6" class="form__item">
          <label class="form__title">FOOD CATEGORY</label>
          <b-form-select
            :value="itemInfo.category"
            name="category"
            @input="$emit('input', $event, 'category')"
            class="form__select"
          >
            <template v-for="(item, index) in categories">
              <option :key="index" :value="item">{{ item }}</option>
            </template>
          </b-form-select>
        </b-col>
        <b-col cols="6" class="form__item">
          <label class="form__title">ORIGINAL QUANTITY</label>
          <b-form-input
            :value="itemInfo.oriQty"
            name="oriQty"
            @input="$emit('input', $event, 'oriQty')"
            class="form__input"
            type="number"
          />
        </b-col>
        <b-col cols="6" class="form__item">
          <label class="form__title">QUANTITY LEFT</label>
          <b-form-input
            :value="itemInfo.leftQty"
            name="leftQty"
            @input="$emit('input', $event, 'leftQty')"
            class="form__input"
            type="number"
          />
        </b-col>
        <b-col cols="6" class="form__item">
          <label class="form__title">EXPIRY DATE</label>
          <b-form-datepicker
            :value="itemInfo.expireDate"
            name="expireDate"
            @input="$emit('input', $event, 'expireDate')"
            :date-format-options="{
              year: 'numeric',
              month: 'numeric',
              day: 'numeric',
            }"
            class="form__input"
            locale="vi"
          />
        </b-col>
      </b-row>
    </div>
    <button @click="$emit('form-submit')" class="btn" :class="buttonClass">
      Submit
    </button>
  </section>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "modalComponent",
  model: {
    prop: 'itemInfo',
    event: 'input'
  },
  props: ['itemInfo',"modalTitle", "buttonClass"],
  computed: {
    ...mapState({
      categories: (state) => state.inventory.categories,
    }),
  },
};
</script>
<style lang="scss" scoped>
@import "./modal.scss";
</style>