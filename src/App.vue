<template>
  <div id="app">
    <nav class="navbar navbar-dark bg-primary">
      <div id="nav">
        <router-link to="/">{{$t("nav.home")}}</router-link>
        <router-link to="/first">{{$t("nav.first")}}</router-link>
        <router-link to="/second">{{$t("nav.second")}}</router-link>
      </div>
      <div class="form-group row pr-2">
        <label class="pr-2 pt-2">{{$t("nav.language")}}</label>
        <select-language></select-language>
      </div>
    </nav>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SelectLang from "@/components/SelectLang.vue";

@Component({
  components: {
    selectLanguage: SelectLang
  }
})
export default class App extends Vue {}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    padding: 0 10px;

    &.router-link-exact-active {
      color: #b99342;
    }
  }
}
</style>
