<template>
  <section class="popular">
    <div class="popular__head">
      <h2 class="popular__title">Комлексы</h2>
    </div>
    <div class="popular__add">
      <span class="popular__subtitle">Добавить новый элемент в Комплексы</span>
      <div class="popular__add__form">
        <div class="form">
          <input type="file" name="" id="file" ref="file2" @change="get_picture">
          <v-text-field class="input"
                        label="Введите название *"
                        v-model="name"
          ></v-text-field>
          <v-text-field class="input"
                        label="Введите описание *"
                        v-model="desc"
          ></v-text-field>
          <v-text-field class="input"
                        label="Введите цену *"
                        v-model="price"
          ></v-text-field>
          <button class="button" @click="add_new_complex">отправить</button>
        </div>
      </div>
    </div>
    <div class="popular__actual">
      <div class="popular__actual__head">
        <span class="popular__subtitle">Все актуальные комплексы</span>
        <button class="popular__actual__button"
                v-if="$store.state.complex.length > 0"
                @click="delegate_all_complex"
        >
          Удалить все комплексы
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / Trash_Empty"> <path id="Vector" d="M6 6V17.8C6 18.9201 6 19.4798 6.21799 19.9076C6.40973 20.2839 6.71547 20.5905 7.0918 20.7822C7.5192 21 8.07899 21 9.19691 21H14.8031C15.921 21 16.48 21 16.9074 20.7822C17.2837 20.5905 17.5905 20.2839 17.7822 19.9076C18 19.4802 18 18.921 18 17.8031V6M6 6H8M6 6H4M8 6H16M8 6C8 5.06812 8 4.60241 8.15224 4.23486C8.35523 3.74481 8.74432 3.35523 9.23438 3.15224C9.60192 3 10.0681 3 11 3H13C13.9319 3 14.3978 3 14.7654 3.15224C15.2554 3.35523 15.6447 3.74481 15.8477 4.23486C15.9999 4.6024 16 5.06812 16 6M16 6H18M18 6H20" stroke="#D2317C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
        </button>
      </div>
      <ul class="popular__list" v-if="$store.state.complex.length > 0">
        <li class="popular__item"
            v-for="item of $store.state.complex"
            :key="item._id"
        >
          <img :src="`/static/complex/` + item.picture" alt="" class="popular__img">
          <span class="popular__name">{{ item.name }}</span>
          <span class="popular__desc">{{ item.desc }}</span>
          <span class="popular__price">{{ item.price }}</span>
          <button class="popular__delete" @click="delete_one_complex(item)">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / Trash_Empty"> <path id="Vector" d="M6 6V17.8C6 18.9201 6 19.4798 6.21799 19.9076C6.40973 20.2839 6.71547 20.5905 7.0918 20.7822C7.5192 21 8.07899 21 9.19691 21H14.8031C15.921 21 16.48 21 16.9074 20.7822C17.2837 20.5905 17.5905 20.2839 17.7822 19.9076C18 19.4802 18 18.921 18 17.8031V6M6 6H8M6 6H4M8 6H16M8 6C8 5.06812 8 4.60241 8.15224 4.23486C8.35523 3.74481 8.74432 3.35523 9.23438 3.15224C9.60192 3 10.0681 3 11 3H13C13.9319 3 14.3978 3 14.7654 3.15224C15.2554 3.35523 15.6447 3.74481 15.8477 4.23486C15.9999 4.6024 16 5.06812 16 6M16 6H18M18 6H20" stroke="#EC232B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
          </button>
        </li>
      </ul>
      <span v-if="!$store.state.complex || !$store.state.complex.length > 0">Комплексов нет</span>
    </div>
  </section>
</template>

<script>
export default {
  name: "AdminComplex",
  data () {
    return {
      picture: null,
      name: '',
      desc: '',
      price: ''
    }
  },
  methods: {
    get_picture () {
      this.picture = this.$refs.file2.files[0];
    },
    async add_new_complex () {
      const form_data = new FormData();

      form_data.append("name", this.name);
      form_data.append("desc", this.desc);
      form_data.append("price", this.price);
      form_data.append("picture", this.picture);

      const response = await fetch('/api/complex/add', {
        method: 'POST',
        body: form_data
      });

      if(response.status === 200) {
        const response = await fetch('/api/complex/get');
        const payload = await response.json();
        this.$store.commit('set_popular', payload);
      }
    },
    async delete_one_complex (item) {
      const response = await fetch(`/api/complex/delete/${item._id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if(response.status === 200) {
        const response = await fetch('/api/complex/get');
        const payload = await response.json();
        this.$store.commit('set_popular', payload);
      }
    },
    async delegate_all_complex () {
      const response = await fetch('/api/complex/delete', {method: 'DELETE'});

      if(response.status === 200) {
        const response = await fetch('/api/complex/get');
        const payload = await response.json();
        this.$store.commit('set_popular', payload);
      }
    }
  },
  mounted () {
    this.$store.dispatch('get_complex');
  }
}
</script>

<style scoped lang="scss">
@import "../assets/variables.scss";

.popular {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 40px;

  &__head {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  &__title {
    font-weight: 700;
    font-size: 26px;
    line-height: 130%;
    text-transform: uppercase;
  }
  &__add {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 20px;

    &__form {
      width: 100%;
      padding: 40px 20px;
      border-radius: 30px;
      background-color: #FAFAFA;

      .form {
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 20px;

        .input {
          width: 100%;
        }
        .button {
          align-self: end;
          background-color: $blue;
          border-radius: 10px;
          padding: 10px 20px;
          font-size: 16px;
          font-weight: 500;
          text-transform: uppercase;
          color: #FFFFFF;
        }
      }
    }
  }
  &__actual {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 20px;

    &__head {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &__button {
      padding: 10px 20px;
      border-radius: 10px;
      background-color: rgba(236, 35, 43, 0.2);
      color: $rose_light;
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
  &__subtitle {
    font-weight: 600;
    font-size: 20px;
    line-height: 130%;
  }
  &__list {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
  }
  &__item {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 15px;
    position: relative;
  }
  &__img {
    width: 100%;
    height: auto;
    border-radius: 15px;
  }
  &__name {
    color: $rose_light;
    font-weight: 600;
    text-transform: uppercase;
  }
  &__price {
    color: $rose_light;
  }
  &__edit {
    padding: 7px;
    border-radius: 5px;
    background: $yellow_light;
    position: absolute;
    bottom: 0;
    right: 65px;
  }
  &__delete {
    padding: 7px;
    border-radius: 5px;
    background: $red_light;
    position: absolute;
    bottom: 0;
    right: 10px;
  }
}
</style>