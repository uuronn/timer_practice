<template>
  <main class="main">
    <h1>Hello, Nuxt template!!!</h1>
    <p>by {{ companyName }}</p>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref } from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {
    const companyName = ref<string>("Hack'z inc.");

    return { companyName };
  }
});
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}
</style>
