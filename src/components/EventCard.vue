<template>
  <div class="event">
    <div class="event__top_wrapper">
      <cld-image
        :publicId="getImageCloudinaryId(event.image)"
        secure="true"
        height="180"
        width="320"
        loading="lazy"
        :alt="event.title + ' cover image'"
      >
        <cld-transformation width="320" height="180" crop="fill" />
      </cld-image>
      <div class="event__date">
        <span>{{ new Date(event.date).getDate() }}</span>
        <br />
        <span>{{
          new Date(event.date).toLocaleString("default", { month: "short" })
        }}</span>
      </div>
    </div>
    <div>
      <div class="event__links">
        <a
          v-if="event.fbLink !== '#'"
          class="event__link"
          rel="noopener"
          :href="event.fbLink"
          :aria-label="event.title + ' Facebook link'"
        >
          <font-awesome
            class="event__icon"
            :icon="['fab', 'facebook']"
            size="lg"
          />
        </a>
        <a
          v-if="event.ytLink !== '#'"
          class="event__link"
          :href="event.ytLink"
          :aria-label="event.title + ' YouTube link'"
        >
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
    <b-button
      class="button--primary"
      style="width: 200px;"
      v-b-modal="'eventModal' + index"
      >Show more</b-button
    >
    <event-modal :event="event" :index="index"></event-modal>
  </div>
</template>

<script>
import EventModal from "@/components/EventModal.vue";

export default {
  components: {
    EventModal,
  },
  props: {
    index: {
      type: Number,
      required: true,
    },
    event: {
      type: Object,
      required: true,
      validator: (event) => {
        return (
          !!event.title &&
          typeof event.title == "string" &&
          !!event.description &&
          event.description.length <= 450 &&
          typeof event.description == "string" &&
          !!event.image &&
          typeof event.image == "string" &&
          !!event.date &&
          new Date(event.date) instanceof Date &&
          !!event.fbLink &&
          typeof event.fbLink == "string"
        );
      },
    },
  },
};
</script>

<style lang="scss">
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

  &__image {
    height: 180px;
    width: 320px;
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
    min-height: 24px;
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
