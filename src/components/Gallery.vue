<template>
  <section class="section" id="gallery">
    <h2>Gallery</h2>
    <div>
      <b-carousel
        id="carousel-fade"
        class="carousel"
        style="text-shadow: 0px 0px 2px #000"
        fade
        indicators
        img-width="1024"
        img-height="680"
        :controls="true"
      >
        <b-carousel-slide v-for="image in images" :key="image.src"
          :caption="image.caption"
          :img-src="image.src"
        ></b-carousel-slide>
      </b-carousel>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          src: "https://picsum.photos/id/32/1024/480",
          caption: "First slide"
        },
        {
          src: "https://picsum.photos/id/33/1024/480",
          caption: "Second slide"
        },
        {
          src: "https://picsum.photos/id/34/1024/480",
          caption: "Third slide"
        },
        {
          src: "https://picsum.photos/id/35/1024/480",
          caption: "Fourth slide"
        },
        {
          src: "https://picsum.photos/id/36/1024/480",
          caption: "Fifth slide"
        },
        {
          src: "https://picsum.photos/1024/480",
          caption: "Sixth slide"
        },
      ]
    }
  }
}
</script>
<style lang="scss">
@import "~/assets/scss/variables";

.carousel {
  &-indicators {
    @media (max-width: $screen-md-min) {
      display: none;
    }
  }

  &-caption > h3 {
    @media (max-width: $screen-md-min) {
      font-size: 20px !important;
      margin-bottom: -25px;
    }
  }
}
</style>
