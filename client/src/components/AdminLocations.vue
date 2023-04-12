<template>
<div>
  <div class="add">
    <h2>Добавить новую локацию</h2>
    <div class="add__form">
      <label class="add__label">
        Станция метро:
        <input type="text" class="add_input" placeholder="Чеховская" v-model="metro">
      </label>
      <label class="add__label">
        Адрес:
        <input type="text" class="add_input" placeholder="ул. Пушкина, д. 17" v-model="address">
      </label>
      <label class="add__label">
        Цвет ветки Метро (в формате hex):
        <input type="text" class="add_input" placeholder="#FFFFFF" v-model="color">
      </label>
      <label class="add__label">
        Ссылка на локацию (Яндекс карты):
        <input type="text" class="add_input" placeholder="https://ya.maps.ru" v-model="path">
      </label>
      <label class="add__label">
        Координата А (1ая):
        <input type="text" class="add_input" placeholder="55.545454" v-model="coords[0]">
      </label>
      <label class="add__label">
        Координата Б (2ая):
        <input type="text" class="add_input" placeholder="33.323232" v-model="coords[1]">
      </label>
      <div class="add__box">
        <span class="add__label">Сервис</span>
        <input type="file" ref="location_service" >
      </div>
      <div class="add__box">
        <span class="add__label">Результат</span>
        <input type="file" ref="location_result" >
      </div>
      <div class="add__box">
        <span class="add__label">Интерьер</span>
        <input type="file" ref="location_interior" multiple>
      </div>
      <div class="add__box">
        <span class="add__label">Оборудование</span>
        <input type="file" ref="location_equip">
      </div>
      <div class="add__box">
        <span class="add__label">Вход</span>
        <input type="file" ref="location_entrance">
      </div>
      <button class="add__button" @click="add">добавить</button>
    </div>
  </div>
  <div class="locations">
    <div class="locations__head">
      <h2 class="locations__title">
        Актуальные локации
      </h2>
      <button class="locations__button" @click="delete_all" v-if="$store.state.locations.length > 0">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / Trash_Empty"> <path id="Vector" d="M6 6V17.8C6 18.9201 6 19.4798 6.21799 19.9076C6.40973 20.2839 6.71547 20.5905 7.0918 20.7822C7.5192 21 8.07899 21 9.19691 21H14.8031C15.921 21 16.48 21 16.9074 20.7822C17.2837 20.5905 17.5905 20.2839 17.7822 19.9076C18 19.4802 18 18.921 18 17.8031V6M6 6H8M6 6H4M8 6H16M8 6C8 5.06812 8 4.60241 8.15224 4.23486C8.35523 3.74481 8.74432 3.35523 9.23438 3.15224C9.60192 3 10.0681 3 11 3H13C13.9319 3 14.3978 3 14.7654 3.15224C15.2554 3.35523 15.6447 3.74481 15.8477 4.23486C15.9999 4.6024 16 5.06812 16 6M16 6H18M18 6H20" stroke="#EC232B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
        Удалить все
      </button>
    </div>
    <ul class="locations__list" v-if="$store.state.locations.length > 0">
      <li class="locations__item"
          v-for="location of $store.state.locations"
          :key="location._id"
      >
        <span class="add__label">
          Метро: {{ location.metro }} <input class="add_input" type="text" v-model="location.metro">
        </span>
        <span class="add__label">
          Адрес: {{ location.address }} <input class="add_input" type="text" v-model="location.address">
        </span>
        <span class="add__label">
          Цвет: {{ location.color }} <input class="add_input" type="text" v-model="location.color">
        </span>
        <span class="add__label">
          Координата А: {{ location.coords[0].split(',')[0] }} <input class="add_input" type="text" v-model="coords[0]">
        </span>
        <span class="add__label">
          Координата Б: {{ location.coords[0].split(',')[1] }} <input class="add_input" type="text" v-model="coords[1]">
        </span>
        <span class="add__label">
          Ссылка: {{ location.path }} <input class="add_input" type="text" v-model="location.path">
        </span>
        <div class="locations__photos">
          <div class="locations__dir">
            <span class="locations__text">
              Вход
            </span>
            <input type="file" ref="location_update_entrance" >
            <ul class="locations__dir__list" v-if="location.entrance.length > 0">
              <li class="locations__dir__item"
                  v-for="(img, index) of location.entrance"
                  :key="index"
              >
                <img :src="'/static/entrance/' + img" alt="" class="locations__dir__img">
                <button @click="delete_photo(img, location)">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / Trash_Empty"> <path id="Vector" d="M6 6V17.8C6 18.9201 6 19.4798 6.21799 19.9076C6.40973 20.2839 6.71547 20.5905 7.0918 20.7822C7.5192 21 8.07899 21 9.19691 21H14.8031C15.921 21 16.48 21 16.9074 20.7822C17.2837 20.5905 17.5905 20.2839 17.7822 19.9076C18 19.4802 18 18.921 18 17.8031V6M6 6H8M6 6H4M8 6H16M8 6C8 5.06812 8 4.60241 8.15224 4.23486C8.35523 3.74481 8.74432 3.35523 9.23438 3.15224C9.60192 3 10.0681 3 11 3H13C13.9319 3 14.3978 3 14.7654 3.15224C15.2554 3.35523 15.6447 3.74481 15.8477 4.23486C15.9999 4.6024 16 5.06812 16 6M16 6H18M18 6H20" stroke="#EC232B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
                </button>
              </li>
            </ul>
            <span v-else>Нет фотографий в категории Услуги</span>
          </div>
          <div class="locations__dir">
            <span class="locations__text">
              Оборудование
            </span>
            <input type="file" ref="location_update_equip">
            <ul class="locations__dir__list" v-if="location.equip.length > 0">
              <li class="locations__dir__item"
                  v-for="(img, index) of location.equip"
                  :key="index"
              >
                <img :src="'/static/equip/' + img" alt="" class="locations__dir__img">
                <button @click="delete_photo(img, location)">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / Trash_Empty"> <path id="Vector" d="M6 6V17.8C6 18.9201 6 19.4798 6.21799 19.9076C6.40973 20.2839 6.71547 20.5905 7.0918 20.7822C7.5192 21 8.07899 21 9.19691 21H14.8031C15.921 21 16.48 21 16.9074 20.7822C17.2837 20.5905 17.5905 20.2839 17.7822 19.9076C18 19.4802 18 18.921 18 17.8031V6M6 6H8M6 6H4M8 6H16M8 6C8 5.06812 8 4.60241 8.15224 4.23486C8.35523 3.74481 8.74432 3.35523 9.23438 3.15224C9.60192 3 10.0681 3 11 3H13C13.9319 3 14.3978 3 14.7654 3.15224C15.2554 3.35523 15.6447 3.74481 15.8477 4.23486C15.9999 4.6024 16 5.06812 16 6M16 6H18M18 6H20" stroke="#EC232B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
                </button>
              </li>
            </ul>
            <span v-else>Нет фотографий в категории Оборудование</span>
          </div>
          <div class="locations__dir">
            <span class="locations__text">
              Интерьер
            </span>
            <input type="file" ref="location_update_interior">
            <ul class="locations__dir__list" v-if="location.interior.length > 0">
              <li class="locations__dir__item"
                  v-for="(img, index) of location.interior"
                  :key="index"
              >
                <img :src="'/static/interior/' + img" alt="" class="locations__dir__img">
                <button @click="delete_photo(img, location)">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / Trash_Empty"> <path id="Vector" d="M6 6V17.8C6 18.9201 6 19.4798 6.21799 19.9076C6.40973 20.2839 6.71547 20.5905 7.0918 20.7822C7.5192 21 8.07899 21 9.19691 21H14.8031C15.921 21 16.48 21 16.9074 20.7822C17.2837 20.5905 17.5905 20.2839 17.7822 19.9076C18 19.4802 18 18.921 18 17.8031V6M6 6H8M6 6H4M8 6H16M8 6C8 5.06812 8 4.60241 8.15224 4.23486C8.35523 3.74481 8.74432 3.35523 9.23438 3.15224C9.60192 3 10.0681 3 11 3H13C13.9319 3 14.3978 3 14.7654 3.15224C15.2554 3.35523 15.6447 3.74481 15.8477 4.23486C15.9999 4.6024 16 5.06812 16 6M16 6H18M18 6H20" stroke="#EC232B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
                </button>
              </li>
            </ul>
            <span v-else>Нет фотографий в категории Интерьер</span>
          </div>
          <div class="locations__dir">
            <span class="locations__text">
              Результат
            </span>
            <input type="file" ref="location_update_result">
            <ul class="locations__dir__list" v-if="location.result.length > 0">
              <li class="locations__dir__item"
                  v-for="(img, index) of location.result"
                  :key="index"
              >
                <img :src="'/static/result/' + img" alt="" class="locations__dir__img">
                <button @click="delete_photo(img, location)">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / Trash_Empty"> <path id="Vector" d="M6 6V17.8C6 18.9201 6 19.4798 6.21799 19.9076C6.40973 20.2839 6.71547 20.5905 7.0918 20.7822C7.5192 21 8.07899 21 9.19691 21H14.8031C15.921 21 16.48 21 16.9074 20.7822C17.2837 20.5905 17.5905 20.2839 17.7822 19.9076C18 19.4802 18 18.921 18 17.8031V6M6 6H8M6 6H4M8 6H16M8 6C8 5.06812 8 4.60241 8.15224 4.23486C8.35523 3.74481 8.74432 3.35523 9.23438 3.15224C9.60192 3 10.0681 3 11 3H13C13.9319 3 14.3978 3 14.7654 3.15224C15.2554 3.35523 15.6447 3.74481 15.8477 4.23486C15.9999 4.6024 16 5.06812 16 6M16 6H18M18 6H20" stroke="#EC232B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
                </button>
              </li>
            </ul>
            <span v-else>Нет фотографий в категории Результат</span>
          </div>
          <div class="locations__dir">
            <span class="locations__text">
              Услуги
            </span>
            <input type="file" ref="location_update_service">
            <ul class="locations__dir__list" v-if="location.service.length > 0">
              <li class="locations__dir__item"
                  v-for="(img, index) of location.service"
                  :key="index"
              >
                <img :src="'/static/service/' + img" alt="" class="locations__dir__img">
                <button @click="delete_photo(img, location)">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / Trash_Empty"> <path id="Vector" d="M6 6V17.8C6 18.9201 6 19.4798 6.21799 19.9076C6.40973 20.2839 6.71547 20.5905 7.0918 20.7822C7.5192 21 8.07899 21 9.19691 21H14.8031C15.921 21 16.48 21 16.9074 20.7822C17.2837 20.5905 17.5905 20.2839 17.7822 19.9076C18 19.4802 18 18.921 18 17.8031V6M6 6H8M6 6H4M8 6H16M8 6C8 5.06812 8 4.60241 8.15224 4.23486C8.35523 3.74481 8.74432 3.35523 9.23438 3.15224C9.60192 3 10.0681 3 11 3H13C13.9319 3 14.3978 3 14.7654 3.15224C15.2554 3.35523 15.6447 3.74481 15.8477 4.23486C15.9999 4.6024 16 5.06812 16 6M16 6H18M18 6H20" stroke="#EC232B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
                </button>
              </li>
            </ul>
            <span v-else>Нет фотографий в категории Услуги</span>
          </div>
        </div>
        <button class="add__button" @click="update(location)">Обновить</button>
        <button class="add__button" @click="delete_one(location)">Удалить</button>
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
      coords: [],
      deleted: []
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
      const response = await fetch(`/api/locations/delete/${item._id}`, {method: 'DELETE'});

      if (response.status === 200) {
        const response = await fetch('/api/locations/get');
        const payload = await response.json();
        this.$store.commit('set_locations', payload);
      }
    },
    async update (item) {
      this.location_update_service = this.$refs.location_update_service[0].files[0];
      this.location_update_result = this.$refs.location_update_result[0].files[0];
      this.location_update_interior = this.$refs.location_update_interior[0].files[0];
      this.location_update_equip = this.$refs.location_update_equip[0].files[0];
      this.location_update_entrance = this.$refs.location_update_entrance[0].files[0];


      const form_data = new FormData();

      form_data.append("metro", item.metro);
      form_data.append("address", item.address);
      form_data.append("color", item.color);
      form_data.append("path", item.path);
      form_data.append("coords", this.coords);
      form_data.append("entrance", this.location_update_entrance);
      form_data.append("interior", this.location_update_interior);
      form_data.append("equip", this.location_update_equip);
      form_data.append("result", this.location_update_result);
      form_data.append("service", this.location_update_service);

      const response = await fetch (`/api/locations/update/${item._id}`, {
        method: 'POST',
        body: form_data
      });

      if(response.status === 201) {
        const response = await fetch('/api/locations/get');
        const payload = await response.json();
        this.$store.commit('set_locations', payload);
      }
    },
    async delete_photo (img, item) {
      this.deleted = [];
      console.log(this.deleted)

      let name;
      this.$store.state.locations.forEach(location => {
          location.entrance.forEach(photo => {
            if (photo === img) {
              name = 'entrance'
            }
          })
          location.equip.forEach(photo => {
            if (photo === img) {
              name = 'equip'
            }
          })
          location.interior.forEach(photo => {
            if (photo === img) {
              name = 'interior'
            }
          })
          location.result.forEach(photo => {
            if (photo === img) {
              name = 'result'
            }
          })
          location.service.forEach(photo => {
            if (photo === img) {
              name = 'service'
            }
          })
        })
      this.deleted.push({dir: name, name: img });

      const form_data = new FormData();
      form_data.append("del", JSON.stringify(this.deleted));

      const response = await fetch (`/api/locations/update/${item._id}`, {
        method: 'POST',
        body: form_data
      });

      if(response.status === 201) {
        const response = await fetch('/api/locations/get');
        const payload = await response.json();
        this.$store.commit('set_locations', payload);
      }
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
    gap: 25px;
    padding: 20px;
    border-radius: 20px;
    background: $red_light;
  }
  &__label {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 10px;
    font-weight: 600;
    font-size: 18px;
  }
  &__box {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 10px;
  }
  &_input {
    width: 100%;
    padding: 7px 14px;
    border-radius: 10px;
    border: 2px solid $blue;
    font-size: 20px;
  }
  &__button {
    width: 100%;
    border-radius: 15px;
    padding: 15px 20px;
    background-color: $blue;
    color: #FFFFFF;
    font-size: 18px;
    text-transform: uppercase;
    transition: all .3s ease;

    &:hover {
      background-color: $red;
    }
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

    button {
      padding: 10px 20px;
      border-radius: 10px;
      background-color: $red_light;
      color: $red;
      display: flex;
      align-items: center;
      gap: 10px;
      font-weight: 600;
      transition: all .3s ease;

      &:hover {
        background-color: rgba(236, 35, 43, 0.4);
      }
    }
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
    &__item {
      position: relative;

      button {
        position: absolute;
        top: 10px;
        left: 10px;
        background-color: #202020;
        padding: 5px;
        border-radius: 7px;
      }
    }
    &__img {
      max-width: 150px;
      max-height: 150px;
      border-radius: 20px;
    }
  }
}
</style>