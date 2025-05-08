<script setup lang="ts">
import { ref } from "vue";
import { Kontaktuppgifter, useKontaktuppgifterType } from "@vedin-pp-se/bolido-vue";

const kontaktuppgifter = ref(useKontaktuppgifterType());

</script>

<template>
    <Kontaktuppgifter :kontaktuppgifter="kontaktuppgifter" />
</template>
