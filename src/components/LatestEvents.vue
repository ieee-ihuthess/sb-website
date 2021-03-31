<template>
  <section class="section" id="latest">
    <h2 class="title">{{ $t("newsAndEvents") }}</h2>
    <div class="events">
      <ClientOnly>
        <carousel
          :nav="false"
          :navText="['prev', 'next']"
          :responsive="{
            0: { items: 1, center: true, dots: false, nav: true, margin: -35 },
            400: { items: 1, center: true, dots: false, nav: true, margin: -85 },
            600: { items: 1, center: true, dots: false, nav: true, margin: -125 },
            768: { items: 2, dots: true, nav: false, margin: -40 },
            1200: { items: 3, dots: true, nav: false, margin: -50 },
          }"
        >
          <event-card
            v-for="(event, index) in $static.events.edges"
            :key="event.node.id"
            :event="event.node"
            :index="index"
          />
        </carousel>
      </ClientOnly>
    </div>
  </section>
</template>

<static-query>
query {
  events: allEvent(sortBy: "date", order: DESC) {
    edges {
      node {
        id,
        title,
        content,
        image,
        date,
        links {
          youtube,
          facebook,
          slides
        },
        registrationLink
      }
    }
  }
}
</static-query>

<script>
import EventCard from "@/components/EventCard.vue";

export default {
  components: { EventCard },
};
</script>

<style lang="scss">
// .events {
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
//   grid-gap: 20px;
//   justify-items: center;
// }
</style>
