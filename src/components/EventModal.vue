<template>
  <b-modal size="lg" :id="'eventModal' + index" :title="event.title">
    <template #modal-header="{ close }">
      <cld-image
        :publicId="getImageCloudinaryId(event.image)"
        class="event-modal__cover"
        secure="true"
        height="230"
        width="774"
        loading="lazy"
        :alt="event.title + ' cover image'"
      >
        <cld-transformation width="774" height="250" crop="fill" />
        <div class="event-modal__header">
          <h3 class="event-modal__title">{{ event.title }}</h3>
          <h4 class="event-modal__date">
            {{ new Date(event.date).toLocaleDateString($i18n.locale) }}
          </h4>
        </div>
      </cld-image>
      <b-button class="event-modal__close" @click="close()">
        <font-awesome class="question__icon" icon="times" size="lg" />
      </b-button>
    </template>
    <b-container class="event-modal__content">
      <p v-html="event.content"></p>
      <div class="event-modal__links">
        <a
          v-for="(link, service) in validLinks"
          :key="link"
          class="btn button--outlined event-modal__button mr-2"
          :href="link"
          target="_blank"
        >
          <font-awesome
            class="event-modal__link-icon"
            :icon="[linkInfo[service]['iconType'], linkInfo[service]['icon']]"
            size="md"
          />
          {{ $t(linkInfo[service]["text"]) }}
        </a>
      </div>
    </b-container>

    <template #modal-footer="{close}">
      <div class="w-100">
        <b-button
          variant="primary"
          class="float-right button--primary"
          style="text-transform: capitalize"
          @click="close()"
        >
          {{ $t("close") }}
        </b-button>
      </div>
    </template>
  </b-modal>
</template>

<script>
export default {
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
  data() {
    return {
      linkInfo: {
        facebook: {
          icon: "facebook",
          iconType: "fab",
          text: "FB Event",
        },
        youtube: {
          icon: "youtube",
          iconType: "fab",
          text: "watch",
        },
        slides: {
          icon: "file-powerpoint",
          iconType: "fas",
          text: "Slides",
        },
      },
    };
  },
  computed: {
    validLinks() {
      let validLinksObject = {};
      for (const [service, linkValue] of Object.entries(
        this.$props.event.links
      )) {
        if (linkValue !== "#") validLinksObject[service] = linkValue;
      }
      return validLinksObject;
    },
  },
};
</script>

<style lang="scss">
@import "~/assets/scss/variables";

.modal-header {
  padding: 0 !important;
}

.event-modal {
  &__cover {
    width: 100%;
    background: #191148;
    position: relative;

    > img {
      opacity: 0.1 !important;
      filter: grayscale(100%) !important;
    }
  }

  &__header {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    justify-content: flex-end;
  }

  &__close {
    border-radius: 100%;
    opacity: 0.7;
    position: absolute;
    top: 1rem;
    right: 1rem;
  }

  &__title {
    color: white;
    font-weight: 600;
  }

  &__date {
    color: white;
    font-weight: 300;
    font-size: 1.3em;
  }

  &__content {
    margin: 1rem auto;
  }

  &__links {
    display: inline-block;

    button {
      margin: 5px;
    }
  }

  &__button {
    &:hover > svg {
      color: white !important;
    }

    &:focus > svg {
      color: white !important;
    }
  }

  &__link-icon {
    color: $blue;
    margin-right: 5px;
  }

  &__subheading {
    font-size: 1.4em !important;
    margin: 3rem 0 !important ;
  }
}
</style>
