<script setup>
import SPLoginForm from "../Forms/SPLoginForm.vue";
import { useCounterStore } from "../../stores/modal.store";
import SPText from "../Text/SPText.vue";

const store = useCounterStore();
</script>
<template>
  <div
    class="backdrop fixed inset-0"
    style="background-color: rgba(0, 0, 0, 0.5)"
    @click="store.changeShow(false)"
  ></div>
  <div class="w-11/12 modal sm:w-2/4 fixed top-1/4 left-3.5 sm:left-1/4 z-10">
    <div class="modal-header"></div>
    <div class="modal-body">
      <SPLoginForm class="bg-green-900">
      </SPLoginForm>
    </div>
  </div>
</template>
