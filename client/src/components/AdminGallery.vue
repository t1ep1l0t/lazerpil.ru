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
        <button @click="delete_all">Удалить все</button>
      </div>
      <ul class="gallery__list" v-if="$store.state.gallery.length > 0">
        <li class="gallery__item"
            v-for="item of $store.state.gallery"
            :key="item._id"
        >
          <img :src="'/static/gallery/' + item.picture" alt="" class="gallery__img">
          <button class="gallery__delete" @click="delete_one(item)">X</button>
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
  &__delete {
    background: $red_light;
    border-radius: 5px;
    padding: 5px;
    position: absolute;
    top: 10px;
    right: 10px;
  }
}
</style>