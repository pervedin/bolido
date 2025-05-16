<script setup lang="ts">
import { ref } from "vue";
import { Kontaktuppgifter, useKontaktuppgifterType, BForetagetsAdress, useForetagetsAdressType } from "@vedin-pp-se/bolido-vue";
import { FExpandablePanel, FValidationForm, FValidationFormAction  } from "@fkui/vue";

const kontaktuppgifter = ref(useKontaktuppgifterType());
const foretagetsAdress = ref(useForetagetsAdressType());
const nuvarandeOppenPanel = ref("");

const onToggle = (panelName: string):void => {
    let open = isOpen(panelName);
    if (open) nuvarandeOppenPanel.value = "";
    else nuvarandeOppenPanel.value = panelName;
}

const isOpen = (panelName: string): boolean => {
    if (nuvarandeOppenPanel.value === panelName) return true;
    return false;
}

const onSubmit = (panelName: string) => {
    console.log("onSubmit(" + panelName + ")");
    nuvarandeOppenPanel.value = "";
}

const onBeforeSubmit = async () => {
    console.log("beforeKontaktuppgifterSubmit");
    return FValidationFormAction.CONTINUE;
}

</script>

<template>
    <f-expandable-panel :expanded="isOpen('KONTAKTUPPGIFTER')" @toggle="onToggle('KONTAKTUPPGIFTER')" :notifications="5">
        <template #title>Kontaktuppgifter i ärendet</template>
        <f-validation-form 
            id="kontaktuppgifter-form"
            @submit="onSubmit('KONTAKTUPPGIFTER')"
            :before-submit="onBeforeSubmit"
        >
            <Kontaktuppgifter :kontaktuppgifter="kontaktuppgifter" />
            <button type="submit" class="button button--full-width button--primary button-group__item">
                Spara
            </button>
        </f-validation-form>
    </f-expandable-panel>

    <f-expandable-panel :expanded="isOpen('FORETAGETSADRESS')" @toggle="onToggle('FORETAGETSADRESS')">
        <template #title>Företagets adress</template>
        <f-validation-form @submit="onSubmit('FORETAGETSADRESS')" id="foretagetsadress-form">
            <b-foretagets-adress :foretagets-adress="foretagetsAdress" />
            <button type="submit" class="button button--full-width button--primary button-group__item">
                Spara
            </button>
        </f-validation-form>
    </f-expandable-panel>
    <f-expandable-panel :expanded="isOpen('SAMMANSTALLNING')" @toggle="onToggle('SAMMANSTALLNING')">
        <template #title>Sammanställning</template>
        <p>Sammanställning</p>
    </f-expandable-panel>
</template>
