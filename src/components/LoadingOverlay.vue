<template>
  <div class="overlay">
    <img :src="logosrc" class="overlay__logo slide-in-top" />
    <b-spinner class="overlay__spinner" type="grow" label="loading"></b-spinner>
  </div>
</template>

<script>
export default {
  props: {},
  mounted() {
    this.path_length = this.$refs["path"].getTotalLength();
  },
  data() {
    return {
      logosrc: require("@/assets/svg/overlay_logo.svg"),
    };
  },
};
</script>

<style lang="scss">
@import "~/assets/scss/animations";
@import "~/assets/scss/variables";

.overlay {
  background: $dark-blue;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1021; // header's default is 1020
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &__logo {
    margin-bottom: 30px;
    width: 100px !important;
    height: 100px;
    fill: white;
  }

  &__spinner {
    background: white !important;
  }
}
</style>
