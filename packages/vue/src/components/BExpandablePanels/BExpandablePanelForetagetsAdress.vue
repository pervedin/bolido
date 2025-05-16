<script setup lang="ts">
import { FExpandablePanel, FValidationForm  } from "@fkui/vue";
import { BForetagetsAdress, type ForetagetsAdressType } from "../BForetagetsAdress";
import BExpandablePanelButtonSave from "./BExpandablePanelButtonSave.vue";
import BExpandablePanelButtonCancel from "./BExpandablePanelButtonCancel.vue";

const emit = defineEmits(['toggle', 'submit', 'avbryt']);

interface Props {
    panelName: string,
    foretagetsAdress: ForetagetsAdressType,
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
    <template #title> Företagets adress </template>
    <f-validation-form
        @submit="emit('submit', props.panelName)"
        :before-submit="onBeforeSubmit"
    >
        <b-foretagets-adress :foretagets-adress="props.foretagetsAdress" />
        <b-expandable-panel-button-save />
        <b-expandable-panel-button-cancel @click="emit('avbryt')" />
    </f-validation-form>
</f-expandable-panel>
</template>
