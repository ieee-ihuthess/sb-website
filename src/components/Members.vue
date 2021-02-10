<template>
  <section id="members" class="section">
    <h2>Members</h2>
    <ClientOnly>
      <carousel
        :nav="false"
        :dots="true"
        :responsive="{
          0: { items: 1, center: true },
          600: { items: 2 },
          1000: { items: 4 },
        }"
      >
        <member-card
          v-for="member in members"
          :key="member.name"
          :member="member"
        />
      </carousel>
    </ClientOnly>
  </section>
</template>

<script>
import MemberCard from "@/components/MemberCard.vue";
// import carousel from "vue-owl-carousel";

export default {
  components: {
    MemberCard,
  },
  data() {
    return {
      members: [
        {
          name: "Nasia Samsouri",
          designation: "Chair",
          image: "https://placeimg.com/250/250/any?1",
          socialLinks: {
            github: "#",
            facebook: "#",
          },
        },
        {
          name: "Giorgos Apostolopoulos",
          designation: "Vice Chair",
          image: "https://placeimg.com/250/250/any?2",
          socialLinks: {
            github: "#",
            gitlab: "#",
            facebook: "#",
          },
        },
        {
          name: "Anastasia Mousa",
          designation: "Secretary",
          image: "https://placeimg.com/250/250/any?3",
          socialLinks: {
            github: "#",
            gitlab: "#",
            facebook: "#",
            instagram: "#",
          },
        },
        {
          name: "Grigoris Giapantzis",
          designation: "Treasurer",
          image: "https://placeimg.com/250/250/any?5",
          socialLinks: {
            github: "#",
            gitlab: "#",
          },
        },
        {
          name: "Nasia Samsouri 1",
          designation: "Chair",
          image: "https://placeimg.com/250/250/any?1",
          socialLinks: {
            github: "#",
            facebook: "#",
          },
        },
        {
          name: "Giorgos Apostolopoulos 1",
          designation: "Vice Chair",
          image: "https://placeimg.com/250/250/any?2",
          socialLinks: {
            github: "#",
            gitlab: "#",
            facebook: "#",
          },
        },
      ],
    };
  },
  // mounted() {
  //   carousel = require('vue-owl-carousel')
  //   carouse.$mount
  // }
};
</script>

<style lang="scss">
@import "~/assets/scss/variables";

.owl-dot:hover {
  span {
    background: $light-blue !important;
  }
}

.owl-dot.active {
  span {
    background: $light-blue !important;
  }
}
</style>
