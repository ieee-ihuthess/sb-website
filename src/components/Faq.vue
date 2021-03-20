<template>
  <section class="section" id="faq">
    <h2>ΣΥΧΝΕΣ ΕΡΩΤΗΣΕΙΣ - FAQ</h2>
    <div class="faq" role="tablist">
      <faq-card
        v-for="(question, index) in $static.faq.edges"
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
};
</script>
