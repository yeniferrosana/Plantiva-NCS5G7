<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import SPInput from "../input/SPInput.vue";
import SPButton from "../Buttons/SPButton.vue";
import SPText from "../Text/SPText.vue";

import { useUserStore } from "../../stores/user";


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

const userStore = useUserStore();

const login = async () => {
  await userStore.signIn(email, password);
};

// const handlePasswordTextMessage = () => {};
</script>
<template>
  <form class="py-6 px-12 lg:mx-12 xl:mx-12 rounded-xl flex flex-col border-2 border-gray-100">
    <SPText class="text-center mb-6 font-abril text-white text-2xl">Ingresa para ver más detalles</SPText>
    <slot></slot>
    <p class="text-sm text-white font-inter">Email</p>
    <SPInput
      class="mt-2 p-2 border rounded-md"
      type="email"
      v-model="email"
      @change="handleEmailTextMessage"
      placeholder="Ingresa tu email"
    />
    <SPText class="text-white">{{ emailtextMessage }}</SPText>
    <p class="pt-4 text-white font-inter text-sm">Contraseña</p>
    <SPInput
      class="mt-4 p-2 border rounded-md"
      type="password"
      v-model="password"
      placeholder="Ingresa tu contraseña"
    />
    <SPText class="hidden text-white">{{ passwordtextMessage }}</SPText>
    <SPButton
      class="text-sac-200 mt-10 bg-orange-100 text-green-900 p-2 rounded-md font-bold text-xl"
      >Iniciar Sesión</SPButton
    >
    <div class="mt-6 flex gap-2 justify-center">
      <SPText class="text-sm text-white font-abril">¿Aun no tienes una cuenta?</SPText>
      <SPButton
        type="button"
        class="text-sm text-white mt-1"
        @click="redirectToRegister"
        >Registrate</SPButton
      >
    </div>
  </form>
</template>
