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

<f-fieldset
    id="foretagetsadress-fieldset"
    name="foretagetsadress-fieldset">

    <template #label>Adressuppgifter</template>

    <template #tooltip>
        <f-tooltip
            screen-reader-text="Kontaktuppgifterna i ett ärende är obligatoriska uppgifter, dom används när Bolagsverket behöver kontakta dig i frågor rörande ditt ärende."
            header-tag="h3"
        >
            <template #header>Läs mer om kontaktuppgifter</template>
            <template #body>
                Kontaktuppgifterna i ett ärende är en obligatorisk uppgift, dom används när Bolagsverket behöver kontakta dig i frågor rörande ditt ärende.
            </template>
        </f-tooltip>
    </template>

    <f-text-field v-model="props.foretagetsAdress.co">
        <template #default>
            C/o
        </template>
    </f-text-field>

    <f-text-field v-model="props.foretagetsAdress.adress">
        <template #default>
            Adress
        </template>
    </f-text-field>

    <f-text-field v-model="props.foretagetsAdress.postnummer" v-validation.required>
        <template #default>
            Postnummer
        </template>
    </f-text-field>

    <f-text-field v-model="props.foretagetsAdress.postort">
        <template #default>
            Postort
        </template>
    </f-text-field>

    <f-email-text-field v-model="props.foretagetsAdress.epost">
        <template #default>
            E-postadress
        </template>
    </f-email-text-field>

</f-fieldset>

</template>
