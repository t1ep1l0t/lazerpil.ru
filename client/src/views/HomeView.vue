<template>
  <div class="home">
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
          <router-link to="/services" class="top__card top__card__woman">
            <h2 class="top__card__title">Эпиляция</h2>
            <span class="top__card__name">Женская</span>
          </router-link>
          <router-link to="/services" class="top__card top__card__man">
            <h2 class="top__card__title">Эпиляция</h2>
            <span class="top__card__name">Мужская</span>
          </router-link>
        </div>
      </div>
    </section>

    <section class="popular">
      <div class="container">
        <div class="popular__inner">
          <div class="popular__head">
            <h2 class="popular__title">ПОПУЛЯРНЫЕ УСЛУГИ</h2>
          </div>
          <div class="popular__content">
            <VueSlickCarousel class="popular__slider"
                              v-if="$store.state.popular"
                              v-bind="slider_settings"
            >
              <div class="popular__slide"
                   v-for="item of $store.state.popular"
                   :key="item._id"
              >
                    <img :src="'/popular_images/' + item.picture" alt="" class="popular__slide__img">
<!--                <img src="../../dist/popular_images/5ea4d8f6-83f5-40c1-a1be-a4385c735806.jpg" alt="" class="popular__slide__img">-->
                <h3 class="popular__slide__title">{{ item.name }}</h3>
                <span class="popular__slide__desc">{{ item.desc }}</span>
                <span class="popular__slide__price">{{ item.price }} ₽</span>
              </div>
            </VueSlickCarousel>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  name: "HomeView",
  components: {
    VueSlickCarousel
  },
  data () {
    return {
      slider_settings: {
        arrows: true,
        autoplay: true,
        autoplaySpeed: 6000,
        slidesToScroll: 1,
        slidesToShow: 4,
        swipeToSlide: true
      }
    }
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
      background-image: none;
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

    &:hover {
      color: #FFFFFF;
      background: $rose_light;
    }

    @media(max-width: 550px) {
      //bottom: 50px;
      width: 120px;
      height: 120px;
      left: calc(50% - 60px);
      font-size: 12px;
      line-height: 18px;
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
  }
  &__content {
    width: 100%;
  }
  &__slider {
    width: 100%;
  }
  &__slide {
    max-width: 285px;
    height: 460px;
    margin: 0 10px;
    display: flex!important;
    flex-direction: column;
    align-items: start;
    gap: 16px;

    &__img {
      width: 100%;
      height: auto;
      margin-bottom: 14px;
    }
    &__name {
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
</style>