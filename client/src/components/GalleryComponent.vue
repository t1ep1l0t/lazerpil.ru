<template>
  <section class="gallery" v-if="$store.state.gallery.length > 0">
    <div class="container">
      <div class="gallery__inner">
        <div class="gallery__head">
          <h2 class="gallery__title">Галерея</h2>
        </div>
        <div class="gallery__content">
          <router-link to="/gallery" class="gallery__image" v-for="photo of $store.state.gallery" :key="photo._id">
            <img :src="'/static/gallery/' + photo.picture" alt="" class="img">
          </router-link>
        </div>
        <router-link class="gallery__link" to="/gallery">ПОКАЗАТЬ ЕЩЕ</router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "GalleryComponent",
  mounted() {
    this.$store.dispatch('get_gallery')
  }
}
</script>

<style scoped lang="scss">
@import "../assets/variables.scss";
.gallery {
  width: 100%;
  margin-top: 120px;

  @media (max-width: 550px) {
    margin-top: 60px;
  }

  &__inner {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 60px;

    @media (max-width: 550px) {
      gap: 40px;
    }
  }
  &__head  {
    width: fit-content;
    align-self: center;
  }
  &__title {
    font-weight: 600;
    font-size: 28px;
    line-height: 32px;
    text-transform: uppercase;

    @media(max-width: 768px) {
      font-size: 22px;
      line-height: 38px;
    }
  }
  &__content {
    max-width: 620px;
    width: 100%;
    height: fit-content;
    display: flex;
    align-items: start;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
  }
  &__image {
    border-radius: 50px;

    .img {
      max-height: 300px;
      width: auto;
      border-radius: 50px;
    }
  }
  &__link {
    align-self: center;
    background: #FFFFFF;
    border: 1px solid $rose_light;
    border-radius: 53px;
    padding: 16px 32px 14px;
    color: $rose_light;
    font-weight: 700;
    font-size: 14px;
    line-height: 21px;
    text-transform: uppercase;
    transition: all .3s ease;

    &:hover {
      color: #FFFFFF;
      background: $rose_light;
    }
  }
}
</style>