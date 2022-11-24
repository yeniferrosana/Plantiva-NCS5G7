<script setup>
import SearchBar from "../shared/SearchBar.vue";
const arrayRegiones = [
  "Noa",
  "Chaco",
  "Mesopotamia",
  "Cuyo",
  "Sierras pampeanas",
  "Pampa húmeda",
  "Estepa",
  "Patagonia",
];

const arrayIrrigation = [
  "Riego tendido",
  "Riego por surcos",
  "Riego por melgas",
  "Riego por aspersión",
  "Riego por microaspersión",
  "Riego por goteo",
];
</script>

<template>
  <div class="filterContainer bg-green-800 w-56 rounded-md pb-2 ml-3">
    <div class="w-full flex justify-center">
      <SearchBar></SearchBar>
    </div>
    <div class="filter text-white ml-7 text-sm">
      <h4 class="filterTitle font-bold mb-2">FILTROS</h4>
      <div class="regionFilter mb-3">
        <p class="regionSubtitle font-bold">REGIONES</p>
        <ul class="regionUl">
          <li
            class="regionLi"
            v-for="(region, index) in arrayRegiones"
            :key="index"
          >
            {{ region }}
          </li>
        </ul>
      </div>
      <div class="irrigationFilter">
        <p class="irrigationSubtitle font-bold">MÉTODO DE RIEGO</p>
        <ul class="irrigationUl">
          <li v-for="(irrigation, index) in arrayIrrigation" :key="index">
            {{ irrigation }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style></style>
