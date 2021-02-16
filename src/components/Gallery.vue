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
        img-height="480"
        :controls="true"
      >
        <b-carousel-slide
          v-for="image in $static.images.edges"
          :key="image.node.id"
          :caption="image.node.caption"
        >
          <template #img>
            <cld-image
              :alt="image.node.image + 'photo'"
              class="d-block img-fluid w-100"
              :publicId="getImageCloudinaryId(image.node.image)"
            >
              <cld-transformation
                width="1024"
                height="480"
                crop="fill"
              /> </cld-image></template
        ></b-carousel-slide>
      </b-carousel>
    </div>
  </section>
</template>


<static-query>
query {
  images: allGalleryImage {
    edges {
      node {
        id,
        image,
        caption
      }
    }
  }
}
</static-query>


<script>
export default {};
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

img {
  width: 100% !important;
}
</style>
