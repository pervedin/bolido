<script setup lang="ts">
import { FTextField, FEmailTextField, FFieldset, FTooltip } from "@fkui/vue";
import { useForetagetsAdressType, type ForetagetsAdressType } from './ForetagetsAdress';

interface Props {
    foretagetsAdress: ForetagetsAdressType
}

const props = withDefaults(defineProps<Props>(), {
    foretagetsAdress: () => useForetagetsAdressType()
});

</script>
<template>

<f-fieldset>

    <template #label>Adressuppgifter</template>

    <template #tooltip>
        <f-tooltip
            screen-reader-text="Kontaktuppgifterna i ett ärende är obligatoriska uppgifter, dom används när Bolagsverket behöver kontakta dig i frågor rörande ditt ärende."
            header-tag="h3">
            <template #body>
                Om en privatperson ska ansvara för föreningens post ska du skriva personens förnamn och efternamn i fältet C/o, exempelvis C/o Anna Andersson. Detta för att posten ska komma fram till föreningen.
                Om du anmäler en e-postadress till föreningen får de ett meddelande från oss på Bolagsverket varje gång vi tar emot en anmälan som gäller föreningen.
            </template>
        </f-tooltip>
    </template>

    <f-text-field v-model="props.foretagetsAdress.co"> C/o </f-text-field>
    <f-text-field v-model="props.foretagetsAdress.adress"> Adress </f-text-field>
    <f-text-field v-model="props.foretagetsAdress.postnummer" v-validation.required> Postnummer </f-text-field>
    <f-text-field v-model="props.foretagetsAdress.postort"> Postort </f-text-field>
    <f-email-text-field v-model="props.foretagetsAdress.epost"> E-postadress </f-email-text-field>

</f-fieldset>

</template>
