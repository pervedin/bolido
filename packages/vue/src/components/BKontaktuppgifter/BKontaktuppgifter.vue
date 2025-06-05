<script setup lang="ts">
import { FTextField, FPhoneTextField, FEmailTextField, FFieldset, FTooltip } from "@fkui/vue";
import { type KontaktuppgifterType, useKontaktuppgifterType } from "./Kontaktuppgifter";

interface Props {
    kontaktuppgifter: KontaktuppgifterType
}

const props = withDefaults(defineProps<Props>(), {
    kontaktuppgifter: () => useKontaktuppgifterType()
});

</script>

<template>

<f-fieldset>

    <template #label> Kontaktperson </template>

    <template #description="{ descriptionClass }">
        <span :class="descriptionClass">Fyll i kontaktuppgifter till den person som du vill att Bolagsverket kontaktar om de har frågor i det här ärendet.</span>
    </template>

    <template #tooltip>
        <f-tooltip
            screen-reader-text="Bolagsverket skickar olika meddelanden, exempelvis föreläggande och registrerings bevis till kontaktpersonens e-postadress."
            header-tag="h3">
            <template #body>
                Bolagsverket skickar olika meddelanden, exempelvis föreläggande och registrerings bevis till kontaktpersonens e-postadress.
            </template>
        </f-tooltip>
    </template>

    <f-text-field v-model="props.kontaktuppgifter.namn" v-validation.required> Förnamn och efternamn </f-text-field>
    <f-email-text-field v-model="props.kontaktuppgifter.epost" v-validation.required extended-validation> Mejladress </f-email-text-field>
    <f-phone-text-field v-model="props.kontaktuppgifter.telefonnummer" v-validation.required> Telefonnummer med landskod </f-phone-text-field>

</f-fieldset>

</template>
