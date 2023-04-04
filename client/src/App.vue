<template>
  <div id="app">
    <HeaderComponent />
    <MobilMenu />
    <div id="page"><router-view /></div>
  </div>
</template>

<script>

import HeaderComponent from "@/components/HeaderComponent.vue";
import MobilMenu from "@/components/MobilMenu.vue";

export default {
  name: 'App',
  components: {
    MobilMenu,
    HeaderComponent
  }
}
</script>

<style lang="scss">
@import "assets/main.scss";
@import "assets/variables.scss";

.router-link-exact-active {
  color: $rose_light!important;
}
</style>

<style scoped lang="scss">
#page {
  margin-top: 109px;

  @media(max-width: 1199px) {
    margin-top: 88.05px;
  }
  @media(max-width: 768px) {
    margin-top: 67.1px;
  }
}
</style>
