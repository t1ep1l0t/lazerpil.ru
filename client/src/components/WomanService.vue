<template>
  <div id="woman_service">
    <section class="complex" v-if="$store.state.complex.length > 0">
      <div class="complex__inner">
          <div class="complex__head">
            <h2 class="complex__title">
              Комплекс
            </h2>
          </div>
          <div class="complex__content">
            <button class="complex__arrow complex__arrow__prev" @click="complex_slider_prev">
              <svg class="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 6L9 12L15 18" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <VueSlickCarousel class="complex__slider"
                              v-bind="complex_slider_settings"
                              ref="complex_slider"
            >
              <div class="complex__slide"
                   v-for="item of $store.state.complex"
                   :key="item._id"
              >
                <img :src="'/static/complex/' + item.picture" alt="" class="complex__slide__img">
                <h3 class="complex__slide__title">{{ item.name }}</h3>
                <span class="complex__slide__desc">{{ item.desc }}</span>
                <span class="complex__slide__price" v-if="item.price !== 'null'">{{ item.price + ' ₽' }} </span>
              </div>
            </VueSlickCarousel>
            <button class="complex__arrow complex__arrow__next" @click="complex_slider_next">
              <svg class="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
    </section>
    <section class="services">
      <div class="services__inner">
          <div class="services__head">
            <h2 class="services__title">
              Услуги
            </h2>
          </div>
          <div class="services__content">
            <ul class="services__list">
              <li class="services__item"
                  v-for="(item, index) of services"
                  :key="index"
                  @click="choose_service(item)"
              >
                <img :src="item.picture" alt="" class="services__item__img">
                <span class="services__name">{{ item.name }}</span>
                <span class="services__price">{{ item.price }} ₽</span>
              </li>
            </ul>
            <div class="services__preview" v-if="active_item">
              <img :src="active_item.picture" alt="" class="services__img">
              <div class="services__active">
                <span class="services__active__name">{{ active_item.name }}</span>
                <span class="services__active__price">{{ active_item.price }} ₽</span>
              </div>
              <router-link to="/contact-us" class="services__contact">
                записаться на консультацию
              </router-link>
            </div>
          </div>
        </div>
    </section>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

import present_3 from '../assets/woman-sevice/present-3.jpg'
import present_5 from '../assets/woman-sevice/present-5.jpg'
import present_10 from '../assets/woman-sevice/present-10.jpg'
import white_line from '../assets/woman-sevice/белая линия живота.jpg'
import biс_classic from '../assets/woman-sevice/Бикини классика.png'
import bic_total from '../assets/woman-sevice/Бикини тотальное.jpg'
import bedra from '../assets/woman-sevice/Бёдра.png'
import goleny from '../assets/woman-sevice/голени.jpg'
import decolte from '../assets/woman-sevice/Грудь декольте.png'
import zhivot from '../assets/woman-sevice/живот.jpg'
import zone_near_oreol from '../assets/woman-sevice/зона вокруг ореолов.jpg'
import kisty from '../assets/woman-sevice/кисти.jpg'
import coleny from '../assets/woman-sevice/колени .jpg'
import face__all from '../assets/woman-sevice/лицо полностью.jpg'
import foots_all from '../assets/woman-sevice/ноги полностью.jpg'
import nose_pas from '../assets/woman-sevice/носовые пазухи.jpg'
import fing_foot from '../assets/woman-sevice/пальчики на ногах.jpg'
import fing_hand from '../assets/woman-sevice/пальчики на руках.jpg'
import podm_vpad from '../assets/woman-sevice/подмышечные впадины.png'
import podem_foots from '../assets/woman-sevice/подъёмы на ногах.jpg'
import poyas from '../assets/woman-sevice/поясница.jpg'
import hands_half from '../assets/woman-sevice/руки до локтя.png'
import hands_all from '../assets/woman-sevice/руки полностью.png'
import ears from '../assets/woman-sevice/Ушные раковины.jpg'
import ass from '../assets/woman-sevice/ягодицы2.jpg'
export default {
  name: "WomanService",
  components: {
    VueSlickCarousel
  },
  data () {
    return {
      complex_slider_settings: {
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
      services: [
        {
          name: 'Подарочный сертификат',
          price: 3000,
          picture: present_3,
          active: true
        },
        {
          name: 'Подарочный сертификат',
          price: 5000,
          picture: present_5,
          active: false
        },
        {
          name: 'Подарочный сертификат',
          price: 10000,
          picture: present_10,
          active: false
        },
        {
          name: 'Белая линия живота',
          price: 500,
          picture: white_line,
          active: false
        },
        {
          name: 'Бикини классика',
          price: 1400,
          picture: biс_classic,
          active: false
        },
        {
          name: 'Бикини тотальное',
          price: 2000,
          picture: bic_total,
          active: false
        },
        {
          name: 'Бёдра',
          price: 1700,
          picture: bedra,
          active: false
        },
        {
          name: 'Голени',
          price: 1500,
          picture: goleny,
          active: false
        },
        {
          name: 'Грудь декольте',
          price: 900,
          picture: decolte,
          active: false
        },
        {
          name: 'Живот',
          price: 1100,
          picture: zhivot,
          active: false
        },
        {
          name: 'Зона вокруг ореолов',
          price: 500,
          picture: zone_near_oreol,
          active: false
        },
        {
          name: 'Кисти',
          price: 500,
          picture: kisty,
          active: false
        },
        {
          name: 'Колени',
          price: 500,
          picture: coleny,
          active: false
        },
        {
          name: 'Лицо полностью',
          price: 2000,
          picture: face__all,
          active: false
        },
        {
          name: 'Лицо 1 зона',
          price: 500,
          picture: face__all,
          active: false
        },
        {
          name: 'Ноги полностью',
          price: 2300,
          picture: foots_all,
          active: false
        },
        {
          name: 'Носовые пазухи',
          price: 1000,
          picture: nose_pas,
          active: false
        },
        {
          name: 'Пальчики на ногах',
          price: 300,
          picture: fing_foot,
          active: false
        },
        {
          name: 'Пальчики на руках',
          price: 300,
          picture: fing_hand,
          active: false
        },
        {
          name: 'Подмышечные впадины',
          price: 1000,
          picture: podm_vpad,
          active: false
        },
        {
          name: 'Подъёмы на ногах',
          price: 800,
          picture: podem_foots,
          active: false
        },
        {
          name: 'Поясница',
          price: 900,
          picture: poyas,
          active: false
        },
        {
          name: 'Руки до локтя',
          price: 1200,
          picture: hands_half,
          active: false
        },
        {
          name: 'Руки полностью',
          price: 1700,
          picture: hands_all,
          active: false
        },
        {
          name: 'Ушные раковины',
          price: 1000,
          picture: ears,
          active: false
        },
        {
          name: 'Ягодицы',
          price: 1200,
          picture: ass,
          active: false
        },
      ],
      active_item: undefined,
    }
  },
  methods: {
    complex_slider_prev () {
      this.$refs.complex_slider.prev()
    },
    complex_slider_next () {
      this.$refs.complex_slider.next()
    },
    choose_service (item) {
      this.services.forEach(service => {
        service.active = false;
      });

      item.active = true;

      this.get_item_active();
    },
    get_item_active () {
      const get = () => {
        let active;
        this.services.forEach(service => {
          if(service.active) {
            return active = service;
          }
        });
        return active
      };
      this.active_item = get();
    }
  },
  mounted() {
    this.get_item_active();
    this.$store.dispatch('get_complex');
  }
}
</script>

<style scoped lang="scss">
@import '../assets/variables.scss';

.complex {
  width: 100%;

  &__inner {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 32px;
  }
  &__head {
    width: 100%;
    border-bottom: 1px solid $rose_light;
  }
  &__title {
    font-weight: 700;
    font-size: 16px;
    line-height: 130%;
    text-transform: uppercase;
    color: $rose_light;
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
    display: none;
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

    @media(max-width: 980px) {
      display: flex;
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
.services {
  width: 100%;
  margin-top: 60px;

  @media (max-width: 550px) {
    margin-top: 40px;
  }

  &__inner {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 32px;
  }
  &__head {
    width: 100%;
    border-bottom: 1px solid $rose_light;
  }
  &__title {
    font-weight: 700;
    font-size: 16px;
    line-height: 130%;
    text-transform: uppercase;
    color: $rose_light;
  }
  &__content {
    width: 100%;
    display: flex;
    align-items: start;
    gap: 20px;

    @media (max-width: 880px) {
      flex-direction: column;
    }
  }
  &__list {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;

    @media (max-width: 880px) {
      flex-direction: row;
      column-gap: 20px;
      row-gap: 32px;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
  &__item {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    padding: 10px 24.5px 8px;
    background-color: #FFFFFF;
    transition: all .3s ease;
    border-radius: 10px;

    &:hover {
      background-color: #FAFAFA;
    }
    &__img {
      display: none;

      @media (max-width: 880px) {
        display: block;
        width: 100%;
        height: auto;
        border-radius: 20px;
      }
    }

    @media (max-width: 880px) {
      width: 100%;
      max-width: 160px;
      flex-direction: column;
      align-items: start;
      gap: 16px;
      padding: 0;
    }
    @media (max-width: 380px) {
      max-width: 140px;
    }
    @media (max-width: 340px) {
      max-width: 130px;
    }
  }
  &__name, &__price {
    font-weight: 700;
    font-size: 16px;
    line-height: 130%;
    text-transform: uppercase;
    @media (max-width: 550px) {
      font-size: 14px;
    }
  }
  &__preview {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 10px;
  }
  &__img {
    width: 100%;
    height: auto;
    border-radius: 30px;

    @media (max-width: 880px) {
      display: none;
    }
  }
  &__active {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: $rose_light;
    border-radius: 20px;

    @media (max-width: 880px) {
      display: none;
    }

    &__name, &__price {
      font-weight: 700;
      font-size: 18px;
      line-height: 130%;
      text-transform: uppercase;
      color: #FFFFFF;
      padding: 10px 24.5px;
    }
  }
  &__contact {
    background-color: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(1.09091px);
    width: 160px;
    height: 160px;
    margin-top: 10px;
    border-radius: 50%;
    border: 1px solid $rose_light;
    display: flex;
    align-items: center;
    text-align: center;
    transition: all .3s ease;
    color: $rose_light;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    text-transform: uppercase;
    align-self: center;

    &:hover {
      background-color: $rose_light;
      color: #FFFFFF;
    }

    @media (max-width: 550px) {
      width: 120px;
      height: 120px;
      font-size: 10px;
      line-height: 16px;
    }
  }
}
</style>