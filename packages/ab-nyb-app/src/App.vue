<script setup lang="ts">
import { Kontaktuppgifter } from "@vedin-pp-se/bolido-kontaktuppgifter-ui";
import { FLayoutApplicationTemplate, FPageHeader, FLogo } from "@fkui/vue";
</script>

<template>
    <f-layout-application-template>
        <template #header>
            <f-page-header>
              Nyregistrering Aktiebolag
              <template #logo>
                <f-logo size="small">Bolido</f-logo>
              </template>
              <template #right> Per Vedin</template>
            </f-page-header>
        </template>
        <template #top-navigation>
            <p>Top navigation</p>
        </template>
        <template #default>
           <Kontaktuppgifter />
        </template>
        <template #footer>
            <p>Footer</p>
        </template>
    </f-layout-application-template>
</template>
