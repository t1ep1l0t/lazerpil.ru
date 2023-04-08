<template>
  <div id="galley">
    <section class="gallery">
      <div class="container">
        <div class="gallery__inner">
          <div class="gallery__head">
            <h1 class="gallery__title">ГАЛЕРЕЯ</h1>
            <h2 class="gallery__subtitle">Выберете нужную локацию</h2>
          </div>
          <div class="gallery__content" v-if="$store.state.locations">
            <router-link class="gallery__location"
                         :to="`/gallery/${location._id}`"
                         v-for="location of $store.state.locations"
                         :key="location._id"
            >
              <img :src="`http://localhost:5000/pictures/interior/${location.interior[0]}`" alt="" class="gallery__location__img">
              <div class="gallery__location__content">
            <span class="metro">
              <svg width="35" height="24" viewBox="0 0 35 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M32.592 20.6473L24.416 0L17.5 12.0698L10.612 0L2.408 20.6473H0V23.7765H12.376V20.6473H10.528L12.32 15.5064L17.5 24L22.68 15.5064L24.472 20.6473H22.624V23.7765H35V20.6473H32.592Z" :fill="location.color"/>
              </svg>
              <span :style="{color: location.color}">
                {{ location.metro }}
              </span>
            </span>
                <span class="address">{{ location.address }}</span>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "GalleryView",
  mounted() {
    this.$store.dispatch('get_locations');
  }
}
</script>

<style scoped lang="scss">
@import "../assets/variables.scss";

.gallery {
  width: 100%;
  padding-top: 100px;

  &__inner {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 60px;
  }
  &__head {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 60px;
  }
  &__title {
    font-weight: 600;
    font-size: 32px;
    line-height: 32px;
    text-transform: uppercase;
  }
  &__subtitle {
    font-weight: 600;
    font-size: 20px;
    line-height: 150%;
    text-transform: uppercase;
    text-align: center;
  }
  &__content {
    width: 100%;
    display: flex;
    align-items: start;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
  }
  &__location {
    max-width: 590px;
    border-radius: 30px;
    background-color: #FAFAFA;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 20px;

    &__img {
      width: 100%;
      height: auto;
      border-radius: 30px;
    }
    &__content {
      padding: 0 30px 30px;
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 10px;

      .metro {
        display: flex;
        align-items: end;
        gap: 10px;
        font-weight: 600;
        font-size: 20px;
        line-height: 20px;
      }
      .address {
        font-weight: 700;
        font-size: 16px;
        line-height: 160%;
      }
    }
  }
}
</style>