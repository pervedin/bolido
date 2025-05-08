<script setup lang="ts">
import { FPageHeader } from '@fkui/vue';
import { useBPageHeaderType, type BPageHeaderType } from './BPageHeaderType';

interface Props {
    pageheader: BPageHeaderType
}

const props = withDefaults(defineProps<Props>(), {
    pageheader: () => useBPageHeaderType()
});

</script>
<template>

    <f-page-header>
        {{ props.pageheader.headertitle }}
        <template #logo v-if="props.pageheader.logoarialabel">
            <f-logo size="small">{{  props.pageheader.logoarialabel }}</f-logo>
        </template>
        <template #right>{{ props.pageheader.righttext }}</template>
    </f-page-header>

</template>
