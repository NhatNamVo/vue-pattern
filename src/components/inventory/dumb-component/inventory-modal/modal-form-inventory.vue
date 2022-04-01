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
            @blur="handleInput"
            class="form__input"
            :class="{'error': invalidStatus && !itemInfo.name}"
            type="text"
          />
          <div class="form__item--error" v-show="invalidStatus && !itemInfo.name"><small>Name is required</small></div>
        </b-col>
        <b-col cols="6" class="form__item">
          <label class="form__title">FOOD CATEGORY</label>
          <b-form-select
            :value="itemInfo.category"
            name="category"
            @change="handleSelectCategory"
            class="form__select"
            :class="{'error':invalidStatus && !itemInfo.category}"
          >
            <template v-for="(item, index) in categories">
              <option :key="index" :value="item">{{ item }}</option>
            </template>
          </b-form-select>
          <div class="form__item--error" v-show="invalidStatus && !itemInfo.category"><small>Category is required</small></div>
        </b-col>
        <b-col cols="6" class="form__item">
          <label class="form__title">ORIGINAL QUANTITY</label>
          <b-form-input
            :value="itemInfo.oriQty"
            name="oriQty"
            @blur="handleInputNumberField"
            class="form__input"
            type="number"
            :number= true
          />
        </b-col>
        <b-col cols="6" class="form__item">
          <label class="form__title">QUANTITY LEFT</label>
          <b-form-input
            :value="itemInfo.leftQty"
            name="leftQty"
            @blur="handleInputNumberField"
            class="form__input"
            :class="{'error':invalidStatus && itemInfo.leftQty>itemInfo.oriQty}"
            type="number"
            :max="itemInfo.oriQty"
          />
          <div class="form__item--error" v-show="invalidStatus && itemInfo.leftQty>itemInfo.oriQty"><small>The left quantity must be smaller than the origin quantity</small></div>
        </b-col>
        <b-col cols="6" class="form__item">
          <label class="form__title">EXPIRY DATE</label>
          <b-form-datepicker
            :value="itemInfo.expireDate"
            name="expireDate"
            @input="handleInputDate"
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
  name: "ModalComponent",
  model: {
    prop: 'itemInfo',
    event: 'input'
  },
  props: ["itemInfo","modalTitle", "buttonClass", 'invalidStatus'],
  computed: {
    ...mapState({
      categories: (state) => state.inventory.categories,
    }),
  },
  methods: {
    handleInput(event){
      const {name, value} = event.target;
      this.emitBind({[name]:value});
    },
    handleInputNumberField(event) {
      const {name, value} = event.target;
      const number = Math.max(0, parseInt(value));

      if (number === 0) { 
        this.$nextTick(() => {
          event.target.value = 0;
        })
      }
      this.emitBind({[name]: number});
    },
    handleInputDate(value) {
      this.emitBind({expireDate:value});
    },
    handleSelectCategory(value) {
      this.emitBind({category:value});
    },
    emitBind(object) {
      this.$emit('input', {...this.itemInfo, ...object});
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./modal-form-inventory.scss";
</style>