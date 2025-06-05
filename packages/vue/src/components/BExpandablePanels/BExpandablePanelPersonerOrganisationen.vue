<script setup lang="ts">
import { ref } from "vue";
import { FExpandablePanel, FValidationForm, FCard  } from "@fkui/vue";
import BExpandablePanelButtonSave from "./BExpandablePanelButtonSave.vue";
import BExpandablePanelButtonCancel from "./BExpandablePanelButtonCancel.vue";
import { BPersonOrganisationCard,  type PersonOrganisationType } from "../BPersonOrganisation";

const emit = defineEmits(['toggle', 'submit', 'avbryt']);

interface Props {
    title: string,
    panelName: string,
    personerOrganisation: PersonOrganisationType[],
    expanded: boolean,
    notifications?: number
}

const props = withDefaults(defineProps<Props>(), {
    notifications: 0
});

const currentPersonOrganisationId = ref("");

const onBeforeSubmit = async () => {
}

</script>
<template>
 <f-expandable-panel :expanded="props.expanded" @toggle="emit('toggle', props.panelName)" :notifications="props.notifications">
    <template #title> {{  props.title }} </template>

    <template v-for="personOrganisation in props.personerOrganisation">
        <b-person-organisation-card 
            @spara=""
            @avbryt=""
            :person-organisation="personOrganisation" />
    </template>
    <b-expandable-panel-button-save />
    <b-expandable-panel-button-cancel @click="emit('avbryt')" />

</f-expandable-panel>
</template>
