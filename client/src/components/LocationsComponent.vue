<template>
  <section class="location" v-if="$store.state.locations.length > 0">
    <div class="container">
      <div class="location__inner">
        <div class="location__head">
          <h2 class="location__title">Наши локации</h2>
        </div>
        <div class="location__content">
          <div class="location__item"
               v-for="(location, index) of $store.state.locations"
               :key="index"
          >
            <button class="location__arrow location__arrow__prev"
                    @click="loaction_slider1_prev"
                    v-if="index === 0"
            >
              <svg class="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 6L9 12L15 18" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <button class="location__arrow location__arrow__prev"
                    @click="loaction_slider2_prev"
                    v-if="index === 1"
            >
              <svg class="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 6L9 12L15 18" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <VueSlickCarousel class="location__slider"
                              :ref="'location_slider_' + index"
                              v-bind="locations_slider_settings"
            >
              <div class="location__slide"
                   v-for="(img, index) of location.interior"
                   :key="index"
              >
                <img class="img" :src="'/static/interior/' + img" alt="">
              </div>
            </VueSlickCarousel>
            <button class="location__arrow location__arrow__next"
                    @click="loaction_slider1_next"
                    v-if="index === 0"
            >
              <svg class="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <button class="location__arrow location__arrow__next"
                    @click="loaction_slider2_next"
                    v-if="index === 1"
            >
              <svg class="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <span class="location__metro"
                  :style="{color: location.color}"
            >
                <svg width="35" height="24" viewBox="0 0 35 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M32.592 20.6473L24.416 0L17.5 12.0698L10.612 0L2.408 20.6473H0V23.7765H12.376V20.6473H10.528L12.32 15.5064L17.5 24L22.68 15.5064L24.472 20.6473H22.624V23.7765H35V20.6473H32.592Z" :fill="location.color"/>
                </svg>
                {{ location.metro }}
              </span>
            <span class="location__address">{{ location.address }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  name: "LoactionsComponent",
  components: {
    VueSlickCarousel
  },
  data () {
    return {
      locations_slider_settings: {
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
    loaction_slider1_prev () {
      this.$refs.location_slider_0[0].prev()
    },
    loaction_slider1_next () {
      this.$refs.location_slider_0[0].next();
    },
    loaction_slider2_prev () {
      this.$refs.location_slider_1[0].prev()
    },
    loaction_slider2_next () {
      this.$refs.location_slider_1[0].next();
    }
  },
  mounted() {
    this.$store.dispatch('get_locations');
  }
}
</script>

<style scoped lang="scss">
@import "../assets/variables.scss";
.location {
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
    display: flex;
    align-items: start;
    justify-content: center;
    flex-wrap: wrap;
    column-gap: 20px;
    row-gap: 40px;
  }
  &__item {
    width: 100%;
    max-width: 590px;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 10px;
    position: relative;
    padding-bottom: 30px;
    background-color: #FAFAFA;
    border-radius: 0 0 30px 30px;
  }
  &__arrow {
    position: absolute;
    top: 25%;
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
      left: 18px;

      &:hover {
        .icon {
          stroke: $rose_light;
        }
      }
    }
    &__next {
      right: 18px;

      &:hover {
        .icon {
          stroke: $rose_light;
        }
      }
    }
  }
  &__slider {
    width: 100%;
    margin-bottom: 30px;
  }
  &__slide {
    height: auto;
    width: 100%;
    border-radius: 30px;
    background-color: #FAFAFA;
    display: flex!important;
    align-items: center;
    justify-content: center;

    .img {
      max-width: 100%;
      height: auto;
      width: auto;
      max-height: 350px;
      border-radius: 30px;
    }
  }
  &__metro {
    display: flex;
    align-items: start;
    gap: 10px;
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    padding-left: 20px;
  }
  &__address {
    font-weight: 700;
    font-size: 16px;
    line-height: 160%;
    padding-left: 20px;
  }
}
</style>