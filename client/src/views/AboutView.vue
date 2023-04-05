<template>
  <div id="about">
    <h1>about</h1>
    <FaqComponent />
    <GalleryComponent />
    <LoactionsComponent />
    <MapComponent />
  </div>
</template>

<script>
import FaqComponent from "@/components/FaqComponent.vue";
import GalleryComponent from "@/components/GalleryComponent.vue";
import LoactionsComponent from "@/components/LoactionsComponent.vue";
import MapComponent from "@/components/MapComponent.vue";

export default {
  name: "AboutView",
  components: {MapComponent, LoactionsComponent, GalleryComponent, FaqComponent}
}
</script>

<style scoped lang="scss">

</style>