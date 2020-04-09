<template>
  <div class="alert alert-secondary mt-5">
    <h1 class="text-center pt-5">{{$t("home.title")}}</h1>
    <p class="text-center mt-5 pt-5">{{$t("home.content")}}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Home extends Vue {}
</script>
