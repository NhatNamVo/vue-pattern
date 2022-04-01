<template>
  <section class="category">
    <category-item :itemName="'All'" :active="{'active':active===null}" @select-category="handleSelectCategory(null)"/>
    <template v-for="(item, index) in categories">
      <category-item :key="index" :item-name="item" :active="{'active':active===index}" @select-category="handleSelectCategory(index)"/>
    </template>
  </section>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import CategoryItem from '../inventory-category-item/inventory-category-item.vue';
export default {
  name: "CategoryComponent",
  components: {
    CategoryItem,
  },
  computed: {
    ...mapState({
      categories: (state) => state.inventory.categories,
      active: state => state.inventory.activeCategory
    }),
  },
  methods: {
    ...mapMutations(['selectCategory']),
    handleSelectCategory(selected) {
      this.selectCategory(selected);
    }
  }
};
</script>
<style lang="scss" scoped>
@import './inventory-category';
</style>