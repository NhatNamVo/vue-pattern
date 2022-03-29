<template>
  <section class="category">
    <category-item :itemName="'All'" :active="{'active':active===null}" @select-category="selectCategory(null)"/>
    <template v-for="(item, index) in categories">
      <category-item :key="index" :item-name="item" :active="{'active':active===index}" @select-category="selectCategory(index)"/>
    </template>
  </section>
</template>
<script>
import { mapState } from "vuex";
import categoryItem from './category-item/category-item.vue';
export default {
  name: "categoryComponent",
  components: {
    categoryItem,
  },
  computed: {
    ...mapState({
      categories: (state) => state.inventory.categories,
      active: state => state.inventory.activeCategory
    }),
  },
  methods: {
    selectCategory(selected) {
      console.log('selected:', selected);
    }
  }
};
</script>
<style lang="scss" scoped>
@import './category';
</style>