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
          v-for="member in $static.members.edges"
          :key="member.node.id"
          :member="member.node"
        />
      </carousel>
    </ClientOnly>
  </section>
</template>

<static-query>
query {
  members: allMember(sortBy: "date", order: ASC) {
    edges {
      node {
        id,
        name,
        designation,
        image,
        date
        socialLinks {
          github,
          gitlab,
          facebook,
          linkedin,
          instagram
        }
      }
    }
  }
}
</static-query>

<script>
import MemberCard from "@/components/MemberCard.vue";

export default {
  components: {
    MemberCard,
  },
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
