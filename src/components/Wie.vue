<template>
  <section class="section wie" id="wie">
    <h2>Women in Engineering</h2>
    <div class="full-width">
      <div class="wie__image"></div>
      <div class="quote">
        <h3 class="quote__content">
          “I believe in the unlimited power of women in the context of science
          and engineering”
        </h3>
      </div>
      <h3 class="quote__author">-Elizabeth Holmes</h3>
    </div>
    <p class="description">
      {{ $t("wieText") }}
    </p>
  </section>
</template>

<style lang="scss" scoped>
@import "~/assets/scss/variables";

.wie {
  height: 600px;

  @media (max-width: $screen-md-min) {
    height: 550px;
  }

  &__image {
    position: absolute;
    right: 0;
    z-index: -99;
    width: 900px;
    height: 400px;
    background-repeat: no-repeat;
    background-image: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0.57) 6.72%,
        rgba(255, 255, 255, 0) 50%
      ),
      url("../assets/img/wie.jpeg");

    @media (max-width: $screen-md-min) {
      right: -55px;
      background-repeat: no-repeat;
      background-image: linear-gradient(
          90deg,
          rgba(255, 255, 255, 0.87) 6.72%,
          rgba(255, 255, 255, 0) 50%
        ),
        url("../assets/img/wie-sm.jpeg");
      width: 200px;
      height: 200px;
      object-fit: cover;
      background-size: cover;
      border-radius: 150px;
    }

    @media (min-width: $screen-sm-min) and (max-width: $screen-lg-min) {
      right: 5px;
      background-repeat: no-repeat;
      background-image: linear-gradient(
          90deg,
          rgba(255, 255, 255, 0.7) 6.72%,
          rgba(255, 255, 255, 0) 50%
        ),
        url("../assets/img/wie-sm.jpeg");
      width: 300px;
      height: 300px;
      object-fit: cover;
      background-size: cover;
      border-radius: 0 !important;
    }
  }
}

.quote {
  padding: 50px 0;
  max-width: 60%;

  @media (max-width: $screen-sm-min) {
    margin-top: 20px;
    font-size: 10px !important;
    max-width: 55%;
    padding: 0;
  }

  @media (min-width: $screen-sm-min) and (max-width: $screen-md-min) {
    margin-top: 55px;
    font-size: 10px !important;
    max-width: 55%;
    padding: 0;
  }

  &__content {
    @media (max-width: $screen-sm-min) {
      margin-top: 15px;
      font-size: 2em !important;
    }
  }

  &__author {
    margin-top: -20px;

    @media (max-width: $screen-sm-min) {
      font-size: 1.4rem;
      margin-top: 30px;
    }

    @media (min-width: $screen-sm-min) and (max-width: $screen-md-min) {
      margin-top: 30px;
    }
  }
}

.description {
  max-width: 60%;
  margin-top: 80px;
  font-size: 20px;

  @media (max-width: $screen-sm-min) {
    margin-top: 20px;
    max-width: 100%;
    font-size: 18px;
    padding: 0 6px;
  }

  @media (min-width: $screen-sm-min) and (max-width: $screen-md-min) {
    margin-top: 55px;
    max-width: 100%;
    font-size: 20px;
    padding: 0 8px;
  }
}

.full-width {
  @media (max-width: $screen-md-min) {
    width: 100vw;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    overflow: hidden;
    height: 250px;
    padding-left: 20px !important;

    @media (min-width: $screen-sm-min) and (max-width: $screen-md-min) {
      padding-left: 40px !important;
    }
  }
}
</style>
