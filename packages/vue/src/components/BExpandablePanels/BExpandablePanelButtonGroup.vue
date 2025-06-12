<script setup lang="ts">
import BExpandablePanelButtonSave from "./BExpandablePanelButtonSave.vue";
import BExpandablePanelButtonCancel from "./BExpandablePanelButtonCancel.vue";
const emit = defineEmits(['cancel']);
const cancel = () => {
    emit('cancel');
}
</script>
<template>
<div class="button-group">
    <b-expandable-panel-button-save />
    <b-expandable-panel-button-cancel @click="cancel" />
</div>
</template>
