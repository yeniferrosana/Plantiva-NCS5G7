<script>

import NavBarVue from "../src/components/shared/SPNavbar.vue";
import FooterVue from "../src/components/shared/SPFooter.vue";
import LoaderFull from "../src/components/shared/LoaderFull.vue";
export default {
  components: {
    NavBarVue,
    FooterVue,
    LoaderFull,
  },
  data () {
    return {
      fullscreen: true,
    }
  },
  mounted(){
    this.fullscreen = false;
  }
}
</script>
<template>
  <LoaderFull v-show="fullscreen" />
  <NavBarVue class="sticky top-0 z-50" />
  <RouterView class="bg-amber-50" />
  <FooterVue />
</template>
