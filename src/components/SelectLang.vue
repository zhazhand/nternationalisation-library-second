<template>
  <div>
    <select id="inputLang" class="form-control" @change="changeLanguage($event)">
      <option v-for="item in languages" :key="item">{{ item }}</option>
    </select>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SeclectLang extends Vue {
  private languages = ["en", "ua", "ru"];

  changeLanguage(e: any) {
    this.$i18n.set(e.target.value);
  }
}
</script>