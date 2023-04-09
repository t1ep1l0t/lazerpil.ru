<template>
<div>
  <div class="add"></div>
  <div class="locations">
    <div class="locations__head">
      <h2 class="locations__title">
        Актуальные локации
      </h2>
      <button class="locations__button">Del all</button>
    </div>
    <ul class="locations__list">
      <li class="locations__item"
          v-for="location of $store.state.locations"
          :key="location._id"
      >
        <span class="locations__text">
          Метро: {{ location.metro }}
        </span>
        <span class="locations__text">
          Адрес: {{ location.address }}
        </span>
        <span class="locations__text">
          Цвет: {{ location.color }}
        </span>
        <span class="locations__text">
          Координаты: {{ location.coords[0] }}, {{ location.coords[1] }}
        </span>
        <span class="locations__text">
          Ссылка: {{ location.path }}
        </span>
        <div class="locations__photos">
          <div class="locations__dir">
            <span class="locations__text">
              Вход
            </span>
            <ul class="locations__dir__list" v-if="location.entrance.length > 0">
              <li class="locations__dir__item"
                  v-for="(img, index) of location.entrance"
                  :key="index"
              >
                <img :src="'/pictures/entrance/' + img" alt="" class="locations__dir__img">
              </li>
            </ul>
            <span v-else>Нет фотографий в категории Услуги</span>
          </div>
          <div class="locations__dir">
            <span class="locations__text">
              Оборудование
            </span>
            <ul class="locations__dir__list" v-if="location.equip.length > 0">
              <li class="locations__dir__item"
                  v-for="(img, index) of location.equip"
                  :key="index"
              >
                <img :src="'/pictures/equip/' + img" alt="" class="locations__dir__img">
              </li>
            </ul>
            <span v-else>Нет фотографий в категории Оборудование</span>
          </div>
          <div class="locations__dir">
            <span class="locations__text">
              Интерьер
            </span>
            <ul class="locations__dir__list" v-if="location.interior.length > 0">
              <li class="locations__dir__item"
                  v-for="(img, index) of location.interior"
                  :key="index"
              >
                <img :src="'/pictures/interior/' + img" alt="" class="locations__dir__img">
              </li>
            </ul>
            <span v-else>Нет фотографий в категории Интерьер</span>
          </div>
          <div class="locations__dir">
            <span class="locations__text">
              Результат
            </span>
            <ul class="locations__dir__list" v-if="location.result.length > 0">
              <li class="locations__dir__item"
                  v-for="(img, index) of location.result"
                  :key="index"
              >
                <img :src="'/pictures/result/' + img" alt="" class="locations__dir__img">
              </li>
            </ul>
            <span v-else>Нет фотографий в категории Результат</span>
          </div>
          <div class="locations__dir">
            <span class="locations__text">
              Услуги
            </span>
            <ul class="locations__dir__list" v-if="location.service.length > 0">
              <li class="locations__dir__item"
                  v-for="(img, index) of location.service"
                  :key="index"
              >
                <img :src="'/pictures/service/' + img" alt="" class="locations__dir__img">
              </li>
            </ul>
            <span v-else>Нет фотографий в категории Услуги</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: "AdminLocations",
  mounted() {
    this.$store.dispatch('get_locations')
  }
}
</script>

<style scoped lang="scss">
@import "../assets/variables.scss";

.locations {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 40px;

  &__head {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__list {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 30px;
  }
  &__item {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 10px;
    background-color: $red_light;
    padding: 20px;
    border-radius: 20px;
  }
  &__text {
    width: 100%;
    display: flex;
    align-items: start;
    gap: 40px;
    justify-content: space-between;
  }
  &__photos {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 20px;
  }
  &__dir {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 10px;

    span {
      font-weight: 600;
    }
    &__list {
      width: 100%;
      display: flex;
      align-items: start;
      gap: 10px;
      overflow-x: scroll;

      -ms-overflow-style: none;
      scrollbar-width: none;
      &::-webkit-scrollbar {
        display: none;
      }
    }
    &__img {
      max-width: 150px;
      height: auto;
    }
  }
}
</style>