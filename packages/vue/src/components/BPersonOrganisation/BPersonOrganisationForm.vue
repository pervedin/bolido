<script setup lang="ts">
import { FTextField, FFieldset, FTooltip } from "@fkui/vue";
import { type PersonOrganisationType } from "../BPersonOrganisation";

const emit = defineEmits(['spara', 'avbryt']);

interface Props {
    personOrganisation: PersonOrganisationType,
}

const props = withDefaults(defineProps<Props>(), {});

</script>
<template>
<f-fieldset>

    <template #label> Person </template>

    <template #description="{ descriptionClass }">
        <span :class="descriptionClass">Person i organisation.</span>
    </template>

    <template #tooltip>
        <f-tooltip
            screen-reader-text="Person i organisation"
            header-tag="h3">
            <template #body>Fyll i det här så ordnar det sig</template>
        </f-tooltip>
    </template>

    <f-text-field v-model="props.personOrganisation.personidentitet" v-validation.required> Födelsedatum </f-text-field>
    <f-text-field v-model="props.personOrganisation.fornamn" v-validation.required> Förnamn </f-text-field>
    <f-text-field v-model="props.personOrganisation.efternamn" v-validation.required> Efternamn </f-text-field>
    <f-text-field v-model="props.personOrganisation.bosattningsland" v-validation.required> Bosättningsland </f-text-field>

</f-fieldset>
</template>