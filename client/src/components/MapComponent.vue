<template>
  <section class="map">
    <div class="container">
      <div class="map__inner">
        <yandex-map
            :settings="ya_maps_settings"
            :coords="[55.752285, 37.618684]"
            :zoom="10"
            ymap-class="map__box"
            :controls="[]"
            :behaviors="[]"
            :scroll-zoom="false"
            :map-events="[]"
        >
          <ymap-marker
              :coords="[55.815934, 37.724068]"
              marker-id="123"
              hint-content="улица Бойцовая, дом 27"
              :balloon="{
                  header: 'Бульвар Рокассовского',
                  body: 'улица Бойцовая, дом 27',
                }"
              :icon="markerIcon"
          />
          <ymap-marker
              :coords="[55.808022, 37.635916]"
              marker-id="123"
              hint-content="улица проспект Мира, 95с1"
              :balloon="{
                  header: 'Метро Алексеевская',
                  body: 'улица проспект Мира, 95с1',
                }"
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
        layout: 'default#imageWithContent',
        imageHref: 'https://i.ibb.co/DgmCpy6/location1.png',
        imageSize: [38, 38],
        imageOffset: [0, 0],

      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/variables.scss";
.map {
  width: 100%;
  margin-top: 120px;

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