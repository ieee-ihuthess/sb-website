<template>
  <div class="member">
    <g-image :src="member.image" width="250"/>
    <div class="member__info">
      <h4 class="member__name">{{ member.name }}</h4>
      <h4 class="member__designation">{{ member.designation }}</h4>
    </div>
    <ul class="member__social-list">
      <li
        class="member__social-link"
        v-for="(link, service) in member.socialLinks"
        :key="service"
      >
        <a :href="link">
          <font-awesome
            class="member__social-icon"
            :icon="['fab', service]"
            size="lg"
          />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    member: {
      type: Object,
      required: true,
      validator: (member) => {
        return (
          !!member.name &&
          typeof member.name == "string" &&
          !!member.designation &&
          typeof member.designation == "string" &&
          !!member.image &&
          typeof member.image == "string" &&
          !!member.socialLinks &&
          typeof member.socialLinks == "object"
        );
      },
    },
  },
};
</script>

<style lang="scss">
@import "~/assets/scss/variables";

.member {
  margin: 0 auto;
  text-align: center;
  max-width: 250px;

  &__info {
    text-align: center;
    padding: 10px 0 15px 0;
  }

  &__name {
    font-size: 1.1rem;
    font-weight: 700;
    letter-spacing: 1px;
    padding-top: 2px;
  }

  &__designation {
    color: $light-blue;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 1px;
    margin-top: 5px;
    text-transform: capitalize;
    font-style: italic;
  }

  &__social-list {
    padding-left: 0;
  }

  &__social-link {
    list-style: none;
    display: inline-block;
    width: 32px;
    height: 32px;
    margin-right: 6px;
  }

  &__social-icon {
    color: $dark-gray;

    &:hover {
      color: $light-blue;
    }
  }
}
</style>
