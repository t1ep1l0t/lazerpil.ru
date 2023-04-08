<template>
<div class="modal" v-if="$store.state.location_modal">
  <div class="modal__inner">
    <button class="modal__close" @click="$store.commit('set_location_modal')">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 6L6 18" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6 6L18 18" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <div class="modal__head">
      <h2 class="modal__title">
        Выберете локацию, для которой хотите оставить отзыв
      </h2>
    </div>
    <div class="modal__content">
      <a class="modal__link"
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
  </div>
</div>
</template>

<script>
export default {
  name: "AddReviewModal"
}
</script>

<style scoped lang="scss">
@import "../assets/variables.scss";

.modal {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;

  &__inner {
    background: #FFFFFF;
    position: relative;
    padding: 30px 30px 40px;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
  &__close {
    position: absolute;
    top: 30px;
    right: 30px;
  }
  &__head {
    width: 100%;
  }
  &__title {
    max-width: 451px;
    text-align: center;
    font-weight: 600;
    font-size: 20px;
    line-height: 150%;
  }
  &__content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 20px;
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
}
</style>