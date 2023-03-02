<template>
  <article>
    <h1> {{ post.title }} </h1>
    <p> {{ post.description }} </p>
    <g-link :to="`/blog/${post.slug}`">
      <b-button class="button--primary event__show-button"> {{ $t("showMore") }} </b-button>
    </g-link>
  </article>
</template>

<script>

export default {
  props: ['index', 'post', 'title']
}


</script>
