<script setup>
import SPText from "../Text/SPText.vue";
import { useCounterStore } from "../../stores/modal.store";
import SPCardOptions from "./CardOptions/SPCardOptions.vue";
const store = useCounterStore();

const fakeData = [
  {
    id: 1,
    imgURL:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/40082393/medium.jpg",
    name: "Bluecrown Passionflower",
    scientificName: "Passiflora caerulea",
    lightTextDescription:
      "Comúnmente llamada mburucuyá (del guaraní mburukuja), flor de la pasión, pasionaria azul o simplemente pasionaria, es una planta trepadora originaria de América del Sur. ",
    completeDescription:
      "Crece en regiones de Argentina como Misiones y Corrientes. Requiere un riego regular y prefiere una exposición a pleno sol. Su atractivo radica en sus flores de colores vivos y en sus frutos comestibles. Alcanza una altura de hasta 10 metros y tiene un crecimiento rápido.",
    region: "Misiones y Corrientes",
    riego: "Regular",
    habit: "Trepadora",
    sun: "Pleno sol",
    height: "Hasta 10 centimetros",
    growment: "Rápido",
  },
  {
    id: 2,
    imgURL:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/36555689/medium.jpeg",
    name: "Caven Thorn",
    scientificName: "Vachellia caven",
    lightTextDescription:
      "Comunmente llamado espinillo, caven, o espino, es un árbol originario de América del Sur.",
    completeDescription:
      "Comunmente llamado espinillo, caven, o espino, es un árbol originario de América del Sur. Crece en regiones de Argentina como Córdoba y Buenos Aires. Requiere un riego moderado y prefiere una exposición a la sombra parcial. Su atractivo radica en su corteza de color gris claro y en sus hojas perennes. Alcanza una altura de hasta 20 metros y tiene un crecimiento lento.",
    region: "Córdoba y Buenos Aires",
    riego: "Moderado",
    habit: "Árbol",
    sun: "Sombra parcial",
    height: "Hasta 20 metros",
    growment: "Lento",
  },
  {
    id: 3,
    imgURL:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/175796134/medium.jpeg",
    name: "Cockspur Coral Tree",
    scientificName: "Erythrina crista-galli",
    lightTextDescription:
      "Comúnmente llamado ceibo, es un árbol originario de América del Sur. Crece en regiones de Argentina como Santiago del Estero y Jujuy. ",
    completeDescription:
      "Comúnmente llamado ceibo, es un árbol originario de América del Sur. Crece en regiones de Argentina como Santiago del Estero y Jujuy. Requiere un riego regular y prefiere una exposición a pleno sol. Su atractivo radica en sus flores rojas brillantes y en sus frutos comestibles. Alcanza una altura de hasta 15 metros y tiene un crecimiento medio.",
    region: "Santiago del Estero y Jujuy",
    riego: "Regular",
    habit: "Árbol",
    sun: "Pleno sol",
    height: "Hasta 15 metros",
    growment: "Medio",
  },
  {
    id: 4,
    imgURL: "https://static.inaturalist.org/photos/4810555/medium.jpg",
    name: "Common Lantana",
    scientificName: "Lantana camara",
    lightTextDescription:
      "Comúnmente llamada lantana, es un arbusto originario de América del Sur. Crece en regiones de Argentina como San Luis y La Pampa. ",
    completeDescription:
      "Comúnmente llamada lantana, es un arbusto originario de América del Sur. Crece en regiones de Argentina como San Luis y La Pampa. Requiere un riego regular y prefiere una exposición a pleno sol. Su atractivo radica en sus flores de colores variados que cambian de tonalidad a lo largo del día. Además, es utilizada como planta medicinal para tratar dolores de cabeza y resfriados. Alcanza una altura de hasta 2 metros y tiene un crecimiento medio.",
    region: "San Luis y La Pampa",
    riego: "Regular",
    habit: "Arbusto",
    sun: "Pleno sol",
    height: "Hasta 2 metros",
    growment: "Medio",
  },
  {
    id: 5,
    imgURL:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/27490957/medium.jpeg",
    name: "Red Buffalo-Bur",
    scientificName: "Solanum sisymbriifolium",
    lightTextDescription:
      "También conocido como solano espinoso, es un arbusto originario de América del Sur. Crece en regiones de Argentina como Río Negro y Santa Fe. ",
    completeDescription:
      "También conocido como solano espinoso, es un arbusto originario de América del Sur. Crece en regiones de Argentina como Río Negro y Santa Fe. Requiere un riego regular y prefiere una exposición a la sombra parcial. Su atractivo radica en sus frutos comestibles y en su uso medicinal para tratar problemas digestivos. Alcanza una altura de hasta 2 metros y tiene un crecimiento medio.",
    region: "Río Negro y Santa Fe",
    riego: "Regular",
    habit: "Arbusto",
    sun: "Sombra parcial",
    height: "Hasta 2 metros",
    growment: "Medio",
  },
  {
    id: 6,
    imgURL:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/4493728/medium.jpeg",
    name: "Whitemouth Dayflower",
    scientificName: "Commelina erecta",
    lightTextDescription:
      "También conocida como hierba de los ojos, es una planta herbácea originaria de América del Sur. Crece en regiones de Argentina como Buenos Aires y Entre Ríos.",
    completeDescription:
      "También conocida como hierba de los ojos, es una planta herbácea originaria de América del Sur. Crece en regiones de Argentina como Buenos Aires y Entre Ríos. Requiere un riego regular y prefiere una exposición a pleno sol. Su atractivo radica en sus flores azules y en su uso medicinal para tratar problemas de piel. Alcanza una altura de hasta 1 metro y tiene un crecimiento rápido.",
    region: "Buenos Aires y Entre Ríos",
    riego: "Regular",
    habit: "Herbácea",
    sun: "Pleno sol",
    height: "Hasta 1 metro",
    growment: "Rápido",
  },
  {
    id: 7,
    imgURL:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/94139890/medium.jpeg",
    name: "Chañar",
    scientificName: "Geoffroea decorticans",
    lightTextDescription:
      "También conocido como algarrobo blanco, es un árbol originario de América del Sur. Crece en regiones de Argentina como La Rioja y San Juan. ",
    completeDescription:
      "También conocido como algarrobo blanco, es un árbol originario de América del Sur. Crece en regiones de Argentina como La Rioja y San Juan. Requiere un riego moderado y prefiere una exposición a pleno sol. Su atractivo radica en sus frutos comestibles y en su madera dura utilizada en la construcción. Alcanza una altura de hasta 15 metros y tiene un crecimiento medio.",
    region: "La Rioja y San Juan",
    riego: "Moderado",
    habit: "Árbol",
    sun: "Pleno sol",
    height: "Hasta 15 metros",
    growment: "Medio",
  },
  {
    id: 8,
    imgURL:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/173109660/medium.jpg",
    name: "Pampas Grass",
    scientificName: "Cortaderia selloana",
    lightTextDescription:
      "También conocida como pluma de ave, es una planta herbácea originaria de América del Sur. Crece en regiones de Argentina como Tierra del Fuego y Chubut. ",
    completeDescription:
      "También conocida como pluma de ave, es una planta herbácea originaria de América del Sur. Crece en regiones de Argentina como Tierra del Fuego y Chubut. Requiere un riego moderado y prefiere una exposición a pleno sol. Su atractivo radica en sus hojas largas y en sus inflorescencias en forma de pluma. Alcanza una altura de hasta 2 metros y tiene un crecimiento medio.",
    region: "Tierra del Fuego y Chubut",
    riego: "Regular",
    habit: "Trepadora",
    sun: "Pleno sol",
    height: "Hasta 1,5 metros",
    growment: "Medio",
  },
  {
    id: 9,
    imgURL:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/21213586/medium.jpg",
    name: "Mile-a-minute Vine",
    scientificName: "Ipomoea cairica",
    lightTextDescription:
      "También conocida como tabaco cenizo, es una planta herbácea originaria de América del Sur. Crece en regiones de Argentina como Jujuy y Salta.",
    completeDescription:
      "También conocida como tabaco cenizo, es una planta herbácea originaria de América del Sur. Crece en regiones de Argentina como Jujuy y Salta. Requiere un riego regular y prefiere una exposición a pleno sol. Su atractivo radica en sus flores de color azul claro y en su uso medicinal para tratar problemas digestivos. Alcanza una altura de hasta 1,5 metros y tiene un crecimiento medio.",
    region: "Chaco y Formosa",
    riego: "Regular",
    habit: "Herbácea",
    sun: "Pleno sol",
    height: "Hasta 10 metros",
    growment: "Rápido",
  },
  {
    id: 10,
    imgURL:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/26703/medium.jpg",
    name: "Tree Tobacco",
    scientificName: "Nicotiana glauca",
    lightTextDescription:
      "También conocida como tabaco cenizo, es una planta herbácea originaria de América del Sur. Crece en regiones de Argentina como Jujuy y Salta.",
    completeDescription:
      "También conocida como tabaco cenizo, es una planta herbácea originaria de América del Sur. Crece en regiones de Argentina como Jujuy y Salta. Requiere un riego regular y prefiere una exposición a pleno sol. Su atractivo radica en sus flores de color azul claro y en su uso medicinal para tratar problemas digestivos. Alcanza una altura de hasta 1,5 metros y tiene un crecimiento medio.",
    region: "Jujuy y Salta",
    riego: "Regular",
    habit: "Herbácea",
    sun: "Pleno sol",
    height: "Hasta 1,5 metros",
    growment: "Medio",
  },
];
</script>

<template>
  <div
    v-for="(card, index) in fakeData"
    :key="index"
    class="card-wrapper bg-green-100 flex flex-col justify-between outline outline-1 rounded-lg outline-slate-600 cursor-pointer hover:shadow-slate-700 hover:shadow hover:outline-none transition duration-700 ease-linear"
    @click="store.changeShow(true)"
  >
    <div class="card-media relative">
      <img
        class="block w-full rounded-t-lg h-44"
        v-bind:src="fakeData[index].imgURL"
        alt=""
      />
      <SPCardOptions
        class="card-options absolute right-4 top-4 opacity-0 transition duration-700"
      />
    </div>
    <div class="card-body p-3">
      <SPText tag="h1" class="font-bold">{{ fakeData[index].name }}</SPText>
      <SPText class="font-light">{{ fakeData[index].scientificName }}</SPText>
      <SPText tag="p" class="mt-2">{{
        fakeData[index].lightTextDescription
      }}</SPText>
    </div>
    <div
      class="verMas w-full text-center rounded-b-lg bg-rose-100 font-semibold pt-1 pb-1 opacity-0"
    >
      Ver más
    </div>
  </div>
</template>

<style scoped>
.card-media:hover > .card-options {
  transition: all 700ms;
  opacity: 1;
}
.card-wrapper:hover > .verMas {
  opacity: 1;
}
</style>
