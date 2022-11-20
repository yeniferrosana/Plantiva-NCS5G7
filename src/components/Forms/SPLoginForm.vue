<script setup>
import { useRouter } from "vue-router";
import SPInput from "../input/spInput.vue";
import SPButton from "../Buttons/SPButton.vue";
import SPText from "../Text/SPText.vue";

const router = useRouter();

function redirectToRegister() {
  router.push({ name: "register" });
}
</script>
<template>
  <form class="px-4 py-5 rounded-md flex flex-col">
    <SPText class="text-center mb-12">LOGIN</SPText>
    <SPInput
      class="mt-2 p-2 border rounded-sm"
      type="email"
      placeholder="Email"
    />
    <SPInput
      class="mt-2 p-2 border rounded-sm"
      type="password"
      placeholder="12345648"
    />
    <SPButton class="text-sac-200 text-sm mt-2 bg-stone-500 p-2 rounded-md"
      >INGRESAR</SPButton
    >
    <div class="mt-4 flex gap-2">
      <SPText class="text-sm">¿Aun no tienes una cuenta?</SPText>
      <SPButton type="button" class="text-sm" @click="redirectToRegister"
        >REGISTRARME</SPButton
      >
    </div>
  </form>
</template>
