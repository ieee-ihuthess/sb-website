<template>
  <section class="section" id="faq">
    <h2 class="title">{{ $t("faq") }}</h2>
    <div class="faq" role="tablist">
      <faq-card
        v-for="(question, index) in localizedQuestions"
        :key="question.node.question"
        :question="question.node"
        :index="index"
      ></faq-card>
    </div>
  </section>
</template>

<static-query>
query {
  faq: allFaq(sortBy: "order", order: ASC) {
    edges {
      node {
        id,
        question,
        locale,
        content,
        order
      }
    }
  }
}
</static-query>

<script>
import FaqCard from "@/components/FaqCard.vue";

export default {
  components: { FaqCard },
  computed: {
    localizedQuestions() {
      return this.$static.faq.edges.filter( q =>
        q.node.locale === this.$i18n.locale.toString()
      )
    }
  },
};
</script>
