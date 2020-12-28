<template>
  <section id="members" class="section">
    <h2>Members</h2>
    <carousel
      paginationColor="#b3b3b3"
      paginationActiveColor="#176796"
      :loop="true"
      :perPageCustom="[[768, 3], [1024, 4]]"
    >
      <slide v-for="member in members" :key="member">
        <member-card />
      </slide>
    </carousel>
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
      members: [1, 2, 3, 4, 5],
    };
  },
};
</script>
