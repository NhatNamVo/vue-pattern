<template>
    <section class="confirm">
        <h3>Are you sure want to delete?</h3>
        <button @click="$emit('delete-cancel')" class="btn-app btn__cancel">Cancel</button>
        <button @click="$emit('delete-accept')" class="btn-app btn__delete">Delete</button>
    </section>
</template>
<script>
export default {
    name: 'confirmDelete',
}
</script>
<style lang="scss" scoped>
    @import './confirm-delete';
</style>