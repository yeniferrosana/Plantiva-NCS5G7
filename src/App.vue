<script>
// import { RouterLink, RouterView } from "vue-router";
import NavBarVue from "../src/components/shared/SPNavbar.vue";
import FooterVue from "../src/components/shared/SPFooter.vue";
export default {
  components: {
    NavBarVue,
    FooterVue,
  },
};
</script>
<template>
  <NavBarVue />
  <RouterView class="bg-amber-50" />
  <FooterVue class="fixed w-full bottom-0" />
</template>
