<template>
<div id="reviews">
  <section class="top">
    <div class="container">
      <div class="top__inner">
        <img src="../assets/static-images/reviews-top.png" alt="" class="top__img">
        <h1 class="top__title">ОТЗЫВЫ</h1>
      </div>
    </div>
  </section>
  <section class="status">
    <div class="container">
      <div class="status__inner">
        Общий рейтинг:
      </div>
    </div>
  </section>
  <section class="add" v-if="$store.state.locations.length > 0">
    <div class="container">
      <div class="add__inner">
        <div class="add__head">
          Наши отзывы на
          <svg width="87" height="25" viewBox="0 0 87 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M82.23 21.7692C83.9221 21.7692 85.1207 21.4626 86.0137 20.8023V17.807C85.0972 18.4438 83.9926 18.8447 82.4415 18.8447C79.8329 18.8447 78.7518 16.8164 78.7518 13.6089C78.7518 10.2362 80.0679 8.51456 82.465 8.51456C83.8751 8.51456 85.2617 9.00984 85.9902 9.48153V6.36834C85.2147 5.94381 83.8751 5.63721 82.042 5.63721C77.3652 5.63721 74.9446 9.00984 74.9446 13.7268C74.9681 18.8919 77.3417 21.7692 82.23 21.7692ZM59.3633 20.4013V17.406C58.2352 18.1843 56.3081 18.8683 54.5455 18.8683C51.8664 18.8683 50.8558 17.5947 50.6913 15.0004H59.5278V13.0664C59.5278 7.6655 57.1541 5.63721 53.5114 5.63721C49.0462 5.63721 46.9311 9.05701 46.9311 13.7504C46.9311 19.1513 49.5867 21.7692 54.24 21.7692C56.5666 21.7692 58.2822 21.1324 59.3633 20.4013ZM25.8269 5.92023V12.0523H20.9387V5.92023H17.2725V21.4626H20.9387V14.9768H25.8269V21.4626H29.4931V5.92023H25.8269ZM46.0145 18.5381H44.3929V5.92023H33.7234V7.24098C33.7234 11.0381 33.4883 15.9438 32.1958 18.5381H31.0207V25.0004H34.4049V21.4626H42.6068V25.0004H45.991V18.5381H46.0145ZM71.0434 21.4626H75.2031L69.3278 13.09L74.4981 5.92023H70.8084L65.6381 13.09V5.92023H61.9719V21.4626H65.6381V13.8211L71.0434 21.4626ZM53.4174 8.51456C55.227 8.51456 55.7911 10.024 55.7911 11.9815V12.2881H50.6913C50.7853 9.81172 51.6783 8.51456 53.4174 8.51456ZM40.7267 18.5381H35.5565C36.567 16.2032 36.849 11.9579 36.849 9.26927V8.79757H40.7267V18.5381Z" fill="#0A0A0A"/>
            <path d="M14.2183 21.4622H10.4816V2.90093H8.81298C5.75781 2.90093 4.15973 4.43395 4.15973 6.72168C4.15973 9.31601 5.26429 10.5188 7.54391 12.0518L9.42402 13.3254L4.01872 21.4622H0L4.86477 14.1981C2.06811 12.1934 0.493527 10.2358 0.493527 6.93394C0.493527 2.80659 3.36068 0 8.78948 0H14.1948V21.4622H14.2183Z" fill="#FC3F1D"/>
          </svg>
        </div>
        <div class="add__links">
          <a class="add__link"
             :href="item.path"
             v-for="item of $store.state.locations"
             :key="item._id"
             target="_blank"
          >
            <svg width="29" height="22" viewBox="0 0 29 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M27.0048 18.6916L20.2304 0.625244L14.5 11.1864L8.7928 0.625244L1.9952 18.6916H0V21.4297H10.2544V18.6916H8.7232L10.208 14.1933L14.5 21.6252L18.792 14.1933L20.2768 18.6916H18.7456V21.4297H29V18.6916H27.0048Z" :fill="item.color"/>
            </svg>
            <span class="metro" :style="{color: item.color}">{{ item.metro }} </span>
            <span class="address">{{ item.address }}</span>
          </a>
        </div>
        <div class="add__button">
          <button class="button" @click="$store.commit('set_location_modal')">
            написать отзыв
          </button>
        </div>
      </div>
    </div>
  </section>
  <section class="reviews" v-if="$store.state.reviews.length > 0">
    <div class="container">
      <div class="reviews__inner">
        <ul class="reviews__list">
          <li class="reviews__item"
              v-for="review of $store.state.reviews"
              :key="review._id"
          >
            <div class="reviews__card">
              <div class="reviews__card__head">
                <span class="reviews__card__name">{{ review.author }}</span>
                <div class="reviews__card__info">
                  <div class="reviews__card__count">
                    <svg v-for="item of review.count" :key="item" width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.02957 0.33042C6.17764 -0.110141 6.82234 -0.110139 6.97041 0.330421L8.16576 3.88704C8.23197 4.08407 8.42189 4.21746 8.63617 4.21746H12.5044C12.9836 4.21746 13.1828 4.81024 12.7951 5.08252L9.66571 7.28064C9.4923 7.4024 9.41978 7.61824 9.48597 7.81526L10.6814 11.3719C10.8294 11.8125 10.3078 12.1788 9.92015 11.9065L6.79072 9.70845C6.61736 9.58661 6.38261 9.58661 6.20926 9.70845L3.0798 11.9065C2.69215 12.1788 2.17057 11.8125 2.31864 11.3719L3.51398 7.81526C3.5802 7.61824 3.50766 7.4024 3.3343 7.28064L0.204841 5.08252C-0.182806 4.81024 0.0164195 4.21746 0.495579 4.21746H4.36381C4.57809 4.21746 4.76801 4.08407 4.83422 3.88704L6.02957 0.33042Z" fill="#FFD353"/>
                    </svg>
                  </div>
                  <div class="reviews__card__date">{{ review.date }}</div>
                </div>
              </div>
              <div class="reviews__card__body">
                <p class="reviews__card__review">{{ review.review }}</p>
                <span class="reviews__card__link">Отзыв на <a :href="review.path">Яндекс.Карты</a></span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</div>
</template>

<script>
export default {
  name: "ReviewsView",
  methods: {
    math_status () {
      const reviews = this.$store.state.reviews;
      const count__arr = [];

      reviews.forEach(review => {
        count__arr.push(review.count)
      })

      console.log(count__arr)
    }
  },
  mounted () {
    this.$store.dispatch('get_reviews');
    this.$store.dispatch('get_locations');
    document.title = 'Moscow Lazerepil | Отзывы'
    this.math_status();
  }
}
</script>

<style scoped lang="scss">
@import "../assets/variables.scss";

  .top{
    width: 100%;
    padding-top: 60px;

    &__inner {
      position: relative;
      border-radius: 30px;
      box-shadow: inset 0px -200px 40px rgba(0, 0, 0, 0.28);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &__img {
      width: 100%;
      border-radius: 30px;
    }
    &__title {
      position: absolute;
      top: 40%;
      font-weight: 700;
      font-size: 32px;
      line-height: 56px;
      text-transform: uppercase;
      color: #FFFFFF;

    }
  }
  .add {
    width: 100%;
    margin-top: 50px;

    &__inner {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 30px;
    }
    &__head {
      display: flex;
      align-items: end;
      gap: 10px;

      font-weight: 400;
      font-size: 20px;
      line-height: 22px;
    }
    &__links {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 20px;
      flex-wrap: wrap;
    }
    &__link {
      padding: 10px 30px;
      border-radius: 30px;
      display: flex;
      align-items: start;
      flex-wrap: wrap;
      gap: 10px;
      transition: all .3s ease;

      .metro {
        font-weight: 600;
        font-size: 16px;
        line-height: 28px;
      }
      .address {
        font-weight: 700;
        font-size: 16px;
        line-height: 28px;
      }

      &:nth-child(1) {
        background: rgba(245, 130, 32, 0.1);
        &:hover {
          background: rgba(245, 130, 32, 0.2);
        }
      }
      &:nth-child(2) {
        background: rgba(236, 35, 43, 0.1);
        &:hover {
          background: rgba(236, 35, 43, 0.2);
        }
      }
    }
    &__button {
      width: 100%;
      margin-top: 30px;
      border-top: 1px solid #DCDCDC;
      padding-top: 40px;
      display: flex;
      justify-content: center;

      .button {
        border-radius: 53px;
        padding: 16px 32px 14px;
        background: $rose_light;
        color: #FFFFFF;
        font-weight: 700;
        font-size: 14px;
        line-height: 21px;
        text-transform: uppercase;
      }
    }
  }
  .reviews {
    width: 100%;
    margin-top: 120px;

    @media(max-width: 550px) {
      margin-top: 60px;
    }

    &__list {
      width: 100%;
      display: flex;
      align-items: start;
      flex-wrap: wrap;
      gap: 20px;
    }
    &__item {
      height: fit-content;
    }
    &__card {
      background: #FAFAFA;
      box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05);
      border-radius: 30px;
      padding: 24px 30px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      max-width: 590px;
      width: 100%;
      height: fit-content;

      &__head {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 4px;
      }
      &__name {
        font-weight: 600;
        font-size: 16px;
        line-height: 22px;
      }
      &__info {
        display: flex;
        align-items: center;
        gap: 15px;
      }
      &__date {
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
      }
      &__body {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 20px;
      }
      &__review {
        font-weight: 400;
        font-size: 16px;
        line-height: 26px;
      }
      &__link {
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;

        a {
          color: $rose_light
        }
      }
    }
  }
</style>