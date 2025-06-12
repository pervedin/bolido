<script setup lang="ts">
const emit = defineEmits(['click']);
</script>
<template>
<button @click="emit('click')" type="button" class="button button-group__item button--secondary button--large">
    Avbryt
</button>
</template>