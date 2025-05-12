<script setup lang="ts">
import { FTextField, FPhoneTextField, FEmailTextField, FFieldset, FTooltip, FMessageBox } from "@fkui/vue";
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
    <template #label>Kontaktuppgifter</template>
    <template #description="{ descriptionClass }">
        <span :class="descriptionClass">Fyll i kontaktuppgifter så att Bolagsverket vet vem dom ska kontakta i det här ärendet.</span>
    </template>
    <template #error-message>
        <f-message-box type="error">
            <template #default="{ headingSlotClass }">
                <h3 :class="headingSlotClass">Rubrik</h3>
                <p>Brödtext</p>
            </template>
        </f-message-box>
    </template>
    <template #tooltip>
        <f-tooltip
            screen-reader-text="Kontaktuppgifterna i ett ärende är obligatoriska uppgifter, dom används när Bolagsverket behöver kontakta dig i frågor rörande ditt ärende."
            header-tag="h2"
        >
            <template #header>Läs mer om kontaktuppgifter</template>
            <template #body>
                Kontaktuppgifterna i ett ärende är obligatoriska uppgifter, dom används när Bolagsverket behöver kontakta dig i frågor rörande ditt ärende.
            </template>
        </f-tooltip>
    </template>
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
</f-fieldset>

</template>
