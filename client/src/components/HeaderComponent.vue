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
            <router-link :to="view.path">{{ view.name }}</router-link>
          </li>
        </ul>
      </nav>
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

<style scoped>

</style>