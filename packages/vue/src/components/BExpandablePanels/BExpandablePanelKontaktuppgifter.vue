<script setup lang="ts">
import { FExpandablePanel, FValidationForm  } from "@fkui/vue";
import { BKontaktuppgifter, type KontaktuppgifterType } from "../BKontaktuppgifter";

const emit = defineEmits(['toggle', 'submit', 'spara', 'avbryt']);

interface Props {
    panelName: string,
    panelTitle: string,
    kontaktuppgifter: KontaktuppgifterType,
    expanded: boolean,
    notifications?: number
}

const props = withDefaults(defineProps<Props>(), {
    notifications: 0
});

const onBeforeSubmit = async () => {
}

</script>
<template>
 <f-expandable-panel :expanded="props.expanded" @toggle="emit('toggle', props.panelName)" :notifications="props.notifications">
    <template #title>{{ props.panelTitle }}</template>
    <f-validation-form
        @submit="emit('submit', props.panelName)"
        :before-submit="onBeforeSubmit"
    >
        <b-kontaktuppgifter :kontaktuppgifter="props.kontaktuppgifter" />
        <button type="submit" class="button button--full-width button--primary button-group__item">
            Spara
        </button>
        <button @click="emit('avbryt')" class="button button--full-width button--primary button-group__item">
            Avbryt
        </button>
    </f-validation-form>
</f-expandable-panel>
</template>
