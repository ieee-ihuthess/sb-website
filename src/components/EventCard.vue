<template>
  <div class="event">
    <div class="event__top_wrapper">
      <cld-image
        class="event__image"
        :publicId="getImageCloudinaryId(event.image)"
        secure="true"
        loading="lazy"
        :alt="event.title + ' cover image'"
      >
        <cld-transformation width="320" height="180" crop="fill" />
      </cld-image>
      <div class="event__date">
        <span>{{ new Date(event.date).getDate() }}</span>
        <br />
        <span>{{ new Date(event.date).toLocaleString("default", { month: "short" }) }}</span>
      </div>
      <div class="event__upcoming-banner" v-if="new Date(event.date) > new Date()">
        {{ $t("upcoming") }}
      </div>
    </div>
    <div class="event__info-container">
      <h4 class="event__title">
        {{ event.title }}
      </h4>
      <p class="event__description" v-html="getPreviewHtml(event.content, event.title)"></p>
      <br />
    </div>
    <b-button
      v-if="new Date(event.date) < new Date()"
      class="button--primary event__show-button"
      v-b-modal="'eventModal' + index"
      >{{ $t("showMore") }}</b-button
    >
    <b-button
      v-else
      class="button--secondary event__show-button"
      style="border: none !important;"
      v-b-modal="'eventModal' + index"
    >
      {{ $t("join") }}
    </b-button>
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
    },
  },
  methods: {
    getPreviewHtml(content, title) {
      const HTMLtext = content.replaceAll("<p>", "").replaceAll("</p>", "");
      const maxTextLength = 400;
      const totalTextLength = (content + title).length;
      const diff = maxTextLength - totalTextLength;
      if (diff < 0) {
        return HTMLtext.slice(0, diff) + "..."; //remove chars from the end of paragraph
      } else return HTMLtext;
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
  width: 300px;
  height: 615px;
  justify-content: space-around;

  @media (max-width: $screen-md-min) {
    margin-bottom: 60px;
  }

  &__top_wrapper {
    display: inline-block;
    position: relative;
    width: 100%;
  }

  &__date {
    position: absolute;
    top: 0;
    left: 0;
    background: $blue;
    color: white;
    padding: 10px 15px;
  }

  &__upcoming-banner {
    padding: 0.5rem;
    color: white;
    position: absolute;
    bottom: 0;
    right: 0;
    background: $pale-blue;
    font-weight: 600;
    text-transform: capitalize;
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

  &__info-container {
    display: flex;
    flex-direction: column;
  }

  &__title {
    margin: 1rem 0;
    font-size: 1.4em;
  }

  &__description {
    p {
      margin-bottom: 0 !important;
    }
  }

  &__show-button {
    width: 200px;
    margin-top: auto;
    text-transform: capitalize;
  }

  @media (min-width: $screen-lg-min) {
    width: 350px;
    height: 600px;

    &__image {
      height: 180px;
      width: 320px;
    }
  }
}
</style>
