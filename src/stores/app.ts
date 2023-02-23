import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useAppStore = defineStore("counter", () => {
  const loader = ref(0);

  return { loader };
});
