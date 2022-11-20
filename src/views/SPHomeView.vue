<script setup>
import SPCard from "../components/Card/SPCard.vue";
import SPModal from "../components/Modal/SPModal.vue";
import {useCounterStore} from "../stores/modal.store";

const store = useCounterStore();
</script>

<template>
  <main>
    <section
      class="section-plants grid gap-8"
      style="grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))"
    >
      <SPCard v-for="n in 10" :key="n" />
    </section>
    <Teleport to="body" v-if="store.show">
      <SPModal />
    </Teleport>
  </main>
</template>
