<template>
  <div class="event">
    <div class="event__top_wrapper">
      <g-image
        class="event__image"
        src="https://picsum.photos/320/180/"
        alt=""
      />
      <div class="event__date">
        <span>09</span>
        <br />
        <span>Sep</span>
      </div>
    </div>
    <div>
      <div class="event__links">
        <a class="event__link" href="#">
          <font-awesome
            class="event__icon"
            :icon="['fab', 'facebook']"
            size="lg"
          />
        </a>
        <a class="event__link" href="#">
          <font-awesome
            class="event__icon"
            :icon="['fab', 'youtube']"
            size="lg"
          />
        </a>
      </div>
      <h4 class="event__title">Winter School on Internet of Things</h4>
      <p>
        The Research Laboratory of Computer Systems, Security and Networks
        (SYAD) of Alexandreio TEI of Thessaloniki and the IEEE Student Branch at
        Alexander TEI of Thessaloniki co-organize the Winter School entitled
        "Internet of Things: Security, Communication & Application Challenges"
        on Friday 15 and Saturday 16 December (10: 00-18: 00) at ATEITH
        (Filippos Hall, main corridor)...
      </p>
      <br />
      <b-button class="event__show-button"
        >Show more...</b-button
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "~/assets/scss/variables";

.event {
  display: flex;
  flex-direction: column;
  padding: 15px;
  width: 350px;

  @media (max-width: $screen-md-min) {
    margin-bottom: 60px;
  }

  &__top_wrapper {
    display: inline-block;
    position: relative;
  }

  &__date {
    position: absolute;
    top: 0;
    left: 0;
    background: $blue;
    color: white;
    padding: 10px 15px;
  }

  &__links {
    display: flex;
    margin-top: 15px;
  }

  &__link {
    margin-right: 15px;
  }

  &__icon {
    color: $dark-gray;

    &:hover {
      color: $blue;
    }
  }

  &__title {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  &__show-button {
    border-radius: 0 !important;
    background: $blue;
  }
}
</style>
