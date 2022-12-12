<script setup>
  import SPCardPlants from "../components/Card/SPCardPlants.vue";
</script>

<template>
  <main class="w-full bg-center bg-cover bg-origin-border bg-repeat-y bg-sp-200 py-5" style="background-image: url('https://res.cloudinary.com/yeniferramirez11/image/upload/v1670681109/hero_yywnwq.png');">
    <section class="min-h-[32rem]">
      <div class="container mx-auto flex px-5 py-2 items-center justify-center flex-col">
        <div class="text-center lg:w-2/3 w-full">
          <h1
            class="font-abril text-5xl font-semibold text-stone-900 py-24"
          >
            Descubre cómo las plantas nativas pueden
            <span class="text-green-700">transformar</span> tu vida y tu
            entorno
          </h1>
          <router-link to="/home">
            <button
              class="font-inter w-full px-8 py-6 text-lg font-medium text-amber-50 transform rounded-full lg:w-auto focus:outline-none bg-red-700 hover:bg-red-400 hover:italic leading-3"
            >
              Explorar plantas nativas
            </button>
          </router-link>
        </div>
      </div>
    </section>
    <div
      class="container flex flex-col relative max-w-none w-full items-center"
    >

      <!--Div Plantivas-->
      <div class="bg-green-900 p-8 w-11/12 mb-10 rounded-lg">
        <p class="text-white font-inter font-bold sm:text-5xl mb-8 text-center text-3xl ">Acerca de Plantiva</p>
        <p class="text-white text-3xl text-justify">
          Plantiva es tu explorador de las plantas nativas en Argentina, con
          información detallada sobre cada una para que puedas elegir la que
          mejor se adapte a tus necesidades y gustos. Con Plantiva, podrás
          aumentar la biodiversidad en tu hogar y disminuir tu impacto en el
          cambio climático.
        </p>
      </div>

      <!--Div Plantas Nativas-->
      
      <div class="bg-sp-200  p-8 w-11/12 mb-10 rounded-lg">
        <p class="text-stone-900 font-inter font-bold sm:text-5xl text-3xl mb-8 text-center">¿Qué son plantas nativas?</p>
        <p class="text-stone-900 text-3xl text-justify">
          Las plantas nativas son aquellas que crecen en una región determinada
          de forma natural, sin la intervención del ser humano. Son parte
          fundamental del ecosistema local y su presencia es esencial para el 
          equilibrio y la conservación de la biodiversidad. Su presencia en nuestro
          entorno es fundamental para garantizar la salud y el bienestar de las
          personas y de la Tierras en general.
        </p>
      </div>

      <div class="px-4 w-11/12 flex flex-wrap text-center">
        <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
          <SPCardPlants />
        </div>
        <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
          <SPCardPlants />
        </div>
        <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
          <SPCardPlants />
        </div>
      </div>
    </div>
    <!--<div class="flex">
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
              class="font-abril text-5xl font-semibold text-stone-900 mb-12 w-3/5 text-center"
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
    </div>-->
  </main>
</template>