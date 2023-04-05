<template>
  <div id="services">
    <div class="service">
      <div class="container">
        <div class="service__inner">
          <div class="service__head">
            <h1 class="service__title">Лазерная эпиляция </h1>
            <div class="service__switchers">
              <button class="service__switcher service__switcher__woman"
                      @click="$store.commit('switch_to_woman')"
                      :style="[$store.state.service
                        ?
                        {
                          backgroundColor: '#F7F7F7',
                          color: '#8F8F8F'
                        }
                        :
                        {
                          backgroundColor: '#E73D8C',
                          color: '#FFFFFF'
                        }
                      ]"
              >
                Для женщин
              </button>
              <button class="service__switcher service__switcher__man"
                      @click="$store.commit('switch_to_man')"
                      :style="[$store.state.service
                        ?
                        {
                          backgroundColor: '#40AAA4',
                          color: '#FFFFFF'
                        }
                        :
                        {
                          backgroundColor: '#F7F7F7',
                          color: '#8F8F8F'
                        }
                      ]"
              >
                Для Мужчин
              </button>
            </div>
          </div>
          <div class="service__content">
            <WomanService v-if="!$store.state.service"/>
            <ManService v-if="$store.state.service"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ManService from "@/components/ManService.vue";
import WomanService from "@/components/WomanService.vue";

export default {
  name: "ServicesView",
  components: {WomanService, ManService}
}
</script>

<style scoped lang="scss">
@import "../assets/variables.scss";

  .service {
    width: 100%;
    padding-top: 60px;

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
    &__head {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 40px;
    }
    &__title {
      font-weight: 700;
      font-size: 32px;
      line-height: 56px;
      text-transform: uppercase;
      text-align: center;
    }
    &__switchers {
      display: flex;
      align-items: center;
      gap: 8px;

      @media (max-width: 450px) {
        flex-direction: column;
        gap: 10px;
      }
    }
    &__switcher {
      width: 175px;
      height: 51px;
      border-radius: 53px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 14px;
      line-height: 21px;
      text-transform: uppercase;
      transition: all .3s ease;

      &__woman {
        color: #8F8F8F;

        &:hover {
          background-color: $rose_light!important;
          color: #FFFFFF!important;
        }
      }
      &__man {
        color: #8F8F8F;

        &:hover {
          background-color: $blue!important;
          color: #FFFFFF!important;
        }
      }
    }
    &__content {
      width: 100%;
    }
  }
</style>