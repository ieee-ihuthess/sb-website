<template>
  <section class="section" id="latest">
    <h2>Latest Events</h2>
    <div class="events">
      <event-card v-for="event in events" :key="event" />
    </div>
  </section>
</template>

<script>
import EventCard from "@/components/EventCard.vue";

export default {
  components: {
    EventCard,
  },
  data() {
    return {
      events: [1, 2, 3],
    };
  },
};
</script>
<style lang="scss">
.events {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 20px;
}
</style>
