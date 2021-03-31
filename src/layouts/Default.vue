<template>
  <div>
    <transition name="slide-fade">
      <loading-overlay v-if="mountOverlay" />
    </transition>
    <div :class="showContent ? 'layout' : 'layout layout--hidden'">
      <the-header />
      <b-container class="container--large">
        <slot />
      </b-container>
      <the-footer />
    </div>
  </div>
</template>

<script>
import TheHeader from "~/components/Header.vue";
import TheFooter from "~/components/Footer.vue";
import LoadingOverlay from "~/components/LoadingOverlay.vue";

export default {
  mounted() {
    this.mountOverlay = true;
    this.handleLoad();
  },
  methods: {
    handleLoad() {
      setTimeout(() => {
        this.showContent = true;
        this.mountOverlay = false;
      }, this.loaderMS);
    },
  },
  data() {
    return {
      mountOverlay: false,
      showContent: false,
      loaderMS: 2000,
    };
  },
  components: {
    TheHeader,
    TheFooter,
    LoadingOverlay,
  },
};
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
@import "~/assets/scss/variables";
@import "~/assets/scss/animations";

body {
  margin: 0;
  padding: 0;
  line-height: 1.5;
  position: relative;
}

.layout {
  margin: 0 auto;
  transition: opacity 0.5s;

  &--hidden {
    opacity: 0;
  }
}

.container--large {
  @media (min-width: 1400px) {
    max-width: 1240px !important;
  }
}
</style>
