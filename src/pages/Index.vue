<template>
  <Layout>
    <hero />
    <about-grid />
    <gallery />
    <wie />
    <faq />
    <latest-events />
    <members />
    <contact />
  </Layout>
</template>

<script>
import Hero from "@/components/Hero.vue";
import AboutGrid from "@/components/AboutGrid.vue";
import Members from "@/components/Members.vue";
import Gallery from "@/components/Gallery.vue";
import Wie from "@/components/Wie.vue";
import Faq from "@/components/Faq.vue";
import LatestEvents from "@/components/LatestEvents.vue";
import Contact from "@/components/Contact.vue";

export default {
  metaInfo: {
    titleTemplate: "IEEE Student Branch - IHU Thessaloniki",
    meta: [{ name: "description", content: `
      The IEEE Student Branch of International Hellenic University - Thessaloniki campus is a student tech
      community.` }],
  },
  components: {
    Hero,
    AboutGrid,
    Members,
    Gallery,
    Wie,
    Faq,
    LatestEvents,
    Contact,
  },
};
</script>

<style lang="scss">
@import "~/assets/scss/variables";

* {
  font-family: "Manrope";
}

h1 {
  font-weight: 500;
  font-size: 2.5em;
}

h2 {
  font-family: "Roboto";
  font-weight: 300;
  text-transform: uppercase;
  margin-bottom: 80px;
  margin-top: 80px;
  font-size: 1.8em;
}

h2:before {
  content: "";
  display: block;
  width: 40px;
  padding-top: 5px;
  border-top: 2px solid #1a72a5;
}

@media (max-width: $screen-md-min) {
  h1 {
    font-size: 2.1em;
  }

  h2 {
    font-size: 1.6em;
  }
}

.section {
  margin-top: 180px;
}
</style>
