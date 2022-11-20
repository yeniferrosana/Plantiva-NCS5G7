import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    show: false,
  }),
  actions: {
    changeShow(value){
      this.show = value;
    }
  }
});
