<script setup></script>

<template>
  <header class="bg-green-900 shadow">
    <div
      class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between"
    >
      <!--Logo-->
      <div class="my-1">
        <a
          class="text-2xl font-bold text-white transition-colors duration-300 transform lg:text-3xl hover:text-sp-100"
          href="/"
        >
          <img class="w-32" src="../../assets/logo.svg" alt="logo image" />
        </a>
      </div>
      <!--Buscador y Explorar-->
      <div
        v-if="$route.name === 'home'"
        class="relative items-center justify-center md:ml-auto md:mr-auto"
      >
        <span class="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg class="w-5 h-5 text-sp" viewBox="0 0 24 24" fill="none">
            <path
              d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </span>
        <input
          type="text"
          class="w-full py-2 pl-10 pr-4 text-green-900 bg-white border rounded-lg focus:border-sp-100 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-sp-100"
          placeholder="Buscar Plantas Nativas"
        />
      </div>

      <!--Botones-->
      <div class="flex text-sp-50 font-bold text-sm mt-2">
        <router-link to="/register">
          <button
            class="inline-flex items-center bg-sp-100 border-0 py-2 px-3 focus:outline-none rounded-lg md:mt-0 mr-2"
          >
            REGISTRARME
          </button>
        </router-link>
        <router-link to="/login">
          <button
            class="inline-flex items-center bg-sp-200 border-0 py-2 px-3 focus:outline-none rounded-lg md:mt-0 ml-2"
          >
            INGRESAR
          </button>
        </router-link>
      </div>
    </div>
  </header>
</template>
