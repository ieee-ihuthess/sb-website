<template>
  <section id="members" class="section">
    <h2 class="title">{{ $t("members") }}</h2>
    <ClientOnly>
      <carousel
        :nav="false"
        :navText="['Prev', 'Next']"
        :autoWidth="false"
        :responsive="{
          0: { items: 1, center: true, dots: false, nav: true, margin: -70 },
          400: { items: 1, center: true, dots: false, nav: true, margin: -100 },
          470: { items: 1, center: true, dots: false, nav: true, margin: -180 },
          768: { items: 2, dots: true, nav: false, margin: -70 },
          992: { items: 3, dots: true, nav: false, margin: -70 },
          1200: { items: 3, dots: true, nav: false, margin: -100 },
          1250: { items: 4, dots: true, nav: false, margin: -70 },
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

.owl-prev,
.owl-next {
  background: $blue !important;
}
</style>
