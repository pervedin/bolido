<script setup lang="ts">
import { type PersonOrganisationType } from "../BPersonOrganisation";

const emit = defineEmits(['spara', 'avbryt']);

interface Props {
    personOrganisation: PersonOrganisationType,
}

const props = withDefaults(defineProps<Props>(), {});

</script>
<template>
    <p>{{ props.personOrganisation }}</p>
</template>