<template>
  <div id="app">
    <HeaderComponent />
    <MobilMenu />
    <AddReviewModal />
    <CertificateModal />
    <div id="page"><router-view /></div>
    <FooterComponent />
  </div>
</template>

<script>

import HeaderComponent from "@/components/HeaderComponent.vue";
import MobilMenu from "@/components/MobilMenu.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import AddReviewModal from "@/components/AddReviewModal.vue";
import CertificateModal from "@/components/CertificateModal.vue";

export default {
  name: 'App',
  components: {
    CertificateModal,
    AddReviewModal,
    FooterComponent,
    MobilMenu,
    HeaderComponent
  }
}
</script>

<style lang="scss">
@import "assets/main.scss";
@import "assets/variables.scss";

.router-link-exact-active {
  color: $rose_light!important;
}
</style>

<style scoped lang="scss">
#page {
  margin-top: 109px;

  @media(max-width: 1199px) {
    margin-top: 88.05px;
  }
  @media(max-width: 768px) {
    margin-top: 67.1px;
  }
}
</style>
