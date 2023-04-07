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
  <section class="reviews" v-if="$store.state.reviews">
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
                  <div class="reviews__card__date">{{ review.date.split('T')[0] }}</div>
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
  mounted () {
    this.$store.dispatch('get_reviews');
  }
}
</script>

<style scoped lang="scss">
@import "../assets/variables.scss";

  .top{
    width: 100%;
    margin-top: 60px;

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