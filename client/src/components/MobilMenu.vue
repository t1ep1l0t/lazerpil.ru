<template>
  <section :class="[$store.state.menu ? 'menu menu__active' : 'menu']">
    <div class="menu__inner">
      <ul class="menu__list">
        <li class="menu__item"
            v-for="(view, index) of views"
            :key="index"
        >
          <router-link class="menu__link"
                       :to="view.path"
                       @click.native="$store.commit('set_menu')"
          >
            {{ view.name }}
          </router-link>
        </li>
      </ul>
      <div class="menu__buttons">
        <a href="tel:+78002200022" class="menu__call" >8 (800) 22-000-22</a>
        <router-link class="menu__contact"
                     to="/contact-us"
                     @click.native="$store.commit('set_menu')"
        >
          записаться
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MobilMenu",
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

.menu {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background: #FFFFFF;
  display: none;
  transform: translateY(-100%);
  transition: all .4s ease;
  @media(max-width: 1199px) {
    display: block;
  }

  &__active {
    transform: translateY(0%);
    transition: all .4s ease;
  }
  &__inner {
    margin-top: 109px;
    margin-bottom: 100px;
    width: 100%;
    height: calc(100vh - 109px);
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;

    @media(max-width: 1199px) {
      margin-top: 88.05px;
    }
    @media(max-width: 768px) {
      margin-top: 67.1px;
    }
  }
  &__list {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 20px;
  }
  &__link {
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #555555;
    text-transform: uppercase;
    transition: color .3s ease;

    &:hover {
      color: $rose_dark;
    }
  }
  &__buttons {
    width: 100%;
    padding: 20px 0;
    border-top: 1px dashed $blue;
    flex-direction: column;
    align-items: start;
    gap: 15px;
    display: none;

    @media(max-width: 768px) {
      display: flex;
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
  }
  &__contact {
    display: block;
    width: 100%;
    background-color: $rose_light;
    border-radius: 30px;
    padding: 10px 22px 8px;
    text-align: center;
    color: #FFFFFF!important;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    text-transform: uppercase;
    transition: all .3s ease;

    &:hover {
      background-color: $rose_dark;
    }
  }
}
</style>