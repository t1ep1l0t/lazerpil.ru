<template>
<header class="header">
  <div class="container">
    <div class="header__inner">
      <nav class="header__nav">
        <ul class="header__list">
          <li class="header__item"
              v-for="(view, index) of views"
              :key="index"
          >
            <router-link class="header__link" :to="view.path">{{ view.name }}</router-link>
          </li>
        </ul>
        <router-link class="header__logotype" to="/">
          <img src="../assets/static-images/logotype.png" alt="Логотип" class="header__image">
        </router-link>
      </nav>
      <div class="header__buttons">
        <a href="tel:+79264610949" class="header__call">8 (926) 461 09 49</a>
        <router-link class="header__contact" to="/contact-us">записаться</router-link>
        <button class="header__menu" @click="$store.commit('set_menu')">
          <svg width="24" height="24" v-if="!$store.state.menu"
               viewBox="0 0 24 24"
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path stroke="#E73D8C" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6H20M4 12H20M4 18H20"></path>
            </g>
          </svg>
          <svg width="24" height="24" v-if="$store.state.menu"
               viewBox="0 0 24 24"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z" fill="#E73D8C"></path>
            </g>
          </svg>
        </button>
      </div>
    </div>
  </div>
</header>
</template>

<script>
export default {
  name: "HeaderComponent",
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
          name: 'отзывы',
          path: '/reviews'
        },
        {
          name: 'контакты',
          path: '/contact-us'
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/variables.scss";
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 8px 0;
  background: #FFFFFF;
  z-index: 20;

  &__inner {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__nav {
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 88px;
  }
  &__list {
    display: flex;
    align-items: center;
    gap: 28px;

    @media(max-width: 1199px) {
      display: none;
    }
  }
  &__link {
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: #555555;
    text-transform: uppercase;
    transition: color .3s ease;

    &:hover {
      color: $rose_dark;
    }
  }
  &__logotype {
    max-width: 126px;
    height: fit-content;
  }
  &__image {
    width: 100%;
    height: auto;

    @media(max-width: 1199px) {
      max-width: 96px;
    }

    @media(max-width: 768px) {
      max-width: 66px;
    }
  }
  &__buttons {
    display: flex;
    align-items: center;
    gap: 62px;

    @media(max-width: 1199px) {
      gap: 32px;
    }
  }
  &__call {
    font-weight: 400;
    font-size: 14px;
    line-height: 25px;
    transition: color .3s ease;

    &:hover {
      color: $rose_light;
    }

    @media(max-width: 768px) {
      display: none;
    }
  }
  &__contact {
    background-color: $rose_light;
    border-radius: 30px;
    padding: 10px 22px 8px;
    color: #FFFFFF!important;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    text-transform: uppercase;
    transition: all .3s ease;

    &:hover {
      background-color: $rose_dark;
    }

    @media(max-width: 768px) {
      display: none;
    }
  }
  &__menu {
    display: none;

    @media(max-width: 1199px) {
      display: block;
    }
  }

}
</style>