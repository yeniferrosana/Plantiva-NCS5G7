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
    textDescription: "",
  },
  {
    id: 2,
    imgURL:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/36555689/medium.jpeg",
    name: "Caven Thorn",
    scientificName: "Vachellia caven",
    textDescription: "",
  },
  {
    id: 3,
    imgURL:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/175796134/medium.jpeg",
    name: "Cockspur Coral Tree",
    scientificName: "Erythrina crista-galli",
    textDescription: "",
  },
  {
    id: 4,
    imgURL: "https://static.inaturalist.org/photos/4810555/medium.jpg",
    name: "Common Lantana",
    scientificName: "Lantana camara",
    textDescription: "",
  },
  {
    id: 5,
    imgURL:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/27490957/medium.jpeg",
    name: "Red Buffalo-Bur",
    scientificName: "Solanum sisymbriifolium",
    textDescription: "",
  },
  {
    id: 6,
    imgURL:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/4493728/medium.jpeg",
    name: "Whitemouth Dayflower",
    scientificName: "Commelina erecta",
    textDescription: "",
  },
  {
    id: 7,
    imgURL:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/94139890/medium.jpeg",
    name: "Chañar",
    scientificName: "Geoffroea decorticans",
    textDescription: "",
  },
  {
    id: 8,
    imgURL:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/173109660/medium.jpg",
    name: "Pampas Grass",
    scientificName: "Cortaderia selloana",
    textDescription: "",
  },
  {
    id: 9,
    imgURL:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/21213586/medium.jpg",
    name: "Mile-a-minute Vine",
    scientificName: "Ipomoea cairica",
    textDescription: "",
  },
  {
    id: 10,
    imgURL:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/26703/medium.jpg",
    name: "Tree Tobacco",
    scientificName: "Nicotiana glauca",
    textDescription: "",
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
        fakeData[index].textDescription
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
