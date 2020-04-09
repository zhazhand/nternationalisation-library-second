<template>
  <div>
    <div class="alert alert-danger mt-5">
      <h1 class="text-center pt-5">{{$t("second.title")}}</h1>
      <p class="text-center mt-5 pt-5">{{$t("second.content")}}</p>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Second extends Vue {}
</script>