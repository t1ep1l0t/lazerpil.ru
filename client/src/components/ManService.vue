<template>
<div id="man_service">
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
import kontyr_borody from '../assets/man-service/Контур бороды.png';
import zone_mez_brovy from '../assets/man-service/Зона между бровей.jpg';
import sheky from '../assets/man-service/Щёки.png';
import yshi_rak from '../assets/man-service/Ушные раковины.png';
import nose_paz from '../assets/man-service/Носовые пазухи.png';
import zone_sheya_pered from '../assets/man-service/зона шеи спереди.png';
import plechy from '../assets/man-service/плечи.jpg';
import kisty from '../assets/man-service/Кисти.jpg';
import fing_hand from '../assets/man-service/Пальцы рук.jpg';
import hands_all from '../assets/man-service/руки.jpg';
import hands_half from '../assets/man-service/Руки до локтя.jpg';
import podmyshky from '../assets/man-service/подмышечные впадины.png';
import grudy from '../assets/man-service/Грудь.jpg';
import oreols from '../assets/man-service/ореолы.png';
import white_line from '../assets/man-service/Белая линия живота.jpg';
import zivot from '../assets/man-service/живот.jpg';
import bedra from '../assets/man-service/бедра.png';
import koleny from '../assets/man-service/колени.png';
import goleny_and_coleny from '../assets/man-service/голени  включая колени.png';
import podyem_foots from '../assets/man-service/подъёмы на ногах.jpg';
import fing_foots from '../assets/man-service/пальцы ног.png';
import foots_all from '../assets/man-service/ноги полностью.jpg';
import dheya_back from '../assets/man-service/шея сзади.png';
import vorotnyk_back from '../assets/man-service/воротниковая зона сзади.png';
import spina_all from '../assets/man-service/спина полностью.jpg';
import krest_obl from '../assets/man-service/крестцовая область.png';
import poyas from '../assets/man-service/поясница.jpg';
export default {
  name: "ManService",
  data () {
    return {
      services: [
        {
          name: 'Контур бороды',
          price: 2400,
          picture: kontyr_borody,
          active: true
        },
        {
          name: 'Зона между бровями',
          price: 500,
          picture: zone_mez_brovy,
          active: false
        },
        {
          name: 'Щёки',
          price: 800,
          picture: sheky,
          active: false
        },
        {
          name: 'Ушные раковины',
          price: 1000,
          picture: yshi_rak,
          active: false
        },
        {
          name: 'Носовые пазухи',
          price: 1000,
          picture: nose_paz,
          active: false
        },
        {
          name: 'Шея спереди',
          price: 800,
          picture: zone_sheya_pered,
          active: false
        },
        {
          name: 'Плечи',
          price: 1000,
          picture: plechy,
          active: false
        },
        {
          name: 'Кисти',
          price: 800,
          picture: kisty,
          active: false
        },
        {
          name: 'Пальцы на руках',
          price: 400,
          picture: fing_hand,
          active: false
        },
        {
          name: 'Руки полностью',
          price: 2300,
          picture: hands_all,
          active: false
        },
        {
          name: 'Руки до локтя',
          price: 1900,
          picture: hands_half,
          active: false
        },
        {
          name: 'Подмышечные впадины',
          price: 800,
          picture: podmyshky,
          active: false
        },
        {
          name: 'Грудь',
          price: 1200,
          picture: grudy,
          active: false
        },
        {
          name: 'Ореолы',
          price: 400,
          picture: oreols,
          active: false
        },
        {
          name: 'Белая линия живота',
          price: 800,
          picture: white_line,
          active: false
        },
        {
          name: 'Живот',
          price: 1600,
          picture: zivot,
          active: false
        },
        {
          name: 'Бёдра',
          price: 2000,
          picture: bedra,
          active: false
        },
        {
          name: 'Колени',
          price: 400,
          picture: koleny,
          active: false
        },
        {
          name: 'Голени включая колени',
          price: 2000,
          picture: goleny_and_coleny,
          active: false
        },
        {
          name: 'Подъёмы ног',
          price: 800,
          picture: podyem_foots,
          active: false
        },
        {
          name: 'Пальцы ног',
          price: 400,
          picture: fing_foots,
          active: false
        },
        {
          name: 'Ноги полностью',
          price: 3000,
          picture: foots_all,
          active: false
        },
        {
          name: 'Шея сзади',
          price: 800,
          picture: dheya_back,
          active: false
        },
        {
          name: 'Вротниковая зона сзади',
          price: 1800,
          picture: vorotnyk_back,
          active: false
        },
        {
          name: 'Спина полностью',
          price: 3600,
          picture: spina_all,
          active: false
        },
        {
          name: 'Крестцовая часть',
          price: 800,
          picture: krest_obl,
          active: false
        },
        {
          name: 'Поясничная область',
          price: 1200,
          picture: poyas,
          active: false
        },

      ],
      active_item: undefined,
    }
  },
  methods: {
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
  }
}
</script>

<style scoped lang="scss">
@import '../assets/variables.scss';

.services {
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
    border-bottom: 1px solid $blue;
  }
  &__title {
    font-weight: 700;
    font-size: 16px;
    line-height: 130%;
    text-transform: uppercase;
    color: $blue;
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
    background-color: $blue;
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
    border: 1px solid $blue;
    display: flex;
    align-items: center;
    text-align: center;
    transition: all .3s ease;
    color: $blue;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    text-transform: uppercase;
    align-self: center;

    &:hover {
      background-color: $blue;
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