<template>
  <section class="section wie" id="wie">
    <h2 class="title">Women in Engineering</h2>
    <div class="wie__wrapper">
      <div class="wie__quote">
        <h3 class="quote__content">
          “Engineering is a way to express your creativity while making a meaningful impact on the world. Embrace the challenge.”
        </h3>
        <h3 class="quote__author">-Reshma Saujani</h3>
      </div>
      <p class="wie__description">
        {{ $t("wieText") }}
      </p>
      <a
        href="https://www.facebook.com/wie.ihuthess"
        target="_blank"
        class="wie__cta btn button--outlined "
      >
        <font-awesome :icon="['fab', 'facebook-f']" size="1x" class="mr-2"/>
        <span> {{$t("wieCta")}} </span>
      </a>
      <img :src="image" class="wie__image" />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      image: require("@/assets/svg/wie.svg"),
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/variables";

.wie {
  &__wrapper {
    gap: 50px;
    display: grid;
    grid-template-areas:
      "img"
      "quote"
      "description"
      "cta";
  }

  &__quote {
    grid-area: quote;

    &:after {
    content: "";
    display: block;
    width: 100px;
    padding-bottom: 15px;
    border-bottom: 2px solid $pale-blue;
}

    h3 {
      font-size: 1.3rem;
    }
  }

  &__description {
    grid-area: description;
    font-size: 1.3em !important;
  }

  &__cta {
    grid-area: cta;
    width: max-content;
  }

  &__image {
    grid-area: img;
    margin: 0 auto;
    width: 80% !important;
  }

  @media (min-width: $screen-md-min) {
    &__wrapper {
      grid-template-areas:
        ". img"
        "quote img"
        "description img"
        "cta img";
      gap: 10px;
    }

    &__description {
      font-size: 0.9rem;
    }

    &__quote h3 {
      font-size: 1rem;
    }

    &__image {
      width: 100% !important;
    }
  }

  @media (min-width: $screen-lg-min) {
    &__wrapper {
      gap: 20px;
      grid-template-rows: 50px 1fr 1fr 40px;
      grid-template-areas:
        ". img"
        "quote img"
        "description img"
        "cta img";
    }

    &__description {
      font-size: 1rem;
    }

    &__quote h3 {
      font-size: 1.3rem;
    }
  }

  @media (min-width: $screen-xl-min) {
    &__description {
      font-size: 1.5rem;
    }

    &__quote h3 {
      font-size: 1.75rem;
    }
  }
}
</style>
