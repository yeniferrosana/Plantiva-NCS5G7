<script>
// import { RouterLink, RouterView } from "vue-router";
import { ref, onMounted } from 'vue'
import NavBarVue from "../src/components/shared/SPNavbar.vue";
import FooterVue from "../src/components/shared/SPFooter.vue";
import LoaderFull from "../src/components/shared/LoaderFull.vue";
export default {
  components: {
    NavBarVue,
    FooterVue,
  },
  data () {
    return {
      fullscreen: true,
    }
  },
};

onMounted(() => {
  this.fullscreen = true;
});
</script>
<template>
<LoaderFull
      v-show="fullscreen"
    />
  <NavBarVue />
  <RouterView class="bg-amber-50" />
  <FooterVue class="fixed w-full bottom-0" />
</template>
