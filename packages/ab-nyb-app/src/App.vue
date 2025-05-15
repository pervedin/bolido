<script setup lang="ts">
import { ref } from "vue";
import { FLayoutApplicationTemplate } from "@fkui/vue";
import Default from "./Default.vue";
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import { FValidationForm, FDatepickerField } from "@fkui/vue";

const datum = ref("");

</script>

<template>
    <f-layout-application-template>
        <template #header>
            <Header />
        </template>
        <template #top-navigation>
            <p>Top navigation</p>
        </template>
        <template #default>
            <f-validation-form>
                <template #error-messages>Du har glömt och Ada:</template>
                <Default />
                <f-datepicker-field v-model="datum" />
            </f-validation-form>
        </template>
        <template #footer>
            <Footer />
        </template>
    </f-layout-application-template>
</template>
