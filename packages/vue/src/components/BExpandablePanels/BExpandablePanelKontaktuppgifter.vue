<script setup lang="ts">
import { FExpandablePanel, FValidationForm  } from "@fkui/vue";
import { BKontaktuppgifter, type KontaktuppgifterType } from "../BKontaktuppgifter";
import BExpandablePanelButtonGroup from "./BExpandablePanelButtonGroup.vue";

const emit = defineEmits(['toggle', 'submit', 'cancel', 'beforeSubmit', 'beforeValidation']);

interface Props {
    panelName: string,
    kontaktuppgifter: KontaktuppgifterType,
    expanded: boolean,
    notifications?: number
}

const props = withDefaults(defineProps<Props>(), {
    notifications: 0
});

const onToggle = () => {
    emit('toggle', props.panelName);
}

const onSubmit = () => {
    emit('submit', props.panelName);
}

const onBeforeSubmit = async () => {
    emit('beforeSubmit', props.panelName);
}

const onCancel = () => {
    emit('cancel', props.panelName);
}

const onBeforeValidation = () => {
    emit('beforeValidation', props.panelName);
}

</script>
<template>
 <f-expandable-panel :expanded="props.expanded" @toggle="onToggle" :notifications="props.notifications">
    <template #title> Kontaktuppgifter i ärendet </template>
    <f-validation-form
        @submit="onSubmit"
        :before-submit="onBeforeSubmit"
        :before-validation="onBeforeValidation"
        :use-error-list="false"
    >
        <b-kontaktuppgifter :kontaktuppgifter="props.kontaktuppgifter" />
        <b-expandable-panel-button-group @cancel="onCancel" />
    </f-validation-form>
</f-expandable-panel>
</template>
