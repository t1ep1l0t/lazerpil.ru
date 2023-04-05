<template>
  <section class="gallery">
    <div class="container">
      <div class="gallery__inner">
        <div class="gallery__head">
          <h2 class="gallery__title">Галерея</h2>
        </div>
        <div class="gallery__content">
          <router-link to="/gallery" class="gallery__image" v-for="item of 6" :key="item">
            <img src="../assets/static-images/gallery.png" alt="" class="img">
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
    width: 100%;
    height: 744px;
    display: grid;
    grid-template-columns: 49% 23.75% 23.75%;
    grid-column-gap: 1.5%;
    grid-row-gap: 2.65%;
    grid-template-rows: 31.7% 26% 37%;

    @media(max-width: 1024px) {
      height: 600px;
    }
    @media(max-width: 768px) {
      height: auto;
      display: flex;
      align-items: start;
      gap: 20px;
      flex-wrap: wrap;
    }
  }
  &__image {
    border-radius: 50px;
    background-image: url('../assets/static-images/gallery.png');
    background-repeat: no-repeat;
    background-size: cover;

    &:nth-child(1) {
      grid-row-start: 1;
      grid-row-end: 3;
    }
    &:nth-child(2) {
      grid-row-start: 1;
      grid-row-end: 3;
    }
    &:nth-child(6) {
      grid-row-start: 2;
      grid-row-end: 4;
    }

    .img {
      display: none;
      width: 100%;
      height: 100%;
      border-radius: 50px;
    }

    @media(max-width: 768px) {
      width: calc(50% - 10px);
      background-image: none;

      .img {
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 20px;
      }
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