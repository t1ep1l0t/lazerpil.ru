<template>
  <section class="gallery">
    <div class="container">
      <div class="gallery__inner">
        <div class="gallery__head">
          <h2 class="gallery__title">Галерея</h2>
        </div>
        <div class="gallery__content">
          <router-link to="/gallery" class="gallery__image" v-for="item of 6" :key="item"></router-link>
        </div>
        <div class="gallery__slider">
          <button class="gallery__arrow gallery__arrow__prev"
                  @click="gallery_slider_prev"
          >
            <svg class="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 6L9 12L15 18" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <VueSlickCarousel v-bind="gallery_slider_settings" ref="gallery_slider">
            <router-link to="/gallery" class="gallery__slide" style="height: 450px!important; width: 100%;" v-for="item of 6" :key="item"></router-link>
          </VueSlickCarousel>
          <button class="gallery__arrow gallery__arrow__next"
                  @click="gallery_slider_next"
          >
            <svg class="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
        <router-link class="gallery__link" to="/gallery">ПОКАЗАТЬ ЕЩЕ</router-link>
      </div>
    </div>
  </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  name: "GalleryComponent",
  components: {
    VueSlickCarousel
  },
  data () {
    return {
      gallery_slider_settings: {
        arrows: false,
        autoplay: true,
        autoplaySpeed: 6000,
        slidesToScroll: 1,
        slidesToShow: 1,
        swipeToSlide: true,
        infinite: true
      },
    }
  },
  methods: {
    gallery_slider_prev () {
      this.$refs.gallery_slider.prev();
    },
    gallery_slider_next () {
      this.$refs.gallery_slider.next();
    },
  }
}
</script>

<style scoped lang="scss">
@import "../assets/variables.scss";
.gallery {
  width: 100%;
  margin-top: 120px;

  &__inner {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 60px;
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
      display: none;
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
  &__slider {
    display: none;
    width: 100%;
    position: relative;
    @media(max-width: 768px) {
      display: block;
    }
  }
  &__arrow {
    position: absolute;
    top: 45%;
    background: #FFFFFF;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    .icon {
      transition: all .3s ease;
    }
    &__prev {
      left: 20px;

      &:hover {
        .icon {
          stroke: $rose_light;
        }
      }
    }
    &__next {
      right: 20px;

      &:hover {
        .icon {
          stroke: $rose_light;
        }
      }
    }
  }
  &__slide {
    height: 450px;
    border-radius: 50px;
    background-image: url('../assets/static-images/gallery.png');
    background-repeat: no-repeat;
    background-size: cover;

    @media (max-width: 550px) {
      height: 250px;
    }
  }
}
</style>