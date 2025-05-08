<script setup lang="ts">
import { ref, onBeforeMount } from "vue";
import { Kontaktuppgifter, useKontaktuppgifterType, BPageHeader, useBPageHeaderType } from "@vedin-pp-se/bolido-vue";
import { FLayoutApplicationTemplate } from "@fkui/vue";

const kontaktuppgifter = ref(useKontaktuppgifterType());
const pageheader = ref(useBPageHeaderType());

onBeforeMount(async () => {
    pageheader.value.headertitle = "Nyregistrering Aktiebolag";
    pageheader.value.logoarialabel = "Bolido";
    pageheader.value.righttext = "Per Vedin";
});

</script>

<template>
    <f-layout-application-template>
        <template #header>
            <b-page-header :pageheader="pageheader"/>
        </template>
        <template #top-navigation>
            <p>Top navigation</p>
        </template>
        <template #default>
           <Kontaktuppgifter :kontaktuppgifter="kontaktuppgifter" />
        </template>
        <template #footer>
            <p>Footer</p>
        </template>
    </f-layout-application-template>
</template>
