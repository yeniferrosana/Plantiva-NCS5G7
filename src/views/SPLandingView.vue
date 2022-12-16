<script>
  import SPCardPlants from "../components/Card/SPCardPlants.vue";
  
  export default {
    components: {
      SPCardPlants,
    },
    data() {
      return {
        items: [
          { id:'1', name: 'Regulan el clima' },
          { id:'2', name: 'Mejoran la calidad del aire y del suelo' },
          { id:'3', name: 'Contribuyen a la conservación de la biodiversidad' },
          { id:'4', name: 'Son fuente de alimento y medicina' },
        ]
      }
    }
  }
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
      <div class="bg-green-900 p-12 w-11/12 mb-10 rounded-lg">
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
      
      <div class="bg-green-700 p-12 w-11/12 mb-10 rounded-lg">
        <p class="text-white font-inter font-bold sm:text-5xl text-3xl mb-8 text-center">¿Qué son plantas nativas?</p>
        <p class="text-white text-3xl text-justify">
          Las plantas nativas son aquellas que crecen en una región determinada
          de forma natural, sin la intervención del ser humano. Son parte
          fundamental del ecosistema local y su presencia es esencial para el 
          equilibrio y la conservación de la biodiversidad. Su presencia en nuestro
          entorno es fundamental para garantizar la salud y el bienestar de las
          personas y de la Tierras en general.
        </p>
      </div>

      <div class="bg-green-400 p-12 w-11/12 mb-10 rounded-lg">
        <p class="text-gradient-to-r from-stone-900 to-green-900 font-inter font-bold sm:text-5xl text-3xl mb-8 text-center">Beneficios de las plantas nativas</p>
        <div class="flex flex-wrap ">
          <div 
            v-for="(item) in items"
            :key="item.id"
            class="py-4 px-4 lg:w-1/4 xl:w-1/4 w-full"
            
          >
            <SPCardPlants :name="item.name" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>