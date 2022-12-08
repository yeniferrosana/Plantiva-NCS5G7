<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import SPInput from "../input/spInput.vue";
import SPButton from "../Buttons/SPButton.vue";
import SPText from "../Text/SPText.vue";

const router = useRouter();

function redirectToRegister() {
  router.push({ name: "register" });
}

const email = ref("");
const password = ref("");
const emailtextMessage = ref("");
const passwordtextMessage = ref("");
// eslint-disable-next-line no-useless-escape
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const handleEmailTextMessage = () => {
  if (!regexEmail.test(email.value)) {
    emailtextMessage.value = "Correo incorrecto";
  } else {
    emailtextMessage.value = "";
  }
};

// const handlePasswordTextMessage = () => {};
</script>
<template>
  <form class="px-4 py-5 rounded-md flex flex-col">
    <SPText class="text-center mb-6">LOGIN</SPText>
    <slot></slot>
    <SPInput
      class="mt-2 p-2 border rounded-sm"
      type="email"
      v-model="email"
      @change="handleEmailTextMessage"
      placeholder="Email"
    />
    <SPText class="text-white">{{ emailtextMessage }}</SPText>
    <SPInput
      class="mt-4 p-2 border rounded-sm"
      type="password"
      v-model="password"
      placeholder="12345648"
    />
    <SPText class="hidden text-white">{{ passwordtextMessage }}</SPText>
    <SPButton
      class="text-sac-200 mt-10 bg-[#ECE8D4] text-[#20490C] p-2 rounded-md font-bold text-xl"
      >INGRESAR</SPButton
    >
    <div class="mt-6 flex gap-2">
      <SPText class="text-sm text-white">¿Aun no tienes una cuenta?</SPText>
      <SPButton
        type="button"
        class="text-sm text-white"
        @click="redirectToRegister"
        >REGISTRARME</SPButton
      >
    </div>
  </form>
</template>
