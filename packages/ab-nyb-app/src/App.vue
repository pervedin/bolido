<script setup lang="ts">
import { ref } from "vue";
import { Kontaktuppgifter, useKontaktuppgifterType, BPageHeader } from "@vedin-pp-se/bolido-vue";
import { FLayoutApplicationTemplate } from "@fkui/vue";

const kontaktuppgifter = ref(useKontaktuppgifterType());

</script>

<template>
    <f-layout-application-template>
        <template #header>
            <b-page-header />
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
