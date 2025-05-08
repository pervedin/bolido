<script setup lang="ts">
import { FTextField, FPhoneTextField, FEmailTextField } from "@fkui/vue";
import { type KontaktuppgifterType, useKontaktuppgifterType } from "./Kontaktuppgifter";

interface Props {
    kontaktuppgifter: KontaktuppgifterType
}

const props = withDefaults(defineProps<Props>(), {
    kontaktuppgifter: () => useKontaktuppgifterType()
});

</script>

<template>

    <f-text-field v-model="props.kontaktuppgifter.namn">
        <template #default>
            Förnamn och efternamn
        </template>
    </f-text-field>

    <f-email-text-field v-model="props.kontaktuppgifter.epost">
        <template #default>
            Epostadress
        </template>
    </f-email-text-field>

    <f-email-text-field v-model="props.kontaktuppgifter.epost_validering">
        <template #default>
            Bekräfta epostadress
        </template>
    </f-email-text-field>
    
    <f-phone-text-field v-model="props.kontaktuppgifter.telefonnummer">
        <template #default>
            Telefonnummer med landskod
        </template>
    </f-phone-text-field>

</template>
