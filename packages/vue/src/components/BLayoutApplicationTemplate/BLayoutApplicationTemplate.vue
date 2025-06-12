<script setup lang="ts">
import { FLayoutApplicationTemplate, FPageHeader, FLogo } from '@fkui/vue';

interface Props {
    title: string
}

const props = withDefaults(defineProps<Props>(), {});

</script>
<template>
    <f-layout-application-template>
        <template #header>
            <f-page-header>
                Bolido
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
            <h1>{{ props.title }}</h1>
            <slot />
        </template>
        <template #footer>
            <p>Footer</p>
        </template>
    </f-layout-application-template>
</template>
