<template>
  <div class="blogpost-list">
    <BlogPostPreview
        class="blogpost-list__item"
        v-for="(post, index) in posts"
        :key="post.node.id"
        :post="post.node"
        :title="'hello'"
        :index="1"
    />
  </div>
</template>

<script>
import BlogPostPreview from "@/components/BlogPostPreview";

export default {
  components: {
    BlogPostPreview
  },
  props: ['posts']
}

</script>

<style lang="scss">
@import "~/assets/scss/variables";
@import "~/assets/scss/overwrites";

.blogpost-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  &__item {
    margin-top: 30px;
    max-width: 100%;
    width: 100%;

    @media (min-width: $screen-lg-min) {
      max-width: 45%;
    }
  }
}
</style>
