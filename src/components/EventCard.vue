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
    <div class="event__info-container">
      <h4 class="event__title">
        {{ event.title }}
      </h4>
      <p
        class="event__description"
        v-html="getPreviewHtml(event.content, event.title)"
      ></p>
      <br />
    </div>
    <b-button
      class="button--primary event__show-button"
      v-b-modal="'eventModal' + index"
      >Show more</b-button
    >
    <event-modal :event="event" :index="index"></event-modal>
  </div>
</template>

<script>
import EventModal from "@/components/EventModal.vue";
import shave from "shave";

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
      const HTMLtext = content.replace('<p>', '').replace('</p>', '');
      let substringLength = 0;
      if (title.length < 29) substringLength = 420;
      else if (title.length >= 29 && title.length < 58) substringLength = 350;
      else substringLength = 300;
      if (content.length <= substringLength) return HTMLtext;
      else return HTMLtext.substring(0, substringLength) + '...';
    }
  }
};
</script>

<style lang="scss">
@import "~/assets/scss/variables";

.event {
  display: flex;
  flex-direction: column;
  padding: 15px;
  width: 350px;
  height: 600px;

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
  }
}
</style>
