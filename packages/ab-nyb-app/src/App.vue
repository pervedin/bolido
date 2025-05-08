<script setup lang="ts">
import { FLayoutApplicationTemplate } from "@fkui/vue";
import Default from "./Default.vue";
import Header from "./Header.vue";
import Footer from "./Footer.vue";

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
           <Default />
        </template>
        <template #footer>
            <Footer />
        </template>
    </f-layout-application-template>
</template>
