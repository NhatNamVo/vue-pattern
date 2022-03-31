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
    ...mapMutations(['selectCategory']),
    handleSelectCategory(selected) {
      this.selectCategory(selected);
    }
  }
};
</script>
<style lang="scss" scoped>
@import './category';
</style>