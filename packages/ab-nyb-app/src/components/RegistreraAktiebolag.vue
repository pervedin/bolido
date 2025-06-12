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
const currentOpenPanel = ref("");

const onToggle = (panelName: string):void => {
    let open = isOpen(panelName);
    if (open) currentOpenPanel.value = "";
    else currentOpenPanel.value = panelName;
}

const isOpen = (panelName: string): boolean => {
    if (currentOpenPanel.value === panelName) return true;
    return false;
}

const onSubmit = (panelName: string) => {
    console.log("onSubmit(" + panelName + ")");
    currentOpenPanel.value = "";
}

const onBeforeSubmit = async (panelName: string) => {
    console.log("onBeforeSubmit(" + panelName + ")");
    //return FValidationFormAction.CONTINUE;
}

const onCancel = (panelName: string) => {
    console.log("onCancel(" + panelName + ")");
    currentOpenPanel.value = "";
}


</script>

<template>

    <b-expandable-panel-kontaktuppgifter
        panelName="KONTAKTUPPGIFTER"
        :kontaktuppgifter="kontaktuppgifter"
        :expanded="isOpen('KONTAKTUPPGIFTER')"
        @toggle="onToggle"
        @submit="onSubmit"
        @before-submit="onBeforeSubmit"
        @cancel="onCancel"
    />
    
    <b-expandable-panel-foretagets-adress
        panelName="FORETAGETSADRESS"
        :foretagetsAdress="foretagetsAdress"
        :expanded="isOpen('FORETAGETSADRESS')"
        @toggle="onToggle"
        @submit="onSubmit"
        @before-submit="onBeforeSubmit"
        @cancel="onCancel"
    />

    <!--f-expandable-panel :expanded="isOpen('SAMMANSTALLNING')" @toggle="onToggle('SAMMANSTALLNING')">
        <template #title>Sammanställning</template>
        <p>Sammanställning</p>
    </f-expandable-panel-->

</template>
