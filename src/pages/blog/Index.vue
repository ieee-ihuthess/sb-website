<template>
  <Layout>
    <hero />
    <div class="blogpost-list__wrapper">
      <BlogpostList :posts="$static.posts.edges" />
    </div>
  </Layout>
</template>

<script>
  import Hero from "@/components/Hero.vue";
  import BlogpostList from "../../components/BlogpostList.vue";

  export default {
    metaInfo: {
      titleTemplate: "Blog | IEEE Student Branch - IHU Thessaloniki",
      meta: [
        {
          name: "description",
          content:
              "The IEEE Student Branch of International Hellenic University - Thessaloniki campus in Sindos is a "+
              "technological community of IEEE Student members who organize events, lectures and projects."
        },
      ],
    },
    components: {
      BlogpostList,
      Hero,
    },
  };
</script>

<style lang="scss">
  @import "~/assets/scss/variables";

  .blogpost-list__wrapper {
    margin-top: 450px;
  }

</style>

<static-query>
query {
  posts: allBlogPost(sortBy: "date", order: DESC) {
    edges {
      node {
        id,
        title,
        content,
        image,
        date,
        description,
        slug
      }
    }
  }
}
</static-query>
