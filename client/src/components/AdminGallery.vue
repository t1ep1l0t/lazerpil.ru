<template>
  <div>
    <section class="add">
      <h2>Добавить новое фото</h2>
      <input type="file" ref="gallery" @change="get_picture">
      <button @click="add_photo">Добавить фото</button>
    </section>
    <section class="gallery">
      <div class="gallery__head">
        <h2>актуальные фотографии</h2>
        <button class="gallery__delete" @click="delete_all">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / Trash_Empty"> <path id="Vector" d="M6 6V17.8C6 18.9201 6 19.4798 6.21799 19.9076C6.40973 20.2839 6.71547 20.5905 7.0918 20.7822C7.5192 21 8.07899 21 9.19691 21H14.8031C15.921 21 16.48 21 16.9074 20.7822C17.2837 20.5905 17.5905 20.2839 17.7822 19.9076C18 19.4802 18 18.921 18 17.8031V6M6 6H8M6 6H4M8 6H16M8 6C8 5.06812 8 4.60241 8.15224 4.23486C8.35523 3.74481 8.74432 3.35523 9.23438 3.15224C9.60192 3 10.0681 3 11 3H13C13.9319 3 14.3978 3 14.7654 3.15224C15.2554 3.35523 15.6447 3.74481 15.8477 4.23486C15.9999 4.6024 16 5.06812 16 6M16 6H18M18 6H20" stroke="#EC232B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
          Удалить все
        </button>
      </div>
      <ul class="gallery__list" v-if="$store.state.gallery.length > 0">
        <li class="gallery__item"
            v-for="item of $store.state.gallery"
            :key="item._id"
        >
          <img :src="'/static/gallery/' + item.picture" alt="" class="gallery__img">
          <button class="gallery__del" @click="delete_one(item)">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / Trash_Empty"> <path id="Vector" d="M6 6V17.8C6 18.9201 6 19.4798 6.21799 19.9076C6.40973 20.2839 6.71547 20.5905 7.0918 20.7822C7.5192 21 8.07899 21 9.19691 21H14.8031C15.921 21 16.48 21 16.9074 20.7822C17.2837 20.5905 17.5905 20.2839 17.7822 19.9076C18 19.4802 18 18.921 18 17.8031V6M6 6H8M6 6H4M8 6H16M8 6C8 5.06812 8 4.60241 8.15224 4.23486C8.35523 3.74481 8.74432 3.35523 9.23438 3.15224C9.60192 3 10.0681 3 11 3H13C13.9319 3 14.3978 3 14.7654 3.15224C15.2554 3.35523 15.6447 3.74481 15.8477 4.23486C15.9999 4.6024 16 5.06812 16 6M16 6H18M18 6H20" stroke="#EC232B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
          </button>
        </li>
      </ul>
      <span v-else>В галерее нет фотографий</span>
    </section>
  </div>
</template>

<script>
export default {
  name: "AdminGallery",
  data () {
    return {
      picture: null
    }
  },
  methods: {
    get_picture () {
      this.picture = this.$refs.gallery.files[0];
    },
    async add_photo () {
      const form_data = new FormData();

      form_data.append("picture", this.picture);

      const response = await fetch('/api/gallery/add', {
        method: 'POST',
        body: form_data
      });

      if(response.status === 200) {
        const response = await fetch('/api/gallery/get');
        const payload = await response.json();
        this.$store.commit('set_gallery', payload);
      }
    },
    async delete_one (item) {

      const response = await fetch(`/api/gallery/delete/${item._id}`, {
        method: 'DELETE'
      });

      if(response.status === 200) {
        const response = await fetch('/api/gallery/get');
        const payload = await response.json();
        this.$store.commit('set_gallery', payload);
      }
    },
    async delete_all () {

      const response = await fetch(`/api/gallery/delete/`, {
        method: 'DELETE'
      });

      if(response.status === 200) {
        const response = await fetch('/api/gallery/get');
        const payload = await response.json();
        this.$store.commit('set_gallery', payload);
      }
    }
  },
  mounted() {
    this.$store.dispatch('get_gallery')
  }
}
</script>

<style scoped lang="scss">
@import "../assets/variables.scss";

.add {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 15px;
}
.gallery {
  margin-top: 50px;
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
  &__delete {
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
  &__list {
    width: 100%;
    display: flex;
    align-items: start;
    gap: 15px;
    flex-wrap: wrap;
  }
  &__item {
    max-width: 200px;
    position: relative;
  }
  &__img {
    width: 100%;
    height: auto;
    border-radius: 20px;
  }
  &__del {
    position: absolute;
    top: 10px;
    left: 10px;
    background-color: #202020;
    padding: 5px;
    border-radius: 7px;
  }
}
</style>