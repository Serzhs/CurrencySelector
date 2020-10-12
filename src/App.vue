<template>
  <div id="app">
    <CurrencySelector />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import CurrencySelector from "./components/CurrencySelector/CurrencySelector.vue";

export default Vue.extend({
  name: "App",
  components: {
    CurrencySelector
  }
});
</script>
<style>
* {
  box-sizing: border-box;
}

html,
body {
  height: 100%;
  width: 100%;
  font-size: 16px;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Arial, sans-serif;
}
</style>
