<script setup lang="ts">
import { type PersonOrganisationType } from "../BPersonOrganisation";
import { FCard } from "@fkui/vue";

const emit = defineEmits(['spara', 'avbryt']);

interface Props {
    personOrganisation: PersonOrganisationType,
}

const props = withDefaults(defineProps<Props>(), {});

</script>
<template>
    <f-card>

        <p>{{ props.personOrganisation }}</p>
    </f-card>
</template>