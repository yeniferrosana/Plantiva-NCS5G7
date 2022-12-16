<script lang="ts" setup>
  const props = defineProps({
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
  })

</script>
<template>
  <div class="text-center content-center w-full border-0 min-h-[8rem] bg-gradient-to-r from-stone-900 to-green-900 px-2 py-4 rounded-lg transform transition duration-500 hover:scale-110">
    <h2 class="font-abril title-font font-medium text-xl text-white">{{ name }}</h2>
  </div>
</template>
