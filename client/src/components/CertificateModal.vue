<template>
<div class="modal" v-if="$store.state.certificate">
  <button class="modal__close" @click="$store.commit('set_certificate')">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z" fill="#000000"></path></g></svg>
  </button>
  <img src="../assets/static-images/certificate.png" alt="" class="modal__img">
</div>
</template>

<script>
export default {
  name: "CertificateModal"
}
</script>

<style scoped lang="scss">
  .modal {
    position: fixed;
    z-index: 999999;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FAFAFA;

    &__close {
      position: absolute;
      top: 20px;
      right: 20px;
    }
    &__img {
      width: 60%;
      height: auto;

      @media (max-width: 550px) {
        width: 80%;
      }
    }
  }
</style>