<template>
  <div>Template doesn't matter.</div>
</template>
<script setup lang="ts">
defineProps<{
  isOptional?: boolean;
}>();

defineEmits<{
  (e: 'custom', prop1: string | Date, prop2: number): void;
}>();
//#region composable

//#endregion

//#region data

//#endregion

//#region methods

//#endregion
</script>
