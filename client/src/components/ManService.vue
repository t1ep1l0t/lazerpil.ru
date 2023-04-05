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
export default {
  name: "ManService",
  data () {
    return {
      services: [
        {
          name: 'носовые пазухи',
          price: 3800,
          picture: 'https://i.ibb.co/BrDSkt7/Frame-738001536.png',
          active: true
        },
        {
          name: 'ушные раковины',
          price: 3800,
          picture: 'https://i.ibb.co/BrDSkt7/Frame-738001536.png',
          active: false
        },
        {
          name: 'зона вокруг ореолов',
          price: 3800,
          picture: 'https://i.ibb.co/BrDSkt7/Frame-738001536.png',
          active: false
        },
        {
          name: 'белая линия живота',
          price: 3800,
          picture: 'https://i.ibb.co/BrDSkt7/Frame-738001536.png',
          active: false
        },
        {
          name: 'бикини тотальное',
          price: 3800,
          picture: 'https://i.ibb.co/BrDSkt7/Frame-738001536.png',
          active: false
        },
        {
          name: 'бикини классика',
          price: 3800,
          picture: 'https://i.ibb.co/BrDSkt7/Frame-738001536.png',
          active: false
        },
        {
          name: 'ягодицы',
          price: 3800,
          picture: 'https://i.ibb.co/BrDSkt7/Frame-738001536.png',
          active: false
        },
        {
          name: 'подмышечные впадины',
          price: 3800,
          picture: 'https://i.ibb.co/BrDSkt7/Frame-738001536.png',
          active: false
        },
        {
          name: 'ноги полностью',
          price: 3800,
          picture: 'https://i.ibb.co/BrDSkt7/Frame-738001536.png',
          active: false
        },
        {
          name: 'голени',
          price: 3800,
          picture: 'https://i.ibb.co/BrDSkt7/Frame-738001536.png',
          active: false
        },
        {
          name: 'бёдра',
          price: 3800,
          picture: 'https://i.ibb.co/BrDSkt7/Frame-738001536.png',
          active: false
        },
        {
          name: 'колени',
          price: 3800,
          picture: 'https://i.ibb.co/BrDSkt7/Frame-738001536.png',
          active: false
        },
        {
          name: 'подъёмы на ногах',
          price: 3800,
          picture: 'https://i.ibb.co/BrDSkt7/Frame-738001536.png',
          active: false
        },
        {
          name: 'пальчики на ногах',
          price: 3800,
          picture: 'https://i.ibb.co/BrDSkt7/Frame-738001536.png',
          active: false
        },
        {
          name: 'руки полностью',
          price: 3800,
          picture: 'https://i.ibb.co/BrDSkt7/Frame-738001536.png',
          active: false
        },
        {
          name: 'руки до локтя',
          price: 3800,
          picture: 'https://i.ibb.co/BrDSkt7/Frame-738001536.png',
          active: false
        },
        {
          name: 'кисти',
          price: 3800,
          picture: 'https://i.ibb.co/BrDSkt7/Frame-738001536.png',
          active: false
        },
        {
          name: 'пальчики на руках',
          price: 3800,
          picture: 'https://i.ibb.co/BrDSkt7/Frame-738001536.png',
          active: false
        },
        {
          name: 'лицо 1 зона',
          price: 3800,
          picture: 'https://i.ibb.co/BrDSkt7/Frame-738001536.png',
          active: false
        },
        {
          name: 'живот',
          price: 3800,
          picture: 'https://i.ibb.co/BrDSkt7/Frame-738001536.png',
          active: false
        },
        {
          name: 'поясница',
          price: 3800,
          picture: 'https://i.ibb.co/BrDSkt7/Frame-738001536.png',
          active: false
        },
        {
          name: 'Грудь ( декольте)',
          price: 3800,
          picture: 'https://i.ibb.co/BrDSkt7/Frame-738001536.png',
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