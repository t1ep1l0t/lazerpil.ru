<template>
<div>
  <div class="add">
    <h2>Добавить новую локацию</h2>
    <div class="add__form">
      <input type="text" class="add_input" placeholder="метро" v-model="metro">
      <input type="text" class="add_input" placeholder="адрес" v-model="address">
      <input type="text" class="add_input" placeholder="цвет" v-model="color">
      <input type="text" class="add_input" placeholder="ссылка" v-model="path">
      <input type="text" class="add_input" placeholder="координата а" v-model="coords[0]">
      <input type="text" class="add_input" placeholder="координата б" v-model="coords[1]">
      <div class="add__box">
        <span>Сервис</span>
        <input type="file" ref="location_service" >
      </div>
      <div class="add__box">
        <span>Результат</span>
        <input type="file" ref="location_result" >
      </div>
      <div class="add__box">
        <span>Интерьер</span>
        <input type="file" ref="location_interior" multiple>
      </div>
      <div class="add__box">
        <span>Оборудование</span>
        <input type="file" ref="location_equip">
      </div>
      <div class="add__box">
        <span>Вход</span>
        <input type="file" ref="location_entrance">
      </div>
      <button @click="add" style="align-self: end">добавить</button>
    </div>
  </div>
  <div class="locations">
    <div class="locations__head">
      <h2 class="locations__title">
        Актуальные локации
      </h2>
      <button class="locations__button" @click="delete_all">Удалить все</button>
    </div>
    <ul class="locations__list" v-if="$store.state.locations.length > 0">
      <li class="locations__item"
          v-for="location of $store.state.locations"
          :key="location._id"
      >
        <span class="locations__text">
          Метро: <input type="text" v-model="location.metro">
        </span>
        <span class="locations__text">
          Адрес: <input type="text" v-model="location.address">
        </span>
        <span class="locations__text">
          Цвет: <input type="text" v-model="location.color">
        </span>
        <span class="locations__text">
          Координата А: <input type="text" v-model="location.coords[0]">
        </span>
        <span class="locations__text">
          Координата Б: <input type="text" v-model="location.coords[1]">
        </span>
        <span class="locations__text">
          Ссылка: <input type="text" v-model="location.path">
        </span>
        <div class="locations__photos">
          <div class="locations__dir">
            <span class="locations__text">
              Вход
            </span>
            <input type="file" ref="location_update_entrance" multiple>
            <ul class="locations__dir__list" v-if="location.entrance.length > 0">
              <li class="locations__dir__item"
                  v-for="(img, index) of location.entrance"
                  :key="index"
              >
                <img :src="'/static/entrance/' + img" alt="" class="locations__dir__img">
                <button>X</button>
              </li>
            </ul>
            <span v-else>Нет фотографий в категории Услуги</span>
          </div>
          <div class="locations__dir">
            <span class="locations__text">
              Оборудование
            </span>
            <input type="file" ref="location_update_equip" multiple>
            <ul class="locations__dir__list" v-if="location.equip.length > 0">
              <li class="locations__dir__item"
                  v-for="(img, index) of location.equip"
                  :key="index"
              >
                <img :src="'/static/equip/' + img" alt="" class="locations__dir__img">
                <button>X</button>
              </li>
            </ul>
            <span v-else>Нет фотографий в категории Оборудование</span>
          </div>
          <div class="locations__dir">
            <span class="locations__text">
              Интерьер
            </span>
            <input type="file" ref="location_update_interior" multiple>
            <ul class="locations__dir__list" v-if="location.interior.length > 0">
              <li class="locations__dir__item"
                  v-for="(img, index) of location.interior"
                  :key="index"
              >
                <img :src="'/static/interior/' + img" alt="" class="locations__dir__img">
                <button>X</button>
              </li>
            </ul>
            <span v-else>Нет фотографий в категории Интерьер</span>
          </div>
          <div class="locations__dir">
            <span class="locations__text">
              Результат
            </span>
            <input type="file" ref="location_update_result" multiple>
            <ul class="locations__dir__list" v-if="location.result.length > 0">
              <li class="locations__dir__item"
                  v-for="(img, index) of location.result"
                  :key="index"
              >
                <img :src="'/static/result/' + img" alt="" class="locations__dir__img">
                <button>X</button>
              </li>
            </ul>
            <span v-else>Нет фотографий в категории Результат</span>
          </div>
          <div class="locations__dir">
            <span class="locations__text">
              Услуги
            </span>
            <input type="file" ref="location_update_service" multiple>
            <ul class="locations__dir__list" v-if="location.service.length > 0">
              <li class="locations__dir__item"
                  v-for="(img, index) of location.service"
                  :key="index"
              >
                <img :src="'/static/service/' + img" alt="" class="locations__dir__img">
                <button>X</button>
              </li>
            </ul>
            <span v-else>Нет фотографий в категории Услуги</span>
          </div>
        </div>
        <button @click="update(location)">Обновить</button>
        <button @click="delete_one(location)">Удалить</button>
      </li>
    </ul>
    <span v-else>Не актуальных локаций</span>
  </div>
</div>
</template>

<script>
export default {
  name: "AdminLocations",
  data () {
    return {
      location_service: null,
      location_result: null,
      location_interior: null,
      location_equip: null,
      location_entrance: null,
      location_update_service: null,
      location_update_result: null,
      location_update_interior: null,
      location_update_equip: null,
      location_update_entrance: null,
      metro: '',
      address: '',
      color: '',
      path: '',
      coords: []
    }
  },
  methods: {
    async add () {
      this.location_entrance = this.$refs.location_entrance.files[0];
      this.location_interior = this.$refs.location_interior.files[0];
      this.location_equip = this.$refs.location_equip.files[0];
      this.location_result = this.$refs.location_result.files[0];
      this.location_service = this.$refs.location_service.files[0];
      const form_data = new FormData();

      form_data.append("metro", this.metro);
      form_data.append("address", this.address);
      form_data.append("color", this.color);
      form_data.append("path", this.path);
      form_data.append("coords", this.coords);
      form_data.append("entrance", this.location_entrance);
      form_data.append("interior", this.location_interior);
      form_data.append("equip", this.location_equip);
      form_data.append("result", this.location_result);
      form_data.append("service", this.location_service);

      console.log(form_data)

      const response = await fetch('/api/locations/add', {
        method: 'POST',
        body: form_data
      })

      if (response.status === 200) {
        const response = await fetch('/api/locations/get');
        const payload = await response.json();
        this.$store.commit('set_locations', payload);
      }

    },
    async delete_all () {
      const response = await fetch('/api/locations/delete', {method: 'DELETE'});

      if (response.status === 200) {
        const response = await fetch('/api/locations/get');
        const payload = await response.json();
        this.$store.commit('set_locations', payload);
      }
    },
    async delete_one (item) {
      const response = await fetch(`http://localhost:5000/api/locations/delete/${item._id}`, {method: 'DELETE'});

      if (response.status === 200) {
        const response = await fetch('http://localhost:5000/api/locations/get');
        const payload = await response.json();
        this.$store.commit('set_locations', payload);
      }
    },
    async update () {

    }
  },
  mounted() {
    this.$store.dispatch('get_locations')
  }
}
</script>

<style scoped lang="scss">
@import "../assets/variables.scss";

.add {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 25px;

  &__form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 15px;
  }
  &__box {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 5px;
  }
}
.locations {
  margin-top: 40px;
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