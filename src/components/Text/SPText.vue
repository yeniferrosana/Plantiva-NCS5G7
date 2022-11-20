<script setup>
defineProps({
  tag: {
    type: String,
    required: false,
    default: "span",
  },
});
</script>
<template>
  <component :is="tag"><slot /></component>
</template>
