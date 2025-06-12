<script setup lang="ts">
import { ref } from "vue";
import {
    useKontaktuppgifterType,
    useForetagetsAdressType,
    BExpandablePanelKontaktuppgifter,
    BExpandablePanelForetagetsAdress
} from "@vedin-pp-se/bolido-vue";

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

const onBeforeSubmit = async (panelName: string) => {
    console.log("onBeforeSubmit(" + panelName + ")");
    //return FValidationFormAction.CONTINUE;
}


</script>

<template>

    <b-expandable-panel-kontaktuppgifter
        panelName="KONTAKTUPPGIFTER"
        :kontaktuppgifter="kontaktuppgifter"
        :expanded="isOpen('KONTAKTUPPGIFTER')"
        @toggle="onToggle"
        @submit="onSubmit"
    />
    
    <b-expandable-panel-foretagets-adress
        panelName="FORETAGETSADRESS"
        :foretagetsAdress="foretagetsAdress"
        :expanded="isOpen('FORETAGETSADRESS')"
        @toggle="onToggle"
        @submit="onSubmit"
        @on-before-submit="onBeforeSubmit"
    />

    <!--f-expandable-panel :expanded="isOpen('SAMMANSTALLNING')" @toggle="onToggle('SAMMANSTALLNING')">
        <template #title>Sammanställning</template>
        <p>Sammanställning</p>
    </f-expandable-panel-->

</template>
