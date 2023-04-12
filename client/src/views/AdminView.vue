<template>
  <div id="admin">
    <LoginComponent v-if="!$store.state.user" />

    <section class="admin" v-if="$store.state.user">
      <div class="container">
        <div class="admin__inner">
          <section class="panel">
            <ul class="panel__list">
              <li class="panel__item"
                  v-for="(panel, index) of panels"
                  :key="index"
              >
                <button class="panel__button"
                        :style="[ panel.value
                                  ?
                                  {
                                   background: 'rgba(236, 35, 43, 0.2)',
                                   color: '#E73D8C'
                                  }
                                  :
                                  {
                                   background: '#FAFAFA'
                                  }
                        ]"
                        @click="switch_tabs(panel)"
                >
                  {{ panel.name }}
                </button>
              </li>
            </ul>
            <button class="panel__logout" @click="logout">Выйти</button>
          </section>
          <section class="content">
            <div class="content__inner"
                 v-for="(panel, index) of panels"
                 :key="index"
            >
              <AdminPopular v-if="panel.name === 'Популярное' && panel.value" />
              <AdminComplex v-if="panel.name === 'Комплексы' && panel.value" />
              <AdminFaq v-if="panel.name === 'Вопросы' && panel.value" />
              <AdminLocations v-if="panel.name === 'Локации' && panel.value" />
              <AdminGallery v-if="panel.name === 'Галерея' && panel.value" />
              <AdminReviews v-if="panel.name === 'Отзывы' && panel.value" />
            </div>
          </section>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import LoginComponent from "@/components/LoginComponent.vue";
import AdminPopular from "@/components/AdminPopular.vue";
import AdminComplex from "@/components/AdminComplex.vue";
import AdminFaq from "@/components/AdminFaq.vue";
import AdminLocations from "@/components/AdminLocations.vue";
import AdminGallery from "@/components/AdminGallery.vue";
import AdminReviews from "@/components/AdminReviews.vue";

export default {
  name: "AdminView",
  components: {AdminReviews, AdminGallery, AdminLocations, AdminFaq, AdminComplex, AdminPopular, LoginComponent},
  data () {
    return {
      panels: [
        {
          value: true,
          name: 'Популярное'
        },
        {
          value: false,
          name: 'Комплексы'
        },
        {
          value: false,
          name: 'Вопросы'
        },
        {
          value: false,
          name: 'Локации'
        },
        {
          value: false,
          name: 'Галерея'
        },
        {
          value: false,
          name: 'Отзывы'
        },
      ]
    }
  },
  methods: {
    switch_tabs (panel) {
      this.panels.forEach(item => {
        item.value = false;
      });

      panel.value = true;
    },
    logout () {
      this.$store.state.user = undefined;
      localStorage.clear()
    }
  },
  mounted() {
    document.title = 'Moscow Lazerepil | Администрация'
  }
}
</script>

<style scoped lang="scss">
@import "../assets/variables.scss";

.admin {
  width: 100%;
  padding-top: 60px;

  &__inner {
    width: 100%;
    display: grid;
    grid-template-columns: 15% 80%;
    gap: 5%;
  }
}
.panel {
  width: 100%;
  height: calc(100vh - 208px);
  position: relative;

  &__list {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 10px;
  }
  &__item {
    width: 100%;
  }
  &__button {
    width: 100%;
    padding: 15px 20px;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 500;
    text-align: left;
    transition: all .3s ease;

    &:hover {
      color: $rose_light;
      background-color: rgba(236, 35, 43, 0.2)!important;
    }
  }
  &__logout {
    width: 100%;
    padding: 15px 20px;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 500;
    text-align: left;
    color: $rose_light;
    background-color: rgba(236, 35, 43, 0.2);
    position: absolute;
    bottom: 0;
    left: 0;
    transition: all .3s ease;

    &:hover {
      background-color: rgba(236, 35, 43, 0.4);
    }
  }
}
.content {
  width: 100%;
  height: calc(100vh - 208px);
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>