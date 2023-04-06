<template>
  <section class="faq" v-if="$store.state.faqs">
    <div class="container">
      <div class="faq__inner">
        <div class="faq__head">
          <h2 class="faq__title">ВОПРОСЫ И ОТВЕТЫ</h2>
        </div>
        <div class="faq__content">
          <v-expansion-panels class="faq__list"
                              :accordion="true"
          >
            <v-expansion-panel class="faq__item"
                               v-for="faq of $store.state.faqs"
                               :key="faq._id"
            >
              <v-expansion-panel-header>
                <span class="faq__name">{{ faq.question }}</span>
                <template v-slot:actions>
                  <div class="faq__icon">
                    <svg class="icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M30 10L10 30" stroke="#40AAA4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M10 10L30 30" stroke="#40AAA4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                </template>
              </v-expansion-panel-header>
              <v-expansion-panel-content class="faq__body">
                <div class="faq__body__item"
                     v-for="(item, index) of faq.answer"
                     :key="index"
                >
                  <h3 class="faq__bold__text" v-if="item.type === 'text-bold'">{{ item.value }}</h3>
                  <span class="faq__text" v-if="item.type === 'text'">{{ item.value }}</span>
                  <ul class="faq__body__list" v-if="item.type === 'list'">
                    <li class="faq__body__item"
                        v-for="(string, index) of item.value"
                        :key="index"
                    >
                      {{ string }}
                    </li>
                  </ul>
                  <img src="../assets/static-images/faq-picture.png" alt="" class="faq__img" v-if="item.type === 'picture'">
                </div>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FaqComponent",
  mounted() {
    this.$store.dispatch('get_faqs');
  }
}
</script>

<style scoped lang="scss">
@import "../assets/variables.scss";
.faq {
  width: 100%;
  margin-top: 120px;

  @media (max-width: 550px) {
    margin-top: 60px;
  }

  &__inner {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 60px;
    @media (max-width: 550px) {
      gap: 40px;
    }
  }
  &__head  {
    width: fit-content;
    align-self: center;
  }
  &__title {
    font-weight: 600;
    font-size: 28px;
    line-height: 32px;
    text-transform: uppercase;

    @media(max-width: 768px) {
      font-size: 22px;
      line-height: 38px;
    }
  }
  &__content {
    width: 100%;
    display: flex;
    align-items: start;
    gap: 20px;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
  &__list {
    width: 100%;
    display: flex!important;
    flex-direction: column;
    align-items: start;
    gap: 20px;

    .v-expansion-panel::before {
      box-shadow: none!important;
    }
    .v-expansion-panel-header {
      overflow: hidden;
      width: 100%;
      display: flex!important;
      align-items: center;
      justify-content: space-between;
      gap: 30px;
      padding: 40px 40px 40px 30px!important;

      @media(max-width: 550px) {
        padding: 20px 0!important;
      }
    }
    .v-expansion-panel-header > :not(.v-expansion-panel-header__icon) {
      flex: none!important;
    }
    .v-expansion-panel:not(:first-child)::after {
      border-top: none!important;
    }
    .v-expansion-panel-header--active {
      .faq__icon {
        transform: rotate(0deg);
      }
    }
  }
  &__item {
    width: 100%;
    background-color: #FAFAFA!important;
    padding: 0 20px!important;
    border-radius: 20px!important;
  }
  &__name {
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: $blue;
    width: calc(100% - 70px);
    text-align: left;

    @media(max-width: 768px) {
      font-size: 20px;
      line-height: 24px;
    }
    @media(max-width: 550px) {
      font-size: 16px;
      line-height: 20px;
    }
  }
  &__icon {
    width: 40px;
    height: 40px;
    transform: rotate(45deg);
    transition: all .3s ease;

    .icon {
      width: 40px;
      height: 40px;

      @media (max-width: 550px) {
        width: 30px;
        height: 30px;
      }
    }

    @media (max-width: 550px) {
      width: 30px;
      height: 30px;
    }
  }
  &__bold__text {
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;
  }
  &__text {
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
  }
  &__body__list {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 5px;
    list-style: disc;
    padding-left: 20px;
  }
  &__body__item {
    width: 100%;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
  }
  &__img {
    display: block;
    margin: 0 auto;
    max-width: 768px;
    width: 100%;
    height: auto;
    border-radius: 30px;
  }
}
</style>