<script setup lang="ts">
import { ref, onBeforeMount } from "vue";
import { BPageHeader, useBPageHeaderType } from "@vedin-pp-se/bolido-vue";

const pageheader = ref(useBPageHeaderType());

onBeforeMount(async () => {
    pageheader.value.headertitle = "Nyregistrering Aktiebolag";
    pageheader.value.logoarialabel = "Bolido";
    pageheader.value.righttext = "Per Vedin";
});

</script>

<template>
    <b-page-header :pageheader="pageheader"/>
</template>
