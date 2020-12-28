<template>
  <section
    class="section"
    id="whoweare"
    style="margin-top: 450px; width: 100%"
  >
    <h2>Who we are</h2>
    <div class="tiles">
      <div class="tile" v-for="tile in gridTiles" :key="tile.title">
        <font-awesome class="tile__icon" :icon="tile.icon" size="3x" />
        <span class="tile__title">{{ tile.title }}</span>
        <span class="tile__text">{{ tile.text }}</span>
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
          title: "Development",
          icon: "file-code",
          text:
            "Our team is comprised of developers and engineers of all skill levels and we take on various project with the aim of improvement",
        },
        {
          title: "Learning",
          icon: "graduation-cap",
          text:
            "We organize a large number of informative tech talks each year and we offer a hub of discussion and growth",
        },
        {
          title: "Volunteering",
          icon: "user-friends",
          text:
            "Apart from our technological interests, we aim to give back to our community through volunteering events",
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
