<template>
  <div class="member">
    <g-image src="https://placeimg.com/250/250/any?1" />
    <div class="member__info">
      <h4 class="member__name">Samsouri Nasia</h4>
      <h4 class="member__designation">Chair</h4>
    </div>
    <ul class="member__social-list">
      <li class="member__social-link">
        <a href="#">
          <font-awesome
            class="member__social-icon"
            :icon="['fab', 'github']"
            size="lg"
          />
        </a>
      </li>
      <li class="member__social-link">
        <a href="#">
          <font-awesome
            class="member__social-icon"
            :icon="['fab', 'instagram']"
            size="lg"
          />
        </a>
      </li>
      <li class="member__social-link">
        <a href="#">
          <font-awesome
            class="member__social-icon"
            :icon="['fab', 'facebook']"
            size="lg"
          />
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
@import "~/assets/scss/variables";

.member {
  margin: 0 15px;
  text-align: center;

  &__info {
    text-align: center;
    padding: 10px 0 15px 0;
  }

  &__name {
    font-size: 19px;
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
