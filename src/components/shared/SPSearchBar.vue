<script setup>
const changeInput = (event) => {
  console.log(event.target.value);
};
</script>

<template>
  <input
    v-on:keyup="changeInput"
    class="searchBar mb-2 bg-white text-green-800 w-5/6 rounded-2xl mt-3 h-7 pl-2 text-sm"
    placeholder="Buscar plantas nativas"
    :value="text"
    @input="(event) => (text = event.target.value)"
  />
</template>

<style>
.searchBar::placeholder {
  color: rgb(22 101 52);
}

*:focus {
  outline: none;
}
</style>
