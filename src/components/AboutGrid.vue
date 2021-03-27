<template>
  <section
    class="section"
    id="whoweare"
    style="margin-top: 450px; width: 100%;"
  >
    <div class="tiles">
      <div class="tile" v-for="tile in gridTiles" :key="tile.title">
        <font-awesome class="tile__icon" :icon="tile.icon" size="3x" />
        <span class="tile__title">{{ $t(tile.title) }}</span>
        <span class="tile__text">{{ $t(tile.text) }}</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      gridTiles: [
        {
          title: "technology",
          icon: "file-code",
          text: "technologyText",
        },
        {
          title: "learning",
          icon: "graduation-cap",
          text: "learningText",
        },
        {
          title: "volunteering",
          icon: "user-friends",
          text: "volunteeringText",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "~/assets/scss/variables";

.tiles {
  display: flex;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
}

.tile {
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 40px;
  padding: 20px;
  width: 350px;

  &__title {
    text-transform: capitalize;
    font-weight: 600;
    font-size: 25px;
    margin-bottom: 15px;
    margin-top: 8px;
  }

  &__icon {
    color: $blue;
    margin: 0 auto;
  }
}
</style>
