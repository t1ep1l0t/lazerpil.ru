<template>
  <div id="about">
    <h1>about</h1>
    <FaqComponent />
    <GalleryComponent />
    <LocationsComponent />
    <MapComponent />
  </div>
</template>

<script>
import FaqComponent from "@/components/FaqComponent.vue";
import GalleryComponent from "@/components/GalleryComponent.vue";
import LocationsComponent from "@/components/LocationsComponent.vue";
import MapComponent from "@/components/MapComponent.vue";

export default {
  name: "AboutView",
  components: {MapComponent, LocationsComponent, GalleryComponent, FaqComponent}
}
</script>

<style scoped lang="scss">

</style>