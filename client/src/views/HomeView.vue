<template>
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
</template>

<script>
export default {
  name: "HomeView"
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
</style>