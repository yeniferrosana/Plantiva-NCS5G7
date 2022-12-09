<script setup>

</script>

<template>
  <main class="flex flex-col">
    <div class="flex">
      <img
        src="../assets/leaves/leftLeaves.svg"
        alt="image of leaves"
        class="abosolute left-0 h-full"
      />
      <div class="w-full h-[32rem] flex-grow z-10 absolute">
        <div
          class="flex items-center justify-center w-full h-full bg-opacity-50 mt-20"
        >
          <div class="flex text-center flex-col items-center">
            <h1
              class="landingText text-5xl font-semibold text-stone-900 mb-12 w-3/5 text-center"
            >
              Descubre cómo las plantas nativas pueden
              <span class="text-green-700">transformar</span> tu vida y tu
              entorno
            </h1>
            <router-link to="/home">
              <button
                class="landingButton w-full px-8 py-6 mt-4 text-lg font-medium text-amber-50 transform rounded-full lg:w-auto focus:outline-none bg-red-700 leading-3"
              >
                Explorar plantas nativas
              </button>
            </router-link>
            <img
              class="w-64 mt-40"
              src="../assets/logoInverted.svg"
              alt="Logo Image"
            />
            <img
              class="w-5d h-5 relative top-20"
              src="../assets/arrow-down-sign-to-navigate.png"
              alt="arrow down image"
            />
          </div>
        </div>
      </div>
      <img
        src="../assets/leaves/rightLeaves.svg"
        alt="image of leaves"
        class="absolute right-0 h-full"
      />
    </div>
    <div
      class="container flex flex-col relative bottom-1/3 max-w-none w-full items-center"
    >
      <div class="bg-green-900 p-4 w-11/12 italic mb-10 rounded-md">
        <p class="text-white text-5xl font-semibold mb-8">Acerca de Plantiva</p>
        <p class="text-white text-3xl">
          Plantiva es tu explorador de las plantas nativas en Argentina, con
          información detallada sobre cada una para que puedas elegir la que
          mejor se adapte a tus necesidades y gustos. Con Plantiva, podrás
          aumentar la biodiversidad en tu hogar y disminuir tu impacto en el
          cambio climático.
        </p>
      </div>
    </div>
    <div
      class="container flex flex-col relative bottom-1/3 max-w-none w-full items-center"
    >
      <div class="bg-green-700 p-4 w-11/12 italic mb-10 rounded-md">
        <p class="text-white text-5xl font-semibold mb-8">Acerca de Plantiva</p>
        <p class="text-white text-3xl">
          Plantiva es tu explorador de las plantas nativas en Argentina, con
          información detallada sobre cada una para que puedas elegir la que
          mejor se adapte a tus necesidades y gustos. Con Plantiva, podrás
          aumentar la biodiversidad en tu hogar y disminuir tu impacto en el
          cambio climático.
        </p>
      </div>
    </div>
    <div
      class="container flex flex-col relative bottom-1/3 max-w-none w-full items-center"
    >
      <div class="bg-green-500 p-4 w-11/12 italic rounded-md mb-32">
        <p class="text-white text-5xl font-semibold mb-8">Acerca de Plantiva</p>
        <p class="text-white text-3xl">
          Plantiva es tu explorador de las plantas nativas en Argentina, con
          información detallada sobre cada una para que puedas elegir la que
          mejor se adapte a tus necesidades y gustos. Con Plantiva, podrás
          aumentar la biodiversidad en tu hogar y disminuir tu impacto en el
          cambio climático.
        </p>
      </div>
    </div>
  </main>
</template>

<style>
.landingText {
  font-family: "Abril Fatface", cursive;
}

.landingButton {
  font-family: "Inter", sans-serif;
}

.container {
  font-family: "Inter", sans-serif;
}
</style>
