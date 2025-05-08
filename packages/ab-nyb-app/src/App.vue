<script setup lang="ts">
import { ref } from "vue";
import { Kontaktuppgifter } from "@vedin-pp-se/bolido-kontaktuppgifter-ui";
import { FLayoutApplicationTemplate, FPageHeader, FLogo } from "@fkui/vue";
import { useKontaktuppgifterType } from "@vedin-pp-se/bolido-kontaktuppgifter-ui";

const kontaktuppgifter = ref(useKontaktuppgifterType());

</script>

<template>
    <f-layout-application-template>
        <template #header>
            <f-page-header>
              Nyregistrering Aktiebolag
              <template #logo>
                <f-logo size="small">Bolido</f-logo>
              </template>
              <template #right>Per Vedin</template>
            </f-page-header>
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
