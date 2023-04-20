<template>
  <div id="about">
    <section class="top">
      <div class="container">
        <div class="top__inner">
          <div class="top__head">
            <h1 class="top__title">
              О НАс
            </h1>
          </div>
          <div class="top__content">
            <video class="top__video"
                    :controls="!video_controls"
                    autoplay
                    muted
                    loop
                    playsinline
            >
              <source src="../assets/static-video/about_video.mp4">
            </video>
            <button class="top__button" @click="set_controls">
              <svg width="24" height="24"
                   fill="#D2317C"
                   viewBox="0 0 24 24"
                   xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M20.991,10H19.42a1.039,1.039,0,0,1-.951-.674l-.005-.013a1.04,1.04,0,0,1,.2-1.146l1.11-1.11a1.01,1.01,0,0,0,0-1.428l-1.4-1.4a1.01,1.01,0,0,0-1.428,0l-1.11,1.11a1.04,1.04,0,0,1-1.146.2l-.013,0A1.04,1.04,0,0,1,14,4.579V3.009A1.009,1.009,0,0,0,12.991,2H11.009A1.009,1.009,0,0,0,10,3.009v1.57a1.04,1.04,0,0,1-.674.952l-.013,0a1.04,1.04,0,0,1-1.146-.2l-1.11-1.11a1.01,1.01,0,0,0-1.428,0l-1.4,1.4a1.01,1.01,0,0,0,0,1.428l1.11,1.11a1.04,1.04,0,0,1,.2,1.146l0,.013A1.039,1.039,0,0,1,4.58,10H3.009A1.009,1.009,0,0,0,2,11.009v1.982A1.009,1.009,0,0,0,3.009,14H4.58a1.039,1.039,0,0,1,.951.674l0,.013a1.04,1.04,0,0,1-.2,1.146l-1.11,1.11a1.01,1.01,0,0,0,0,1.428l1.4,1.4a1.01,1.01,0,0,0,1.428,0l1.11-1.11a1.04,1.04,0,0,1,1.146-.2l.013.005A1.039,1.039,0,0,1,10,19.42v1.571A1.009,1.009,0,0,0,11.009,22h1.982A1.009,1.009,0,0,0,14,20.991V19.42a1.039,1.039,0,0,1,.674-.951l.013-.005a1.04,1.04,0,0,1,1.146.2l1.11,1.11a1.01,1.01,0,0,0,1.428,0l1.4-1.4a1.01,1.01,0,0,0,0-1.428l-1.11-1.11a1.04,1.04,0,0,1-.2-1.146l.005-.013A1.039,1.039,0,0,1,19.42,14h1.571A1.009,1.009,0,0,0,22,12.991V11.009A1.009,1.009,0,0,0,20.991,10ZM12,15a3,3,0,1,1,3-3A3,3,0,0,1,12,15Z"></path>
                </g>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
    <section class="lazerpil">
      <div class="container">
        <div class="lazerpil__inner">
          <div class="lazerpil__head">
            <h2 class="lazerpil__title">
              Cтудия Лазерная эпиляции Moscow Lazerepil
            </h2>
          </div>
          <div class="lazerpil__content">
            <p class="lazerpil__text">
              Предлагаем вам сделать шаг в будущее, к использованию новых современных технологий, получить свой персональный опыт и сравнить результат!
              В 21 веке Диодный Лазер считается самым современным и передовым методом удаления волос, несёт безопасный безболезненный результат, который обеспечит вам гладкую кожу на долгие годы.
            </p>
            <p class="lazerpil__text">
              Вы забудете о старых устаревших методов депиляции: воск, шугаринг, крем, эпилятор, бритва, ведь эти решения являются временными, требует от вас: отращивания волос, регулярного поддержания результата, постоянных денежных трат, времени, являются болезненными процедурами, которые могут доставлять раздражение и дискомфорт. Вам нужен один курс лазерной эпиляции, все эти заботы лишние траты вы оставите позади.
              Рекомендем вам ознакомиться с отзывами мнением наших клиентов, вам всё станет понятно.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="evolution">
      <div class="container">
        <div class="evolution__inner">
          <div class="evolution__head">
            <h2 class="evolution__title">
              Эволюция технологий
            </h2>
          </div>
          <div class="evolution__content">
            <svg class="evolution__arrow" width="1362" height="24" viewBox="0 0 1362 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1361.06 13.0607C1361.65 12.4749 1361.65 11.5251 1361.06 10.9393L1351.51 1.3934C1350.93 0.807611 1349.98 0.807611 1349.39 1.3934C1348.81 1.97919 1348.81 2.92893 1349.39 3.51472L1357.88 12L1349.39 20.4853C1348.81 21.0711 1348.81 22.0208 1349.39 22.6066C1349.98 23.1924 1350.93 23.1924 1351.51 22.6066L1361.06 13.0607ZM0 13.5H1360V10.5H0V13.5Z" fill="#6392A6"/>
            </svg>
            <span class="evolution__result">Результат сохраняется</span>
            <div class="evolution__animated">
              <svg width="24" height="24"
                   viewBox="0 0 91 91" id="Layer_1"
                   version="1.1"
                   xml:space="preserve"
                   xmlns="http://www.w3.org/2000/svg"
                   xmlns:xlink="http://www.w3.org/1999/xlink"
                   fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <g>
                    <path class="st0" d="M36.6,43.5C31.1,49,25.7,54.8,20.7,60.8c-5.1,6.2-12,13.7-12.7,21.9c-0.1,1.3,1.5,2.5,2.7,2 c7.7-3.1,13.1-11.4,18.6-17.4c6.7-7.3,13.6-14.4,20.9-21c2.8-2.5,1.9-7.3-1.2-9.1C36.3,30,27,18.8,19.7,6.2 C15-1.9,2.2,5.6,7.2,13.5C14.8,25.7,24.6,35.8,36.6,43.5z"></path>
                    <path class="st0" d="M72.9,43.5C67.3,49,62,54.8,57,60.8C52,67.1,45,74.5,44.3,82.7c-0.1,1.3,1.5,2.5,2.7,2 c7.7-3.1,13.1-11.4,18.6-17.4c6.7-7.3,13.6-14.4,20.9-21c2.8-2.5,1.9-7.3-1.2-9.1C72.6,30,63.3,18.8,56,6.2 c-4.7-8.1-17.5-0.6-12.5,7.3C51.1,25.7,60.9,35.8,72.9,43.5z"></path>
                  </g>
                </g>
              </svg>
            </div>
            <ul class="evolution__list">
              <li class="evolution__item">
                <span class="evolution__name">
                  Шугаринг
                </span>
                <span class="evolution__desc">
                  1370-1330 годах до нашей эры
                </span>
                <img src="../assets/static-images/evolution-1.png" alt="" class="evolution__img">
                <span class="evolution__dashed"></span>
                <span class="evolution__time">
                  2 недели
                </span>
              </li>
              <li class="evolution__item">
                <span class="evolution__name">
                  Крем
                </span>
                <span class="evolution__desc">
                  В 1884 году
                </span>
                <img src="../assets/static-images/evolution-2.png" alt="" class="evolution__img">
                <span class="evolution__dashed"></span>
                <span class="evolution__time">2 недели</span>
              </li>
              <li class="evolution__item">
                <span class="evolution__name">
                  Бритва
                </span>
                <span class="evolution__desc">
                  В 1915 году
                </span>
                <img src="../assets/static-images/evolution-4.png" alt="" class="evolution__img">
                <span class="evolution__dashed"></span>
                <span class="evolution__time">
                  1-3 дня
                </span>
              </li>
              <li class="evolution__item">
                <span class="evolution__name">
                  Эпилятор
                </span>
                <span class="evolution__desc">
                  В 1940 году
                </span>
                <img src="../assets/static-images/evolution-5.png" alt="" class="evolution__img">
                <span class="evolution__dashed"></span>
                <span class="evolution__time">
                  1-3 дня
                </span>
              </li>
              <li class="evolution__item">
                <span class="evolution__name">
                  Лазер
                </span>
                <span class="evolution__desc">
                  В 1940 году
                </span>
                <img src="../assets/static-images/evolution-3.png" alt="" class="evolution__img">
                <span class="evolution__dashed"></span>
                <span class="evolution__time">
                  2 года
                </span>
              </li>
              <li class="evolution__item">
                <span class="evolution__name evolution__name__active">
                  Диодный лазер
                </span>
                <span class="evolution__desc">
                  В 2022 году
                </span>
                <img src="../assets/static-images/evolution-6.png" alt="" class="evolution__img">
                <span class="evolution__dashed evolution__dashed__active"></span>
                <span class="evolution__time">
                  2-8 лет
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section class="why">
      <div class="container">
        <div class="why__inner">
          <div class="why__head">
            <h2 class="why__title">
              Почему мы?
            </h2>
          </div>
          <div class="why__content">
            <ul class="why__list">
              <li class="why__item"
                  v-for="(item, index) of why"
                  :key="index"
              >
                <span class="why__text">{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section class="warranty">
      <div class="container">
        <div class="warranty__inner">
          <div class="warranty__head">
            <h2 class="warranty__title">
              Гарантии
            </h2>
          </div>
          <div class="warranty__content">
            <div class="warranty__images">
              <img src="../assets/static-images/warranty-cert.png" alt="Сертификат на гарантию" class="warranty__image">
              <img src="../assets/static-images/warranty-print.png" alt="Гарантия 12 месяцев" class="warranty__print">
            </div>
            <div class="warranty__desc">
              <p class="warranty__text">
                В нашей студии мы предоставляем гарантию на результат!
                По окончанию курса выдаём клиенту Сертификат сроком 12 месяцев. Гарантируем вам бесплатное обслуживание в случае если результат не достигнут!
                Гарантия предоставляется при соблюдении графика проведения процедур и рекомендация специалиста
                В Зависимости от уровня гормонального фона клиента перечень зон в гарантии может увеличиваться и сокращаться.
                В гарантии не входят высокогорманальные области: бикини тотальное, ореолы, индивидуальные зоны лица. На случаи беременности и приёма гормональных препаратов гарантия не распространяется.
              </p>
            </div>
          </div>
          <router-link to="/contact-us" class="warranty__button">
            записаться на консультацию
          </router-link>
        </div>
      </div>
    </section>
    <div class="equip">
      <div class="container">
        <div class="equip__inner">
          <div class="equip__head">
            <h2 class="equip__title">
              Оборудование
            </h2>
          </div>
          <div class="equip__content">
            <div class="equip__box">
              <div class="equip__picture">
                <img src="../assets/static-images/equip-1.png" alt="" class="equip__img">
              </div>
              <div class="equip__info">
                <span class="equip__name">
                  Передовой диодный лазер HONKON 808KK с мощность манипулы 1200 вт выпуска 2022 года
                </span>
                <ul class="equip__list">
                  <li class="equip__item"
                      v-for="(item, index) of equip_list_1"
                      :key="index"
                  >
                    <span class="equip__text">{{ item }}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="equip__box">
              <div class="equip__picture">
                <img src="../assets/static-images/certificate.jpeg" alt="" class="equip__img" @click="show_certificate">
              </div>
              <div class="equip__info">
                <span class="equip__name">
                  Технические характеристики:
                </span>
                <ul class="equip__list">
                  <li class="equip__item"
                      v-for="(item, index) of equip_list_2"
                      :key="index"
                  >
                    <span class="equip__text">{{ item }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FaqComponent />
    <GalleryComponent />
    <LocationsComponent />
    <MapComponent />
  </div>
</template>

<script>
import FaqComponent from "@/components/FaqComponent.vue";
import GalleryComponent from "@/components/GalleryComponent.vue";
import LocationsComponent from "@/components/LocationsComponent.vue";
import MapComponent from "@/components/MapComponent.vue";

export default {
  name: "AboutView",
  components: {MapComponent, LocationsComponent, GalleryComponent, FaqComponent},
  data () {
    return {
      video_controls: false,
      why: [
          'Мы не просто обещаем вам результат, а гарантируем его! По окончанию курса выдаём клиенту Сертификат сроком 12 месяцев. Гарантируем вам бесплатное обслуживание в случае если результат не достигнут',
          'Передовой современный диодный лазер с манипулой диодного стека производства Германия сертификат соответствия на территории РФ',
          'Уютный интерьер и система управления климатом. Ароматный кофе, чай и прохладительные напитки',
          'Опытный квалифицированный дипломированный персонал, мастер сопровождает клиента от начала до окончания курса лазерной эпиляции.',
          'Созданы условия для детей: мультфильмы, раскраски, игрушки',
          ' В Москве открыто две студии в 10 минутах от метро Бульвар Рокоссовского улица Бойцовая дом 27 и в 3 минутах от метро Алексеевская улица Проспект мира 95стр 1',
      ],
      equip_list_1: [
          'манипулой диодного стека производства Германия',
          'сертификат соответствии на территории РФ',
          'безопасность: лазер не оставляет рубцов и ожогов, что позволяет использовать его даже летом',
          'сапфировое охлаждение охлаждения манипулы: -2 -6 °C',
          'водяное охлаждение TEC + воздушное делает процедуру удаления волос безопасной и безболезненной',
          'не нужно использовать гель во время процедуры',
          'скорость проведения процедуры',
          'за счет большой площади поверхности сапфира на манипуле 12 х 23 мм², процедура проходит быстро',
          'удаляет волосы на всех типах кожи, в том числе и на смуглой коже',
      ],
      equip_list_2: [
          'Тип лазера: диодный',
          'Длина волны лазера: 808 нм',
          'Мощность излучателя: 1200 Вт',
          'Размер лазерного пятна: 12 х 23 мм²',
          'Система охлаждения: воздух + TEС+водяное охлаждение',
          'Температура охлаждения манипулы: -2 -6 °C',
          'Энергия: 1-120 Дж / см²',
          'Частота: 1-10 Гц',
          'Ширина импульса лазера: 2,88-400 мс',
      ]
    }
  },
  methods: {
    set_controls () {
      this.video_controls = !this.video_controls
    },
    show_certificate () {
      this.$store.commit('set_certificate')
    }
  },
  mounted() {
    document.title = 'Moscow Lazerepil | О Нас'
  }
}
</script>

<style scoped lang="scss">
@import "../assets/variables.scss";

.top {
  width: 100%;
  padding-top: 60px;

  &__inner {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 60px;

    @media(max-width: 550px) {
      gap: 40px;
    }
  }
  &__head {
    align-self: center;
    width: fit-content;
  }
  &__title {
    font-weight: 700;
    font-size: 32px;
    line-height: 56px;
    text-transform: uppercase;
  }
  &__content {
    width: 100%;
    position: relative;
  }
  &__video {
    width: 100%;
    border-radius: 30px;
  }
  &__button {
    position: absolute;
    top: 40px;
    right: 40px;
  }
}
.lazerpil {
  width: 100%;
  margin-top: 120px;

  @media(max-width: 550px) {
    margin-top: 60px;
  }

  &__inner {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 60px;

    @media(max-width: 550px) {
      gap: 40px;
    }
  }
  &__head {
    align-self: center;
    width: fit-content;
  }
  &__title {
    font-weight: 600;
    font-size: 28px;
    line-height: 130%;
    text-transform: uppercase;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 22px;
      line-height: 38px;
    }
  }
  &__content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 30px;
  }
  &__text {
    font-weight: 400;
    font-size: 16px;
    line-height: 30px;
  }
}
.why {
  width: 100%;
  margin-top: 120px;

  @media(max-width: 550px) {
    margin-top: 60px;
  }

  &__inner {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 60px;

    @media(max-width: 550px) {
      gap: 40px;
    }
  }
  &__head {
    align-self: center;
    width: fit-content;
  }
  &__title {
    font-weight: 600;
    font-size: 28px;
    line-height: 130%;
    text-transform: uppercase;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 22px;
      line-height: 38px;
    }
  }
  &__content {
    width: 100%;
  }
  &__list {
    width: 100%;
    list-style: disc;
    display: flex;
    flex-direction: column;
    align-items: start;
    padding-left: 20px;
    gap: 5px;
  }
  &__item {
    width: 100%;
  }
  &__text {
    font-weight: 400;
    font-size: 16px;
    line-height: 30px;
  }
}
.warranty {
  width: 100%;
  margin-top: 120px;

  @media(max-width: 550px) {
    margin-top: 60px;
  }

  &__inner {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 60px;

    @media(max-width: 550px) {
      gap: 40px;
    }
  }
  &__head {
    align-self: center;
    width: fit-content;
  }
  &__title {
    font-weight: 600;
    font-size: 28px;
    line-height: 130%;
    text-transform: uppercase;
    text-align: center;
    color: $rose_light;

    @media (max-width: 768px) {
      font-size: 22px;
      line-height: 38px;
    }
  }
  &__content {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;

    @media (max-width: 800px) {
      flex-wrap: wrap;
    }
  }
  &__images {
    position: relative;
    max-width: 480px;
    width: 100%;
  }
  &__image {
    width: 100%;
    border-radius: 30px;
  }
  &__print {
    position: absolute;
    top: -20px;
    left: -20px;
    max-width: 208px;
    max-height: 208px;
    width: 100%;
    height: 100%;

    @media (max-width: 800px) {
      max-width: 128px;
      max-height: 128px;
    }
  }
  &__desc {
    max-width: 575px;
    width: 100%;

    @media (max-width: 800px) {
      max-width: none;
    }
  }
  &__text {
    width: 100%;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: #0A0A0A;
  }
  &__button {
    background-color: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(1.09091px);
    width: 160px;
    height: 160px;
    margin-top: 10px;
    border-radius: 50%;
    border: 1px solid $rose_light;
    display: flex;
    align-items: center;
    text-align: center;
    transition: all .3s ease;
    color: $rose_light;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    text-transform: uppercase;
    align-self: center;

    &:hover {
      background-color: $rose_light;
      color: #FFFFFF;
    }

    @media (max-width: 550px) {
      width: 120px;
      height: 120px;
      font-size: 10px;
      line-height: 16px;
    }
  }
}
.equip {
  width: 100%;
  margin-top: 120px;

  @media(max-width: 550px) {
    margin-top: 60px;
  }

  &__inner {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 60px;

    @media(max-width: 550px) {
      gap: 40px;
    }
  }
  &__head {
    align-self: center;
    width: fit-content;
  }
  &__title {
    font-weight: 600;
    font-size: 28px;
    line-height: 130%;
    text-transform: uppercase;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 22px;
      line-height: 38px;
    }
  }
  &__content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 10px;

    @media (max-width: 768px) {
      gap: 40px;
    }
  }
  &__box {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 20px;
    @media (max-width: 980px) {
      flex-direction: column;
      align-items: start;
    }
  }
  &__picture {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 980px) {
      align-self: center;
      order: 2;
    }
  }
  &__img {
    max-width: 252px;
    height: auto;
  }
  &__info {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 40px;
    padding: 40px 30px;
    @media (max-width: 980px) {
      order: 1;
    }
    @media (max-width: 768px) {
      padding: 0;
      gap: 20px;
    }
  }
  &__list {
    padding-left: 20px;
    list-style: disc;
    display: flex;
    flex-direction: column;
    align-items: start;
  }
  &__item {
    width: 100%;
  }
  &__name {
    font-weight: 700;
    font-size: 16px;
    line-height: 160%;
  }
  &__text {
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
  }
  &__list {
    width: 100%;
    list-style: disc;
    display: flex;
    flex-direction: column;
    align-items: start;
    padding-left: 20px;
    gap: 5px;
  }
  &__item {
    width: 100%;
  }
  &__text {
    font-weight: 400;
    font-size: 16px;
    line-height: 30px;
  }
}
.evolution {
  width: 100%;
  margin-top: 120px;
  overflow: hidden;

  @media(max-width: 550px) {
    margin-top: 60px;
  }

  &__inner {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 60px;

    @media(max-width: 550px) {
      gap: 40px;
    }
  }
  &__head {
    align-self: center;
    width: fit-content;
  }
  &__title {
    font-weight: 600;
    font-size: 28px;
    line-height: 130%;
    text-transform: uppercase;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 22px;
      line-height: 38px;
    }
  }
  &__content {
    position: relative;
    width: 100%;
    overflow-x: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
  &__animated {
    position: sticky;
    z-index: 2;
    top: 20%;
    left: 90%;
    width: 24px;
    animation: translate 2s linear infinite alternate;

    @keyframes translate {
      0% {
        transform: translateX(0px);
      }
      100% {
        transform: translateX(20px);
      }
    }
  }
  &__list {
    position: relative;
    z-index: 1;
    width: fit-content;
    display: flex;
    align-items: start;
    gap: 46px;
  }
  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 170px;
  }
  &__name {
    font-weight: 700;
    font-size: 20px;
    line-height: 130%;
    color: #525252;
    margin-bottom: 15px;
  }
  &__desc {
    height: 42px;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    text-align: center;
    color: #848484;
    margin-bottom: 25px;
  }
  &__img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin-bottom: 3px;
  }
  &__dashed {
    height: 199px;
    width: 0;
    border: 1px dashed #6392A6;

    &__active {
      border-color: $rose_light;
    }
  }
  &__time {
    font-weight: 700;
    font-size: 24px;
    line-height: 130%;
    color: #525252;
  }
  &__arrow {
    position: absolute;
    top: 185px;
    left: 0;
  }
  &__result {
    position: sticky;
    top: 65%;
    left: 35%;
    font-weight: 600;
    font-size: 28px;
    line-height: 130%;
    color: $blue;
    padding: 10px;
    background: #FFFFFF;
    z-index: 2;

    @media(max-width: 550px) {
      font-size: 22px;
      left: 10%;
    }
    @media(max-width: 390px) {
      font-size: 18px;
      left: 5%;
    }
  }
}
</style>