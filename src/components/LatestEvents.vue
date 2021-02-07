<template>
  <section class="section" id="latest">
    <h2>Latest Events</h2>
    <div class="events">
      <event-card v-for="event in events" :key="event.title" :event="event" />
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
      events: [
        {
          title: "Winter School on Internet of Things - 1",
          description:
            "The Research Laboratory of Computer Systems, Security and Networks " +
            "(SYAD) of Alexandreio TEI of Thessaloniki and the IEEE Student Branch at " +
            "Alexander TEI of Thessaloniki co-organize the Winter School entitled " +
            "Internet of Things: Security, Communication & Application Challenges " +
            "on Friday 15 and Saturday 16 December (10: 00-18: 00) at ATEITH " +
            "(Filippos Hall, main corridor)...",
          image: "https://picsum.photos/320/180/",
          date: new Date(2020, 9, 9),
          fbLink: "#",
          ytLink: "#",
        },
        {
          title: "Winter School on Internet of Things - 2",
          description:
            "The Research Laboratory of Computer Systems, Security and Networks " +
            "(SYAD) of Alexandreio TEI of Thessaloniki and the IEEE Student Branch at " +
            "Alexander TEI of Thessaloniki co-organize the Winter School entitled " +
            "Internet of Things: Security, Communication & Application Challenges " +
            "on Friday 15 and Saturday 16 December (10: 00-18: 00) at ATEITH " +
            "(Filippos Hall, main corridor)...",
          image: "https://picsum.photos/320/180/",
          date: new Date(2020, 9, 9),
          fbLink: "#",
        },
        {
          title: "Winter School on Internet of Things - 3",
          description:
            "The Research Laboratory of Computer Systems, Security and Networks " +
            "(SYAD) of Alexandreio TEI of Thessaloniki and the IEEE Student Branch at " +
            "Alexander TEI of Thessaloniki co-organize the Winter School entitled " +
            "Internet of Things: Security, Communication & Application Challenges " +
            "on Friday 15 and Saturday 16 December (10: 00-18: 00) at ATEITH " +
            "(Filippos Hall, main corridor)...",
          image: "https://picsum.photos/320/180/",
          date: new Date(2020, 9, 9),
          fbLink: "#",
          ytLink: "#",
        },
      ],
    };
  },
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
