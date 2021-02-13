<template>
  <section class="section" id="faq">
    <h2>Frequent Questions</h2>
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
  faq: allFaq {
    edges {
      node {
        id,
        question,
        answer
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
