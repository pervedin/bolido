<script setup lang="ts">
import { FLayoutApplicationTemplate, FPageHeader, FLogo } from '@fkui/vue';
</script>
<template>
    <f-layout-application-template>
        <template #header>
            <f-page-header>
                Registrera ändring i ditt företag eller förening
                <template #logo>
                    <f-logo size="small">Bolido</f-logo>
                </template>
                <template #right>Per Vedin</template>
            </f-page-header>
        </template>
        <!--template #top-navigation>
            <p>Top navigation</p>
        </template-->
        <template #default>
            <slot />
        </template>
        <template #footer>
            <p>Footer</p>
        </template>
    </f-layout-application-template>
</template>
