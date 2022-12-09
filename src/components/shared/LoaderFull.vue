<template>
  <div id="loading">
    <img
      id="loading-image"
      src="https://res.cloudinary.com/yeniferramirez11/image/upload/v1644072991/metaltek-web/loading_jrtpiq.gif"
      alt="Loading"
    ><img>
  </div>
</template>

<style scoped>
  #loading {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    /*opacity: 0.1;*/
    background-color: #f1f2f3;
    z-index: 99;
  }

  #loading-image {
    z-index: 100;
  }
</style>