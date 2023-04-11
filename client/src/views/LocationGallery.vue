<template>
  <div id="galley_location" v-if="location">
    <section class="top">
      <div class="container">
        <div class="top__head">
          <h1 class="top__title">ФОТО ЛОКАЦИИ</h1>
          <div class="top__location">
            <span class="metro"
                  :style="{color: location.color}"
            >
              <svg width="35" height="24" viewBox="0 0 35 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M32.592 20.6473L24.416 0L17.5 12.0698L10.612 0L2.408 20.6473H0V23.7765H12.376V20.6473H10.528L12.32 15.5064L17.5 24L22.68 15.5064L24.472 20.6473H22.624V23.7765H35V20.6473H32.592Z" :fill="location.color"/>
              </svg>
              {{ location.metro }}
            </span>
            <span class="address">
              {{ location.address }}
            </span>
          </div>
        </div>
      </div>
    </section>
    <section class="photos">
      <div class="container">
        <div class="photos__inner">
          <div class="photos__head">
            <h2 class="photos__title">услуги</h2>
          </div>
          <div class="photos__content" v-if="location.service.length > 0">
            <img class="photos__img"
                 :src="`/static/service/${image}`"
                 v-for="(image, index) of location.service"
                 :key="image + index"
            >
          </div>
          <div class="photos__content" v-else>
            <span>Нет фото в категории Услуги</span>
          </div>
        </div>
      </div>
    </section>
    <section class="photos">
      <div class="container">
        <div class="photos__inner">
          <div class="photos__head">
            <h2 class="photos__title">результат</h2>
          </div>
          <div class="photos__content" v-if="location.result.length > 0">
            <img class="photos__img"
                 :src="`/static/result/${image}`"
                 v-for="(image, index) of location.result"
                 :key="image + index"
            >
          </div>
          <div class="photos__content" v-else>
            <span>Нет фото в категории Результат</span>
          </div>
        </div>
      </div>
    </section>
    <section class="photos">
      <div class="container">
        <div class="photos__inner">
          <div class="photos__head">
            <h2 class="photos__title">оборудование</h2>
          </div>
          <div class="photos__content" v-if="location.equip.length > 0">
            <img class="photos__img"
                 :src="`/static/equip/${image}`"
                 v-for="(image, index) of location.equip"
                 :key="image + index"
            >
          </div>
          <div class="photos__content" v-else>
            <span>Нет фото в категории Оборудование</span>
          </div>
        </div>
      </div>
    </section>
    <section class="photos">
      <div class="container">
        <div class="photos__inner">
          <div class="photos__head">
            <h2 class="photos__title">интерьер</h2>
          </div>
          <div class="photos__content" v-if="location.interior.length > 0">
            <img class="photos__img"
                 :src="`/static/interior/${image}`"
                 v-for="(image, index) of location.interior"
                 :key="image + index"
            >
          </div>
          <div class="photos__content" v-else>
            <span>Нет фото в категории Интерьер</span>
          </div>
        </div>
      </div>
    </section>
    <section class="photos">
      <div class="container">
        <div class="photos__inner">
          <div class="photos__head">
            <h2 class="photos__title">вход</h2>
          </div>
          <div class="photos__content" v-if="location.entrance.length > 0">
            <img class="photos__img"
                 :src="`/static/entrance/${image}`"
                 v-for="(image, index) of location.entrance"
                 :key="image + index"
            >
          </div>
          <div class="photos__content" v-else>
            <span>Нет фото в категории Вход</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "LocationGallery",
  props: ['id'],
  data() {
    return {
      location: undefined,
    }
  },
  methods: {
    async get_location_from_id () {
      const id = window.location.href.split('/')[4];
      const response = await fetch(`/api/locations/get/${id}`);
      this.location = await response.json();
    }
  },
  mounted() {
    this.get_location_from_id();
  }
}
</script>

<style scoped lang="scss">
@import "../assets/variables.scss";

.top {
  width: 100%;
  padding-top: 60px;

  &__inner {
    width: 100%;
  }
  &__head {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
  }
  &__title {
    font-weight: 600;
    font-size: 32px;
    line-height: 56px;
    text-align: center;
  }
  &__location {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    .metro {
      display: flex;
      align-items: end;
      gap: 10px;
      font-weight: 600;
      font-size: 20px;
      line-height: 100%;
    }
    .address {
      font-weight: 700;
      font-size: 16px;
      line-height: 160%;
    }
  }
}
.photos {
  width: 100%;
  padding-top: 60px;

  &__inner {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 40px;
  }
  &__head {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  &__title {
    font-weight: 600;
    font-size: 28px;
    line-height: 130%;
    text-transform: uppercase;
  }
  &__content {
    width: 100%;
    display: flex;
    align-items: start;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;

    span {
      text-align: center;
      color: $red;
      font-size: 16px;
      line-height: 22px;
    }
  }
  &__img {
    max-width: 386px;
    width: 100%;
    height: auto;
    border-radius: 50px;
  }
}
</style>