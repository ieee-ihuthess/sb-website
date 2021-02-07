<template>
  <div class="event">
    <div class="event__top_wrapper">
      <g-image
        class="event__image"
        :src="event.image"
        :alt="event.title + ' cover image'"
      />
      <div class="event__date">
        <span>{{ event.date.getDay() }}</span>
        <br />
        <span>{{
          event.date
            .toLocaleString("default", { month: "long" })
            .substring(0, 3)
        }}</span>
      </div>
    </div>
    <div>
      <div class="event__links">
        <a class="event__link" :href="event.fbLink">
          <font-awesome
            class="event__icon"
            :icon="['fab', 'facebook']"
            size="lg"
          />
        </a>
        <a v-if="event.ytLink" class="event__link" :href="event.ytLink">
          <font-awesome
            class="event__icon"
            :icon="['fab', 'youtube']"
            size="lg"
          />
        </a>
      </div>
      <h4 class="event__title">{{ event.title }}</h4>
      <p>{{ event.description }}</p>
      <br />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    event: {
      type: Object,
      required: true,
      validator: (event) => {
        return (
          !!event.title &&
          typeof event.title == "string" &&
          !!event.description && event.description.length <= 400 &&
          typeof event.description == "string" &&
          !!event.image &&
          typeof event.image == "string" &&
          !!event.date &&
          event.date instanceof Date &&
          !!event.fbLink &&
          typeof event.fbLink == "string"
        );
      },
    },
  },
};
</script>

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
