<template>
  <div id="contact">
    <section class="contacts">
      <div class="container">
        <div class="contacts__inner">
          <div class="contacts__head">
            <h1 class="contacts__title">Контакты</h1>
          </div>
          <div class="contacts__content">
            <ul class="contacts__list">
              <li class="contacts__item"
                  v-for="(contact, index) of contacts"
                  :key="index"
              >
                <a :href="contact.path" class="contacts__link">
                  <img src="../assets/static-images/tel-icon.png"
                       alt=""
                       class="contacts__img"
                       v-if="contact.type === 'tel'"
                  >
                  <img src="../assets/static-images/wa-icon.png"
                       alt=""
                       class="contacts__img"
                       v-if="contact.type === 'whats-app'"
                  >
                  <img src="../assets/static-images/email-icon.png"
                       alt=""
                       class="contacts__img"
                       v-if="contact.type === 'email'"
                  >
                  {{ contact.name }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <LoactionsComponent />
    <MapComponent />
  </div>
</template>

<script>
import LoactionsComponent from "@/components/LoactionsComponent.vue";
import MapComponent from "@/components/MapComponent.vue";

export default {
  name: "ContactsView",
  components: {MapComponent, LoactionsComponent},
  data () {
    return {
      contacts: [
        {
          type: 'tel',
          name: '8-926-461-09-49',
          path: 'tel:+79264610949'
        },
        {
          type: 'whats-app',
          name: '8-926-461-09-49',
          path: 'https://wa.me/79264610949'
        },
        {
          type: 'email',
          name: 'moscow.lazerepil@yandex.ru',
          path: 'mailto:moscow.lazerepil@yandex.ru'
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/variables.scss";

.contacts {
  width: 100%;
  padding-top: 60px;

  &__inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 60px;
  }
  &__title {
    font-weight: 700;
    font-size: 32px;
    line-height: 56px;
    text-transform: uppercase;
  }
  &__content {
    width: 100%;
  }
  &__list {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
  }
  &__link {
    padding: 24px 30px;
    display: flex;
    align-items: center;
    gap: 20px;

    font-weight: 600;
    font-size: 20px;
    line-height: 22px;
    transition: all .3s ease;

    &:hover {
      color: $rose_light;
    }

    @media (max-width: 500px) {
      padding: 20px;
      gap: 15px;
      font-size: 18px;
      line-height: 20px;
    }
    @media (max-width: 374px) {
      padding: 10px 0;
      gap: 10px;
      font-size: 16px;
      line-height: 18px;
    }
  }
  &__img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}
</style>