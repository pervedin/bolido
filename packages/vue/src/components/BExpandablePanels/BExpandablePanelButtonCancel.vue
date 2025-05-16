<script setup lang="ts">
const emit = defineEmits(['click']);
</script>
<template>
<button @click="emit('click')" class="button button--full-width button--primary button-group__item">
    Avbryt
</button>
</template>