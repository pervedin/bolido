<script setup lang="ts">
import { ref } from "vue";
import { FTextField } from "@fkui/vue";

const namn = ref("");
</script>

<template>
    <f-text-field v-model="namn">Förnamn</f-text-field>
</template>
