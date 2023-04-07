<template>
  <section class="map" v-if="$store.state.locations">
    <div class="container">
      <div class="map__inner">
        <yandex-map
            :settings="ya_maps_settings"
            :coords="[55.752285, 37.618684]"
            :zoom="10"
            ymap-class="map__box"
            :controls="[]"
            :scroll-zoom="true"
        >
          <ymap-marker
              v-for="marker of $store.state.locations"
              :key="marker._id"
              :coords="marker.coords"
              :marker-id="marker._id"
              :hint-content="marker.address"
              :balloon="{header: marker.metro, body: marker.address}"
              :icon="markerIcon"
          />
        </yandex-map>
      </div>
    </div>
  </section>

</template>

<script>
import {yandexMap, ymapMarker } from 'vue-yandex-maps';
export default {
  name: "MapComponent",
  components: {
    yandexMap,
    ymapMarker
  },
  data () {
    return {
      ya_maps_settings: {
        apiKey: '77dd6bb7-fc4c-47a7-923b-cd8636995f55',
        lang: 'ru_RU',
        coordorder: 'latlong',
        enterprise: false,
        version: '2.1'
      },
      markerIcon: {
        layout: 'default#image',
        imageHref: 'https://i.ibb.co/866QmRN/icon.png',
        imageSize: [38, 38],
        imageOffset: [0, 0],
      },
    }
  },
  mounted () {
    this.$store.dispatch('get_locations');
  }
}
</script>

<style scoped lang="scss">
@import "../assets/variables.scss";
.map {
  width: 100%;
  margin-top: 120px;

  @media (max-width: 550px) {
    margin-top: 60px;
  }

&__inner {
.ymap-container {
  height: 600px;
  @media (max-width: 550px) {
    height: 400px;
  }
  -moz-border-radius: 14px 14px 14px 14px;
  -webkit-border-radius: 14px 14px 14px 14px;
  -khtml-border-radius: 14px 14px 14px 14px;
  border-radius: 14px 14px 14px 14px;
  overflow: hidden;
  position: relative;
  -webkit-mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC);
}
}
&__marker {
   width: 38px;
   height: 38px;
   border-radius: 50%;
   color: #FFFFFF;
   background-color: $rose_light;
 }
}
</style>
<style lang="scss">
.map__box {
  height: 600px;
  border-radius: 30px;

  @media (max-width: 550px) {
    height: 400px;
  }
}
</style>