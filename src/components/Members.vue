<template>
  <section id="members" class="section">
    <h2>Members</h2>
    <ClientOnly>
      <carousel
        paginationColor="#b3b3b3"
        paginationActiveColor="#176796"
        :loop="true"
        :perPageCustom="[[768, 3], [1024, 4]]"
      >
        <slide v-for="member in members" :key="member.name">
          <member-card :member="member" />
        </slide>
      </carousel>
    </ClientOnly>
  </section>
</template>

<script>
import MemberCard from "@/components/MemberCard.vue";
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
      ],
    };
  },
};
</script>
