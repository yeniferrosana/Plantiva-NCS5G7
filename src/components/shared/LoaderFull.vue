<template>
  <div id="loading" class="bg-white h-screen w-screen">
    <img
      id="loading-image"
      src="../../assets/loader.gif"
      class="z-100 h-52"
    ><img>
  </div>
</template>

<style scoped>
#loading {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
}
</style>