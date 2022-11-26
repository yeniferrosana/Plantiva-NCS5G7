<script setup>
import SPText from "../Text/SPText.vue";
import { useCounterStore } from "../../stores/modal.store";
import SPCardOptions from "./CardOptions/SPCardOptions.vue";
const store = useCounterStore();
</script>
<template>
  <div
    class="card-wrapper flex flex-col justify-between outline outline-1 rounded-lg outline-slate-600 cursor-pointer hover:shadow-slate-700 hover:shadow hover:outline-none transition duration-700 ease-linear"
    @click="store.changeShow(true)"
  >
    <div class="card-media relative">
      <img
        class="block w-full"
        src="https://picsum.photos/id/237/300/300"
        alt=""
      />
      <SPCardOptions
        class="card-options absolute right-4 top-4 opacity-0 transition duration-700"
      />
    </div>
    <div class="card-body p-3">
      <SPText tag="h1" class="font-bold">Nombre de prueba</SPText>
      <SPText class="font-light">Nombre cientifico</SPText>
      <SPText tag="p" class="mt-2"
        >Lorem, ipsum dolor sit amet consectetur adipisicing elit. A quae fugiat
        ducimus dignissimos! Culpa, commodi amet a voluptate quaerat animi illum
        nostrum recusandae! Aspernatur soluta corrupti ea sequi fugit
        placeat?</SPText
      >
    </div>
  </div>
</template>
<style scoped>
.card-media:hover > .card-options {
  transition: all 700ms;
  opacity: 1;
}
</style>
