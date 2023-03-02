<template>
  <Layout>
    <hero/>
    <main class="blogpost__wrapper">
      <div>
        <g-link to="/blog">
          <b-button class="blogpost__back-button">
            <ArrowLeftIcon />
            {{ $t("back") }}
          </b-button>
        </g-link>
      </div>
      <article class="blogpost">
        <h1 v-html="$page.blogPost.title" class="blogpost__title" />
        <span class="blogpost__date"> {{ formattedDate }} </span>
        <div v-html="$page.blogPost.content" class="blogpost__content" />
      </article>
    </main>
  </Layout>
</template>

<script>
import Hero from "@/components/Hero.vue";
import {ArrowLeftIcon} from "vue-feather-icons";

export default {
  components: {
    Hero,
    ArrowLeftIcon
  },
  computed: {
    formattedDate() {
      if (!this.$page.blogPost.date) {
        return '';
      } else {
        const date = new Date(this.$page.blogPost.date);
        return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
      }
    }
  },
  metaInfo: {
    titleTemplate: ` Blog | IEEE Student Branch - IHU Thessaloniki`,
    meta: [
      {
        name: "Blog",
        content:
            "The IEEE Student Branch of International Hellenic University - Thessaloniki campus in Sindos is a "+
            "technological community of IEEE Student members who organize events, lectures and projects."
      },
    ],
  },
}
</script>

<page-query>
query ($id: ID!) {
  blogPost(id: $id) {
    id
    title
    content
    date
  }
}
</page-query>


<style lang="scss">

.blogpost {
  &__wrapper {
    margin-top: 450px;
  }

  &__back-button {
    display: flex;
  }

  &__title {
    margin-top: 2rem;
  }

  &__content {
    margin-top: 1rem;
  }
}

</style>
