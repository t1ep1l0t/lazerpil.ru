<template>
  <div id="home">
    <section class="top">
      <div class="container">
        <div class="top__inner">
          <h1 class="top__title">
            Студия лазерной эпиляции
            <span>Moscow Lazerpil</span>
          </h1>
          <p class="top__desc">
            По окончанию курса процедур выдаем Сертификат сроком 12 месяцев. Гарантируем бесплатное обслуживание в случае если результат не достигнут
          </p>
          <router-link class="top__button" to="/contact-us">записаться на <br> консультацию</router-link>
        </div>
        <div class="top__links">
          <router-link to="/services"
                       class="top__card top__card__woman"
          >
            <h2 class="top__card__title">Эпиляция</h2>
            <span class="top__card__name" @click="$store.commit('switch_to_woman')">Женская</span>
          </router-link>
          <router-link to="/services"
                       class="top__card top__card__man"
                       @click.native="$store.commit('switch_to_man')"
          >
            <h2 class="top__card__title">Эпиляция</h2>
            <span class="top__card__name" @click="$store.commit('switch_to_man')">Мужская</span>
          </router-link>
        </div>
      </div>
    </section>
    <section class="popular" v-if="$store.state.populars">
      <div class="container">
        <div class="popular__inner">
          <div class="popular__head">
            <h2 class="popular__title">ПОПУЛЯРНЫЕ УСЛУГИ</h2>
          </div>
          <div class="popular__content">
            <button class="popular__arrow popular__arrow__prev" @click="popular_slider_prev">
              <svg class="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 6L9 12L15 18" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <VueSlickCarousel class="popular__slider"
                              v-bind="popular_slider_settings"
                              ref="popular_slider"
            >
              <div class="popular__slide"
                   v-for="item of $store.state.populars"
                   :key="item._id"
              >
                <img :src="'http://localhost:5000/pictures/popular/' + item.picture" alt="" class="popular__slide__img">
                <h3 class="popular__slide__title">{{ item.name }}</h3>
                <span class="popular__slide__desc">{{ item.desc }}</span>
                <span class="popular__slide__price" v-if="item.price !== 'null'">{{ item.price + ' ₽' }}</span>
              </div>
            </VueSlickCarousel>
            <button class="popular__arrow popular__arrow__next" @click="popular_slider_next">
              <svg class="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
    <section class="about">
      <div class="container">
        <div class="about__inner">
          <div class="about__head">
            <h2 class="about__title">О СТУДИИ</h2>
          </div>
          <div class="about__content">
            <div class="about__image">
              <img src="../assets/static-images/home_about-1.png" alt="" class="img">
            </div>
            <div class="about__info">
              <img src="../assets/static-images/home_about-2.png" alt="" class="img">
              <p class="about__desc">
                Предлагаем вам сделать шаг
                в будущее, к использованию новых современных технологий
              </p>
              <router-link to="/about-us" class="about__link">подробнее</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <FaqComponent />
    <GalleryComponent />
    <LocationsComponent />
    <MapComponent />
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import MapComponent from "@/components/MapComponent.vue";
import LocationsComponent from "@/components/LocationsComponent.vue";
import GalleryComponent from "@/components/GalleryComponent.vue";
import FaqComponent from "@/components/FaqComponent.vue";
export default {
  name: "HomeView",
  components: {
    FaqComponent,
    GalleryComponent,
    LocationsComponent,
    MapComponent,
    VueSlickCarousel
  },
  data () {
    return {
      popular_slider_settings: {
        arrows: false,
        autoplay: true,
        autoplaySpeed: 6000,
        slidesToScroll: 1,
        slidesToShow: 4,
        swipeToSlide: true,
        infinite: true,
        responsive: [
          {
            breakpoint: 980,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 720,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 375,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      },
    }
  },
  methods: {
    popular_slider_prev () {
      this.$refs.popular_slider.prev()
    },
    popular_slider_next () {
      this.$refs.popular_slider.next()
    },
  },
  mounted () {
    this.$store.dispatch('get_popular');
  }
}
</script>

<style scoped lang="scss">
@import "../assets/variables.scss";

.top {
  width: 100%;

  &__inner {
    width: 100%;
    height: 600px;
    position: relative;
    padding: 40px 0;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 30px;
    background-image: url('../assets/static-images/top_image.png');
    background-repeat: no-repeat;
    background-position: 100% 0%;
    background-size: contain;

    @media(max-width: 640px) {
      background-position: 100% 100%;
      height: 716px;
    }
  }
  &__title {
    font-weight: 400;
    font-size: 34px;
    line-height: 50px;

    span {
      color: $rose_light;
      display: block;
    }

    @media(max-width: 1199px) {
      font-size: 28px;
      line-height: 44px;
    }
  }
  &__desc {
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    max-width: 428px;
    color: rgba(10, 10, 10, 0.78);
  }
  &__image {
    width: 100%;
  }
  &__img {
    width: 100%;
    height: auto;
  }
  &__button {
    position: absolute;
    bottom: 80px;
    left: calc(50% - 80px);
    background: transparent;
    backdrop-filter: blur(1.09091px);
    border-radius: 50%;
    width: 160px;
    height: 160px;
    border: 1px solid $rose_light;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    color: $rose_light;
    transition: all .3s ease;
    text-transform: uppercase;

    &:hover {
      color: #FFFFFF;
      background: $rose_light;
    }

    @media(max-width: 550px) {
      //bottom: 50px;
      width: 120px;
      height: 120px;
      left: calc(50% - 60px);
      font-size: 10px;
      line-height: 16px;
    }
  }
  &__links {
    margin-top: 5px;
    width: 100%;
    display: flex;
    align-items: start;

    @media(max-width: 550px) {
      flex-direction: column;
    }
  }
  &__card {
    width: 100%;
    height: calc(600px - 274px);
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: calc(40%);
    padding: 40px 30px;
    transition: background-color .3s ease;

    @media(max-width: 768px) {
      gap: 30%;
      height: 226px;
    }

    @media(max-width: 550px) {
      gap: 20%;
      height: 150px;
    }

    &__woman {
      background-color: $rose_light;

      &:hover {
        background-color: $rose_dark;
      }

      .top__card__title {
        font-weight: 700;
        font-size: 20px;
        line-height: 20px;
        color: #FFFFFF;
        text-transform: uppercase;
      }
      .top__card__name {
        font-weight: 400;
        font-size: 28px;
        line-height: 60px;
        color: #FFFFFF;
        letter-spacing: -1px;
        text-decoration-line: underline;
        text-transform: uppercase;
        align-self: center;
      }
    }
    &__man {
      background-color: #FAFAFA;

      &:hover {
        background-color: #F0F0F0;
      }

      .top__card__title {
        font-weight: 700;
        font-size: 20px;
        line-height: 20px;
        text-transform: uppercase;
      }
      .top__card__name {
        font-weight: 400;
        font-size: 28px;
        line-height: 60px;
        letter-spacing: -1px;
        text-decoration-line: underline;
        text-transform: uppercase;
        align-self: center;
      }
    }
  }
}
.popular {
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
    position: relative;
  }
  &__slider {
    width: 100%;
  }
  &__arrow {
    position: absolute;
    top: 119px;
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
      left: -18px;

      &:hover {
        .icon {
          stroke: $rose_light;
        }
      }
    }
    &__next {
      right: -18px;

      &:hover {
        .icon {
          stroke: $rose_light;
        }
      }
    }
  }
  &__slide {
    height: 460px;
    padding: 0 10px;
    display: flex!important;
    flex-direction: column;
    align-items: start;
    gap: 16px;

    @media(max-width: 500px) {
      height: fit-content;
      padding: 0 2px;
    }

    &__img {
      width: 100%;
      height: auto;
      margin-bottom: 14px;
      border-radius: 30px;
    }
    &__title {
      font-weight: 700;
      font-size: 18px;
      line-height: 130%;
      text-transform: uppercase;
      color: $rose_light;
    }
    &__desc {
      font-weight: 500;
      font-size: 14px;
      line-height: 130%;
    }
    &__price {
      font-weight: 700;
      font-size: 20px;
      line-height: 130%;
    }
  }
}
.about {
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
    gap: 20px;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
  &__image {
    width: 100%;

    .img {
      width: 100%;
      height: auto;
      border-radius: 30px;
    }
  }
  &__info {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 46px;

    .img {
      width: 100%;
      height: auto;
      border-radius: 30px;
    }

    @media (max-width: 1199px) {
      gap: 30px;
    }
  }
  &__desc {
    width: 100%;
    font-weight: 400;
    font-size: 32px;
    line-height: 44px;
    max-width: 563px;

    @media (max-width: 1199px) {
      max-width: none;
    }
    @media (max-width: 1024px) {
      font-size: 24px;
      line-height: 36px;
    }
  }
  &__link {
    display: block;
    width: 100%;
    background-color: #FFFFFF;
    border: 1px solid $rose_light;
    border-radius: 53px;
    padding: 16px 0;
    text-align: center;
    transition: all .3s ease;
    font-weight: 700;
    font-size: 14px;
    line-height: 21px;
    text-transform: uppercase;
    color: $rose_light;

    &:hover {
      background-color: $rose_light;
      color: #FFFFFF;
    }
  }
}
</style>
