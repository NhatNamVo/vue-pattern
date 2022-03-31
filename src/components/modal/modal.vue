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
            @change="$emit('input', {...itemInfo, name:$event})"
            class="form__input"
            :class="{'error': validStatus && !itemInfo.name}"
            type="text"
          />
          <div class="form__item--error" v-if="validStatus && !itemInfo.name"><small>Name is required</small></div>
        </b-col>
        <b-col cols="6" class="form__item">
          <label class="form__title">FOOD CATEGORY</label>
          <b-form-select
            :value="itemInfo.category"
            name="category"
            @change="$emit('input', {...itemInfo, category:$event})"
            class="form__select"
            :class="{'error':validStatus && !itemInfo.category}"
          >
            <template v-for="(item, index) in categories">
              <option :key="index" :value="item">{{ item }}</option>
            </template>
          </b-form-select>
          <div class="form__item--error" v-if="validStatus && !itemInfo.category"><small>Category is required</small></div>
        </b-col>
        <b-col cols="6" class="form__item">
          <label class="form__title">ORIGINAL QUANTITY</label>
          <b-form-input
            :value="itemInfo.oriQty"
            name="oriQty"
            @change="$emit('input', {...itemInfo, oriQty:$event})"
            class="form__input"
            type="number"
          />
        </b-col>
        <b-col cols="6" class="form__item">
          <label class="form__title">QUANTITY LEFT</label>
          <b-form-input
            :value="itemInfo.leftQty"
            name="leftQty"
            @change="$emit('input', {...itemInfo, leftQty:$event})"
            class="form__input"
            :class="{'error':validStatus && itemInfo.leftQty>itemInfo.oriQty}"
            type="number"
          />
          <div class="form__item--error" v-if="validStatus && itemInfo.leftQty>itemInfo.oriQty"><small>The left quantity must be smaller than the origin quantity</small></div>
        </b-col>
        <b-col cols="6" class="form__item">
          <label class="form__title">EXPIRY DATE</label>
          <b-form-datepicker
            :value="itemInfo.expireDate"
            name="expireDate"
            @input="$emit('input', {...itemInfo, expireDate:$event})"
            :date-format-options="{
              day: 'numeric',
              month: 'numeric',
              year: 'numeric',
            }"
            class="form__input"
            locale="vi"
          />
        </b-col>
      </b-row>

    </div>
    <button @click="$emit('form-submit')" class="btn-app" :class="buttonClass">
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
  props: ["itemInfo","modalTitle", "buttonClass", 'validStatus'],
  computed: {
    ...mapState({
      categories: (state) => state.inventory.categories,
    }),
  },
  methods: {
  }
};
</script>
<style lang="scss" scoped>
@import "./modal.scss";
</style>