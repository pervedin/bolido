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

<f-fieldset
    id="kontaktuppgifter-fieldset"
    name="kontaktuppgifter-fieldset">

    <template #label>Kontaktperson</template>

    <template #description="{ descriptionClass }">
        <span :class="descriptionClass">Fyll i kontaktuppgifter till den person som du vill att Bolagsverket kontaktar om de har frågor i det här ärendet.</span>
    </template>

    <template #tooltip>
        <f-tooltip
            screen-reader-text="Kontaktuppgifterna i ett ärende är obligatoriska uppgifter, dom används när Bolagsverket behöver kontakta dig i frågor rörande ditt ärende."
            header-tag="h3"
        >
            <template #body>
                Bolagsverket skickar olika meddelanden, exempelvis föreläggande och registrerings bevis till kontaktpersonens e-postadress.
            </template>
        </f-tooltip>
    </template>

    <f-text-field v-model="props.kontaktuppgifter.namn" v-validation.required>
        <template #default>
            Förnamn och efternamn
        </template>
    </f-text-field>

    <f-email-text-field v-model="props.kontaktuppgifter.epost">
        <template #default>
            E-postadress
        </template>
    </f-email-text-field>

    <f-email-text-field v-model="props.kontaktuppgifter.epost_validering">
        <template #default>
            Bekräfta e-postadress
        </template>
    </f-email-text-field>
    
    <f-phone-text-field v-model="props.kontaktuppgifter.telefonnummer">
        <template #default>
            Telefonnummer med landskod
        </template>
    </f-phone-text-field>

</f-fieldset>

</template>
