<template>
  <div class="home">
    <section class="top">
      <div class="container">
        <div class="top__inner">
          <h1 class="top__title">
            Студия лазерной эпиляции
            <span>Moscow Lazerpil</span>
          </h1>
          <p class="top__desc">
            По окончанию курса процедур выдаем Сертификат сроком 12 месяцев. Гарантируем бесплатное обслуживание в случае если результат не достигнут
          </p>
          <router-link class="top__button" to="/contact-us">записаться на <br> консультацию</router-link>
        </div>
        <div class="top__links">
          <router-link to="/services" class="top__card top__card__woman">
            <h2 class="top__card__title">Эпиляция</h2>
            <span class="top__card__name">Женская</span>
          </router-link>
          <router-link to="/services" class="top__card top__card__man">
            <h2 class="top__card__title">Эпиляция</h2>
            <span class="top__card__name">Мужская</span>
          </router-link>
        </div>
      </div>
    </section>
    <section class="popular">
      <div class="container">
        <div class="popular__inner">
          <div class="popular__head">
            <h2 class="popular__title">ПОПУЛЯРНЫЕ УСЛУГИ</h2>
          </div>
          <div class="popular__content">
            <button class="popular__arrow popular__arrow__prev" @click="popular_slider_prev">
              <svg class="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 6L9 12L15 18" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <VueSlickCarousel class="popular__slider"
                              v-if="popular"
                              v-bind="popular_slider_settings"
                              ref="popular_slider"
            >
              <div class="popular__slide"
                   v-for="item of popular"
                   :key="item._id"
              >
<!--                    <img :src="'/popular_images/' + item.picture" alt="" class="popular__slide__img">-->
                <img src="../assets/static-images/popular-1.png" alt="" class="popular__slide__img">
                <h3 class="popular__slide__title">{{ item.name }}</h3>
                <span class="popular__slide__desc">{{ item.desc }}</span>
                <span class="popular__slide__price">{{ item.price }} ₽</span>
              </div>
            </VueSlickCarousel>
            <button class="popular__arrow popular__arrow__next" @click="popular_slider_next">
              <svg class="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
    <section class="about">
      <div class="container">
        <div class="about__inner">
          <div class="about__head">
            <h2 class="about__title">О СТУДИИ</h2>
          </div>
          <div class="about__content">
            <div class="about__image">
              <img src="../assets/static-images/home_about-1.png" alt="" class="img">
            </div>
            <div class="about__info">
              <img src="../assets/static-images/home_about-2.png" alt="" class="img">
              <p class="about__desc">
                Предлагаем вам сделать шаг
                в будущее, к использованию новых современных технологий
              </p>
              <router-link to="/about-us" class="about__link">подробнее</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="faq">
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
                                 v-for="faq of faqs"
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
    <section class="gallery">
      <div class="container">
        <div class="gallery__inner">
          <div class="gallery__head">
            <h2 class="gallery__title">Галерея</h2>
          </div>
          <div class="gallery__content">
            <div class="gallery__image"></div>
            <div class="gallery__image"></div>
            <div class="gallery__image"></div>
            <div class="gallery__image"></div>
            <div class="gallery__image"></div>
            <div class="gallery__image"></div>
          </div>
          <router-link class="gallery__link" to="/gallery">ПОКАЗАТЬ ЕЩЕ</router-link>
        </div>
      </div>
    </section>
    <section class="location">
      <div class="container">
        <div class="location__inner">
          <div class="location__head">
            <h2 class="location__title">Наши локации</h2>
          </div>
          <div class="location__content">
            <div class="location__item"
                 v-for="(loaction, index) of locations"
                 :key="index"
            >
              <button class="location__arrow location__arrow__prev"
                      @click="loaction_slider1_prev"
                      v-if="index === 0"
              >
                <svg class="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 6L9 12L15 18" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              <button class="location__arrow location__arrow__prev"
                      @click="loaction_slider2_prev"
                      v-if="index === 1"
              >
                <svg class="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 6L9 12L15 18" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              <VueSlickCarousel class="location__slider"
                                :ref="'location_slider_' + index"
                                v-if="loaction"
                                v-bind="locations_slider_settings"
              >
                <div class="location__slide"
                     v-for="(img, index) of loaction.photos"
                     :key="index"
                >
                  <img class="img" :src="img" alt="">
                </div>
              </VueSlickCarousel>
              <button class="location__arrow location__arrow__next"
                      @click="loaction_slider1_next"
                      v-if="index === 0"
              >
                <svg class="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              <button class="location__arrow location__arrow__next"
                      @click="loaction_slider2_next"
                      v-if="index === 1"
              >
                <svg class="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              <span class="location__metro"
                    :style="{color: loaction.color}"
              >
                <svg width="35" height="24" viewBox="0 0 35 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M32.592 20.6473L24.416 0L17.5 12.0698L10.612 0L2.408 20.6473H0V23.7765H12.376V20.6473H10.528L12.32 15.5064L17.5 24L22.68 15.5064L24.472 20.6473H22.624V23.7765H35V20.6473H32.592Z" :fill="loaction.color"/>
                </svg>
                {{ loaction.metro }}
              </span>
              <span class="location__address">{{ loaction.address }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="map">
      <div class="container">
        <div class="map__inner">
          <yandex-map
              :settings="ya_maps_settings"
              :coords="[55.752285, 37.618684]"
              :zoom="10"
              ymap-class="map__box"
              :controls="[]"
              :behaviors="[]"
              :scroll-zoom="true"
              :map-events="[]"
          >
            <ymap-marker
                :coords="[55.815934, 37.724068]"
                marker-id="123"
                hint-content="улица Бойцовая, дом 27"
                :balloon="{
                  header: 'Бульвар Рокассовского',
                  body: 'улица Бойцовая, дом 27',
                }"
                :icon="markerIcon"
            />
            <ymap-marker
                :coords="[55.808022, 37.635916]"
                marker-id="123"
                hint-content="улица проспект Мира, 95с1"
                :balloon="{
                  header: 'Метро Алексеевская',
                  body: 'улица проспект Мира, 95с1',
                }"
                :icon="markerIcon"
            />
          </yandex-map>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import {yandexMap, ymapMarker } from 'vue-yandex-maps';
export default {
  name: "HomeView",
  components: {
    VueSlickCarousel,
    yandexMap,
    ymapMarker
  },
  data () {
    return {
      popular_slider_settings: {
        arrows: false,
        autoplay: true,
        autoplaySpeed: 6000,
        slidesToScroll: 1,
        slidesToShow: 4,
        swipeToSlide: true,
        infinite: true,
        responsive: [
          {
            breakpoint: 980,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 720,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      },
      popular: [
        {
          _id: 1,
          name: 'Комплекс "Лайт"',
          desc: '(бикини тотально, ноги полностью, пальчики на ногах)',
          price: 3800,
          picture: '../assets/static-images/popular-1.png'
        },
        {
          _id: 2,
          name: 'Комплекс "топ"',
          desc: '(подмышечные впадины, бикини тотально, голени+колени)',
          price: 3800,
          picture: '../assets/static-images/popular-1.png'
        },
        {
          _id: 3,
          name: 'Комплекс "все тело"',
          desc: '(подмышечные впадины, бикини тотальное, ноги полностью, пальчики на ногах, руки полностью,\n' +
              'пальчики на руках)',
          price: 3800,
          picture: '../assets/static-images/popular-1.png'
        },
        {
          _id: 4,
          name: 'Комплекс "классика"',
          desc: '(подмышечные впадины, бикини тотальное, ноги полностью, пальчики на ногах)',
          price: 3800,
          picture: '../assets/static-images/popular-1.png'
        },
        {
          _id: 5,
          name: 'Сертификат',
          desc: 'Подарочный сертификат на посещение',
          price: 3800,
          picture: '../assets/static-images/popular-1.png'
        }
      ],
      faqs: [
        {
          _id: 1,
          question: 'Как воздействует лазер?',
          answer: [
            {
              type: 'list',
              value: [
                  'Лазерная манипула производит световые лучи, вспышки. Что создает направленное воздействие лазера на фолликулы, в результате чего в структуре волоса разрушается пигмент меланин и нарушается кровоснабжение фолликула, волос отмирает и выпадает.',
                  'Действие лазера направлено на разрушение волос, находящихся в стадии роста, и не распространяется на неактивные «спящие» волосяные фолликулы.',
                  'Последующие процедуры проводятся, в интервале 3-6 недель, когда оставшиеся волоски переходят в активную стадию роста.'
              ]
            },
            {
              type: 'text',
              value: 'В 21 веке Диодный лазер считается самым современным и передовым методом удаления волос'
            }
          ]
        },
        {
          _id: 2,
          question: 'Преимущества диодной эпиляции?',
          answer: [
            {
              type: 'text',
              value: 'На сегодняшний день в индустрии существует множество способов удаления нежелательных волос:'
            },
            {
              type: 'list',
              value:[
                  'шагаринг',
                  'воск',
                  'электроэпиляция',
                  'фотоэпиляция',
                  'лазерная эпиляция',
              ]
            },
            {
              type: 'text',
              value: 'Где представлены три различающихся по длине волны лазера:'
            },
            {
              type: 'list',
              value: [
                  'Александритовый (755 нм)',
                  'Диодный (808 нм)',
                  'Неодимовый (1064 нм)'
              ]
            },
            {
              type: 'text',
              value: 'Передовым по праву считается диодный он является самым современным последним лазером в линейке удаления волос, что даёт ему ряд преимуществ:'
            },
            {
              type: 'list',
              value: [
                'отсутствие риска ожогов кожи, при использовании диодного лазера нет такого нагрева кожи, как у остальных лазеров',
                'способность лазера удалять волосы любого цвета (кроме седых), на всех фото типах кожи: от бледной до очень смуглой',
                'нет необходимости отращивания волос перед процедурой',
                'нет ограничений в бритье между процедурами',
                'отсутствие вросших волос',
                'скорость проведения процедуры',
                'безболезненность процедуры (что на данный момент является самым безболезненным способом удаления волос)',
                'по окончанию курса вы получаете гладкую кожу, результат сохраняется на долгие годы'
              ]
            },
          ]
        },
        {
          _id: 3,
          question: 'Противопоказания для процедуры лазерной эпиляции?',
          answer: [
            {
              type: 'list',
              value: [
                  'склонность к образованию келоидных рубцов;',
                  'простуда, повышенная температура тела;',
                  'онкология, в этом случае процедуры можно проходить с согласованием лечащего врача;',
                  'кожные заболевания в стадии обострения и/или острое гнойное воспаление в зоне воздействия;',
                  'герпес в активной форме;',
                  'ранний период после оперативного вмешательства, до 12 месяцев (в зависимости от вида оперативного вмешательства);',
                  'беременность, кормление грудью;',
                  'сахарный диабет;',
                  'золотые нити в зоне проведения процедуры;',
                  'психические расстройства, эпилепсия;',
                  'повышенное артериальное давление (гипертензия 2-3 стадии);',
                  'алкогольное опьянение, а также прием алкоголя накануне процедуры;',
                  'наркотическое опьянение;',
                  'известная повышенная чувствительность к лазерному излучению;',
                  'прием препаратов тетрациклинового ряда, ретиноидов, сульфаниламидов, нейролептиков и НПВС (длительный прием);',
                  ' прием препаратов изотретиноина менее чем за 6 месяцев до процедуры;',
                  'применение топических ретиноидов менее чем за 2 недели до процедуры;',
                  'татуировка или татуаж в зоне проведения процедуры.;',
              ]
            }
          ]
        },
        {
          _id: 4,
          question: 'Что такое курс лазерной эпиляции, и сколько нужно процедур?',
          answer: [
            {
              type: 'list',
              value: [
                  'после каждой процедуры эпиляции удаляется не менее 10% волос',
                  'курс эпиляции повторяют до полного прекращения роста волос, количество необходимых процедур и интервалы между ними зависят от гормонального фона, структуры волос клиента, подбираются индивидуально для каждого клиента',
                  'для разных участков тела может потребоваться разное количество процедур, в среднем курс составляет от 8 до 14 процедур',
                  'Интервал между процедурами составляет от 3 до 6 недель',
                  'достигнутый результат сохраняется на долгие годы',
                  'поддерживающие процедуры'
              ]
            },
            {
              type: 'text',
              value: 'Учитывая фактор что гормональный фон может влиять на появление новых фолликул, в период от 1 до 8 лет.\n' +
                  '          Может возникнуть потребность в поддерживающих процедурах 1-3 процедуры в год для сохранения достигнутого результата.'
            },
            {
              type: 'list',
              value: [
                  'Период появления новых фолликул индивидуальны он зависит от генетических особенностей организма и его гормонального фона.'
              ]
            },
            {
              type: 'text',
              value: 'Главное вы должны знать, что это не старые фолликулы, они уже удалены. Пробуждаются только спящие новые'
            }
          ]
        },
        {
          _id: 5,
          question: 'Подготовка к процедуре?',
          answer: [
            {
              type: 'text',
              value: 'Как подготовиться к процедуре лазерной эпиляции:'
            },
            {
              type: 'list',
              value: [
                  'Напоминаем! ознакомиться со списком противопоказаний, убедится, что у вас их нет!',
                  'Отказаться от посещений пляжа и солярия за 2 недели до процедуры',
                  'за 1 день или в день процедуры необходимо тщательно побрить эпилируемые зоны обычным бритвенным станком (внимание зона должна быть тщательно выбрита, ведь лазер воздействует на волосы длинной 0,0 мм)',
              ]
            }
          ]
        },
        {
          _id: 6,
          question: 'После процедуры?',
          answer: [
            {
              type: 'text',
              value: 'После процедуры требуется не сложный восстановительный период:'
            },
            {
              type: 'list',
              value: [
                  'воздержитесь от глубокого пилинга',
                  'на протяжении прохождения всего курса лазерной эпиляции нельзя использовать процедуры эпиляции удаления волос с корнем (воск, пинцет, шугаринг или механический эпилятор)',
                  'в течение 3-х дней не загорать отказаться от посещений пляжа и солярия',
                  'В течение 2-х дней отказаться от бани, сауны, хамам, и бассейна',
              ]
            },
          ]
        },
        {
          _id: 7,
          question: 'Мифы о лазерной эпиляции?',
          answer: [
            {
              type: 'text',
              value: 'Самые популярные мифы, об лазерной эпиляции, которые мы сейчас вам развеем с помощью диодного лазера:'
            },
            {
              type: 'list',
              value: [
                  'повреждение внутренних органов',
                  'облучение радиацией, появление новообразований',
                  'рубцы',
                  'врастание волос',
                  'дикая боль во время процедуры',
              ]
            },
            {
              type: 'text',
              value: 'А сейчас информация для тех, кто сомневается:'
            },
            {
              type: 'text-bold',
              value: 'Внутренние органы останутся в полной неприкосновенности.'
            },
            {
              type: 'text',
              value: 'Нужно понимать, что вспышка лазера проникает неглубоко, максимум на 1-3 мм, ровно на глубину волосяной луковицы, толщина кожи человека составляет 5 мм поэтому исключается риск повреждения каких-либо органов.'
            },
            {
              type: 'text-bold',
              value: 'Лазер часто путают с рентгеном.'
            },
            {
              type: 'text',
              value: 'приписывая ему все минусы радиационного облучения. Но дело в том, что радиация используется,\n' +
                  '        например, при флюорографии, МРТ, лечении рака, но никогда в эстетической или пластической медицине.'
            },
            {
              type: 'text-bold',
              value: 'Также ошибочно представление о том, что лазерные процедуры способствуют врастанию волос.'
            },
            {
              type: 'text',
              value: 'На самом деле, все с точностью до наоборот — косметологи советуют эпиляцию лазером для борьбы с этим дефектом. Что касается рубцов, то лазерный луч не нож, он не повреждает кожу. Максимум, о чем можно говорить, это незначительное покраснение в обработанной зоне, которое проходит в течение дня.'
            },
            {
              type: 'text',
              value: 'Безболезненность процедуры'
            },
            {
              type: 'list',
              value: [
                  'сапфировое охлаждение охлаждения манипулы: -2 -6 °C',
                  'водяное охлаждение TEC + воздушное делает процедуру удаления волос безопасной и безболезненной (что на данный момент является самым безболезненным способом удаления волос)'
              ]
            },
            {
              type: 'text-bold',
              value: 'Как видим, процедура максимально безопасна, при отсутствии противопоказаний и правильном проведении процедуры она не носит организму никакого вреда'
            },
            {
              type: 'picture',
              value: '../assets/static-images/faq-picture.png'
            },
          ]
        },
      ],
      locations_slider_settings: {
        arrows: false,
        autoplay: true,
        autoplaySpeed: 6000,
        slidesToScroll: 1,
        slidesToShow: 1,
        swipeToSlide: true,
        infinite: true
      },
      locations: [
        {
          metro: 'Бульвар Рокассовского',
          address: 'улица Бойцовая, дом 27',
          color: '#EC232B',
          photos: [
              'https://i.ibb.co/DgmCpy6/location1.png',
              'https://i.ibb.co/qCWJGP2/location2.png'
          ]
        },
        {
          metro: 'Алексеевская',
          address: 'улица Проспект Мира, 95с1',
          color: '#F58220',
          photos: [
            'https://i.ibb.co/qCWJGP2/location2.png',
            'https://i.ibb.co/DgmCpy6/location1.png'
          ]
        },
      ],
      ya_maps_settings: {
        apiKey: '77dd6bb7-fc4c-47a7-923b-cd8636995f55',
        lang: 'ru_RU',
        coordorder: 'latlong',
        enterprise: false,
        version: '2.1'
      },
      markerIcon: {
        layout: 'default#imageWithContent',
        imageHref: 'https://i.ibb.co/DgmCpy6/location1.png',
        imageSize: [38, 38],
        imageOffset: [0, 0],

      }
    }
  },
  methods: {
    popular_slider_prev () {
      this.$refs.popular_slider.prev()
    },
    popular_slider_next () {
      this.$refs.popular_slider.next()
    },
    loaction_slider1_prev () {
      this.$refs.location_slider_0[0].prev()
    },
    loaction_slider1_next () {
      this.$refs.location_slider_0[0].next();
    },
    loaction_slider2_prev () {
      this.$refs.location_slider_1[0].prev()
    },
    loaction_slider2_next () {
      this.$refs.location_slider_1[0].next();
    }
  },
  mounted () {
    //this.$store.dispatch('get_popular');
  }
}
</script>

<style scoped lang="scss">
@import "../assets/variables.scss";

.top {
  width: 100%;

  &__inner {
    width: 100%;
    height: 600px;
    position: relative;
    padding: 40px 0;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 30px;
    background-image: url('../assets/static-images/top_image.png');
    background-repeat: no-repeat;
    background-position: 100% 0%;
    background-size: contain;

    @media(max-width: 640px) {
      background-image: none;
    }
  }
  &__title {
    font-weight: 400;
    font-size: 34px;
    line-height: 50px;

    span {
      color: $rose_light;
      display: block;
    }

    @media(max-width: 1199px) {
      font-size: 28px;
      line-height: 44px;
    }
  }
  &__desc {
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    max-width: 428px;
    color: rgba(10, 10, 10, 0.78);
  }
  &__image {
    width: 100%;
  }
  &__img {
    width: 100%;
    height: auto;
  }
  &__button {
    position: absolute;
    bottom: 80px;
    left: calc(50% - 80px);
    background: transparent;
    backdrop-filter: blur(1.09091px);
    border-radius: 50%;
    width: 160px;
    height: 160px;
    border: 1px solid $rose_light;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    color: $rose_light;
    transition: all .3s ease;

    &:hover {
      color: #FFFFFF;
      background: $rose_light;
    }

    @media(max-width: 550px) {
      //bottom: 50px;
      width: 120px;
      height: 120px;
      left: calc(50% - 60px);
      font-size: 12px;
      line-height: 18px;
    }
  }
  &__links {
    margin-top: 5px;
    width: 100%;
    display: flex;
    align-items: start;

    @media(max-width: 550px) {
      flex-direction: column;
    }
  }
  &__card {
    width: 100%;
    height: calc(600px - 274px);
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: calc(40%);
    padding: 40px 30px;
    transition: background-color .3s ease;

    @media(max-width: 768px) {
      gap: 30%;
      height: 226px;
    }

    &__woman {
      background-color: $rose_light;

      &:hover {
        background-color: $rose_dark;
      }

      .top__card__title {
        font-weight: 700;
        font-size: 20px;
        line-height: 20px;
        color: #FFFFFF;
        text-transform: uppercase;
      }
      .top__card__name {
        font-weight: 400;
        font-size: 28px;
        line-height: 60px;
        color: #FFFFFF;
        letter-spacing: -1px;
        text-decoration-line: underline;
        text-transform: uppercase;
        align-self: center;
      }
    }
    &__man {
      background-color: #FAFAFA;

      &:hover {
        background-color: #F0F0F0;
      }

      .top__card__title {
        font-weight: 700;
        font-size: 20px;
        line-height: 20px;
        text-transform: uppercase;
      }
      .top__card__name {
        font-weight: 400;
        font-size: 28px;
        line-height: 60px;
        letter-spacing: -1px;
        text-decoration-line: underline;
        text-transform: uppercase;
        align-self: center;
      }
    }
  }
}
.popular {
  width: 100%;
  margin-top: 120px;

  &__inner {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 60px;
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
    position: relative;
  }
  &__slider {
    width: 100%;
  }
  &__arrow {
    position: absolute;
    top: 119px;
    background: #FFFFFF;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
    z-index: 1;

    .icon {
      transition: all .3s ease;
    }
    &__prev {
      left: -18px;

      &:hover {
        .icon {
          stroke: $rose_light;
        }
      }
    }
    &__next {
      right: -18px;

      &:hover {
        .icon {
          stroke: $rose_light;
        }
      }
    }
  }
  &__slide {
    height: 460px;
    padding: 0 10px;
    display: flex!important;
    flex-direction: column;
    align-items: start;
    gap: 16px;

    @media(max-width: 500px) {
      height: fit-content;
      padding: 0 2px;
    }

    &__img {
      width: 100%;
      height: auto;
      margin-bottom: 14px;
    }
    &__name {
      font-weight: 700;
      font-size: 18px;
      line-height: 130%;
      text-transform: uppercase;
      color: $rose_light;
    }
    &__desc {
      font-weight: 500;
      font-size: 14px;
      line-height: 130%;
    }
    &__price {
      font-weight: 700;
      font-size: 20px;
      line-height: 130%;
    }
  }
}
.about {
  width: 100%;
  margin-top: 120px;

  &__inner {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 60px;
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
  &__image {
    width: 100%;

    .img {
      width: 100%;
      height: auto;
      border-radius: 30px;
    }
  }
  &__info {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 46px;

    .img {
      width: 100%;
      height: auto;
      border-radius: 30px;
    }

    @media (max-width: 1199px) {
      gap: 30px;
    }
  }
  &__desc {
    width: 100%;
    font-weight: 400;
    font-size: 32px;
    line-height: 44px;
    max-width: 563px;

    @media (max-width: 1199px) {
      max-width: none;
    }
    @media (max-width: 1024px) {
      font-size: 24px;
      line-height: 36px;
    }
  }
  &__link {
    display: block;
    width: 100%;
    background-color: #FFFFFF;
    border: 1px solid $rose_light;
    border-radius: 53px;
    padding: 16px 0;
    text-align: center;
    transition: all .3s ease;
    font-weight: 700;
    font-size: 14px;
    line-height: 21px;
    text-transform: uppercase;
    color: $rose_light;

    &:hover {
      background-color: $rose_light;
      color: #FFFFFF;
    }
  }
}
.faq {
  width: 100%;
  margin-top: 120px;

  &__inner {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 60px;
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
.gallery {
  width: 100%;
  margin-top: 120px;

  &__inner {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 60px;
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
    height: 744px;
    display: grid;
    grid-template-columns: 49% 23.75% 23.75%;
    grid-column-gap: 1.5%;
    grid-row-gap: 2.65%;
    grid-template-rows: 31.7% 26% 37%;

    @media(max-width: 1024px) {
      height: 600px;
    }
  }
  &__image {
    border-radius: 50px;
    background-image: url('../assets/static-images/gallery.png');
    background-repeat: no-repeat;
    background-size: cover;

    &:nth-child(1) {
      grid-row-start: 1;
      grid-row-end: 3;
    }
    &:nth-child(2) {
      grid-row-start: 1;
      grid-row-end: 3;
    }
    &:nth-child(6) {
      grid-row-start: 2;
      grid-row-end: 4;
    }
  }
  &__link {
    align-self: center;
    background: #FFFFFF;
    border: 1px solid $rose_light;
    border-radius: 53px;
    padding: 16px 32px 14px;
    color: $rose_light;
    font-weight: 700;
    font-size: 14px;
    line-height: 21px;
    text-transform: uppercase;
    transition: all .3s ease;

    &:hover {
      color: #FFFFFF;
      background: $rose_light;
    }
  }
}
.location {
  width: 100%;
  margin-top: 120px;

  &__inner {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 60px;
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
    justify-content: center;
    flex-wrap: wrap;
    column-gap: 20px;
    row-gap: 40px;
  }
  &__item {
    width: 100%;
    max-width: 590px;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 10px;
    position: relative;
  }
  &__arrow {
    position: absolute;
    top: 35%;
    background: #FFFFFF;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
    z-index: 1;

    .icon {
      transition: all .3s ease;
    }
    &__prev {
      left: 20px;

      &:hover {
        .icon {
          stroke: $rose_light;
        }
      }
    }
    &__next {
      right: 20px;

      &:hover {
        .icon {
          stroke: $rose_light;
        }
      }
    }
  }
  &__slider {
    width: 100%;
    margin-bottom: 30px;
  }
  &__slide {
    height: auto;
    width: 100%;
    border-radius: 30px;

    .img {
      width: 100%;
      height: auto;
      border-radius: 30px;
    }
  }
  &__metro {
    display: flex;
    align-items: start;
    gap: 10px;
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
  }
  &__address {
    font-weight: 700;
    font-size: 16px;
    line-height: 160%;
  }
}
.map {
  width: 100%;
  margin-top: 120px;

  &__inner {
    height: 600px;
    .ymap-container {
      height: 600px;
        -moz-border-radius: 14px 14px 14px 14px;
        -webkit-border-radius: 14px 14px 14px 14px;
        -khtml-border-radius: 14px 14px 14px 14px;
        border-radius: 14px 14px 14px 14px;
        overflow: hidden;
        position: relative;
        -webkit-mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC);
    }
  }
  &__marker {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    color: #FFFFFF;
    background-color: $rose_light;
  }
}

</style>

<style>
.map__box {
  height: 600px;
  border-radius: 30px;
}
</style>