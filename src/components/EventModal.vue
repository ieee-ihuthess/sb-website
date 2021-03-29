<template>
  <b-modal size="lg" :id="'eventModal'+index" :title="event.title">
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
      <p>{{ event.description }}</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
        voluptatum odit deleniti impedit earum omnis consequatur tempore
        praesentium enim ducimus alias saepe dolor aliquam eos, libero nostrum
        quibusdam aliquid. Soluta!
      </p>

      <div class="event-modal__links">
        <b-button class="button--outlined event-modal__button">
          <font-awesome
            class="event-modal__link-icon"
            :icon="['fab', 'youtube']"
            size="md"
          />
          Watch At YouTube
        </b-button>
        <b-button class="button--outlined event-modal__button">
          <font-awesome
            class="event-modal__link-icon"
            :icon="['fab', 'youtube']"
            size="md"
          />
          Watch At YouTube
        </b-button>
        <b-button class="button--outlined event-modal__button">
          <font-awesome
            class="event-modal__link-icon"
            :icon="['fab', 'youtube']"
            size="md"
          />
          Watch At YouTube
        </b-button>
      </div>
      <h4 class="title event-modal__subheading">
        PHOTOS
      </h4>
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="480"
      >
        <b-carousel-slide
          img-src="https://picsum.photos/1024/480/?image=58"
        ></b-carousel-slide>
        <b-carousel-slide
          img-src="https://picsum.photos/1024/480/?image=58"
        ></b-carousel-slide>
        <b-carousel-slide
          img-src="https://picsum.photos/1024/480/?image=58"
        ></b-carousel-slide>
      </b-carousel>
    </b-container>

     <template #modal-footer>
        <div class="w-100">
          <b-button
            variant="primary"
            class="float-right button--primary"
            @click="show=false"
          >
            Close
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
        fbLink: {
          icon: "facebook",
          text: "Facebook Event",
        },
        ytLink: {
          icon: "youtube",
          text: "Watch At YouTube",
        },
        slidesLink: {
          icon: "file-powerpoint",
          text: "Get The Slides",
        },
      },
    };
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
