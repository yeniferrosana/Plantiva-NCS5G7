<script setup>
import SPText from "../Text/SPText.vue";
import {useCounterStore} from "../../stores/modal.store";

const store = useCounterStore();

</script>
<template>
  <div
    class="flex flex-col justify-between border rounded-md border-slate-600 cursor-pointer"
    @click="store.changeShow(true)"
  >
    <div class="card-media">
      <img
        class="block w-full"
        src="https://picsum.photos/id/237/300/300"
        alt=""
      />
    </div>
    <div class="card-body p-3">
      <SPText tag="h1" class="font-bold">Nombre de prueba</SPText>
      <SPText class="font-light">Nombre cientifico</SPText>
      <SPText tag="p"
        >Lorem, ipsum dolor sit amet consectetur adipisicing elit. A quae fugiat
        ducimus dignissimos! Culpa, commodi amet a voluptate quaerat animi illum
        nostrum recusandae! Aspernatur soluta corrupti ea sequi fugit
        placeat?</SPText
      >
    </div>
  </div>
</template>
