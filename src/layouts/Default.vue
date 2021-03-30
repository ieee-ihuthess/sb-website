<template>
  <div class="layout">
    <the-header />
    <b-container class="container--large">
      <slot />
    </b-container>
    <the-footer />
  </div>
</template>

<script>
import TheHeader from "~/components/Header.vue";
import TheFooter from "~/components/Footer.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
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

body {
  margin: 0;
  padding: 0;
  line-height: 1.5;
  position: relative;
}

.layout {
  margin: 0 auto;
}

.container--large {
  @media (min-width: 1400px) {
    max-width: 1240px !important;
  }
}
</style>
