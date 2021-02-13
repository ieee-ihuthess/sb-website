<template>
  <section class="section" id="latest">
    <h2>Latest Events</h2>
    <div class="events">
      <event-card
        v-for="event in $static.events.edges"
        :key="event.node.id"
        :event="event.node"
      />
    </div>
  </section>
</template>


<static-query>
query {
  events: allEvent {
    edges {
      node {
        id,
        title,
        description,
        image,
        date,
        fbLink,
        ytLink
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
.events {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 20px;
  justify-items: center;
}
</style>
