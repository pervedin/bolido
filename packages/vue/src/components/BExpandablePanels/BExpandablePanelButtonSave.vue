<script setup lang="ts">
const emit = defineEmits(['click']);
</script>
<template>
<button type="submit" @click="emit('click')" class="button button--full-width button--primary button-group__item">
    Spara
</button>
</template>