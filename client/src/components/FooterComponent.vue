<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <router-link to="/" class="footer__logotype">
          <img src="../assets/static-images/logotype.png" alt="" class="img">
        </router-link>
        <div class="footer__block">
          <h2 class="footer__title">Страницы</h2>
          <ul class="footer__pages__list">
            <li class="footer__pages__item"
                v-for="(view, index) of views"
                :key="index"
            >
              <router-link :to="view.path" class="footer__pages__link">
                {{ view.name }}
              </router-link>
            </li>
          </ul>
        </div>
        <div class="footer__info">
          <div class="footer__block">
            <h2 class="footer__title">Адреса</h2>
            <ul class="footer__block__list">
              <li class="footer__block__item"
                  v-for="(location, index) of locations"
                  :key="index"
              >
                <svg width="29" height="22" viewBox="0 0 29 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M27.0048 18.6914L20.2304 0.625L14.5 11.1861L8.7928 0.625L1.9952 18.6914H0V21.4294H10.2544V18.6914H8.7232L10.208 14.1931L14.5 21.625L18.792 14.1931L20.2768 18.6914H18.7456V21.4294H29V18.6914H27.0048Z" :fill="location.color"/>
                </svg>
                <span class="footer__metro"
                      :style="{color: location.color}"
                >
                  {{ location.metro }}
                </span>
                <span class="footer__text">{{ location.address }}</span>
              </li>
            </ul>
          </div>
          <div class="footer__block">
            <h2 class="footer__title">Время работы</h2>
            <span class="footer__text">Ежедневно с 09:00 до 22:00</span>
          </div>
        </div>
        <div class="footer__block">
          <h2 class="footer__title">Телефон</h2>
          <a href="tel:+78002200022" class="footer__text">8 (800) 22-000-22 </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
  data () {
    return {
      views: [
        {
          name: 'Главная',
          path: '/'
        },
        {
          name: 'Услуги',
          path: '/services'
        },
        {
          name: 'О нас',
          path: '/about-us'
        },
        {
          name: 'Отзывы',
          path: '/reviews'
        },
        {
          name: 'Контакты',
          path: '/contact-us'
        },
      ],
      locations: [
        {
          metro: 'Бульвар Рокассовского',
          address: 'улица Бойцовая, дом 27',
          color: '#EC232B',
          photos: [
            'https://i.ibb.co/DgmCpy6/location1.png',
            'https://i.ibb.co/qCWJGP2/location2.png'
          ]
        },
        {
          metro: 'Алексеевская',
          address: 'улица Проспект Мира, 95с1',
          color: '#F58220',
          photos: [
            'https://i.ibb.co/qCWJGP2/location2.png',
            'https://i.ibb.co/DgmCpy6/location1.png'
          ]
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/variables.scss";
  .footer {
    width: 100%;
    margin-top: 120px;

    &__inner {
      padding: 40px 0;
      border-top: 1px solid $blue;
      display: flex;
      align-items: start;
      gap: 80px;
      justify-content: space-between;
      flex-wrap: wrap;

      @media(max-width: 550px) {
        flex-direction: column;
        gap: 40px;
      }
    }
    &__logotype {
      @media(max-width: 550px) {
        align-self: center;
      }
    }
    &__block {
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 30px;

      &__list {
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 20px;
      }
      &__item {
        display: flex;
        align-items: center;
        gap: 10px;
        flex-wrap: wrap;
      }
    }
    &__title {
      font-weight: 600;
      font-size: 18px;
      line-height: 23px;
      color: $blue;
    }
    &__text {
      font-weight: 700;
      font-size: 16px;
      line-height: 21px;
    }
    &__pages__list {
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 10px;
    }
    &__pages__link {
      font-weight: 600;
      font-size: 16px;
      line-height: 21px;
      transition: all .3s ease;

      &:hover {
        color: $rose_dark;
      }
    }
    &__info {
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 50px;
    }
    &__metro {
      margin-right: 5px;
      font-weight: 600;
      font-size: 16px;
      line-height: 28px;
    }

  }
</style>