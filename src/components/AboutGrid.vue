<template>
  <section
    class="section"
    id="whoweare"
    style="margin-top: 450px; width: 100%;"
  >
    <!-- <h2>Who we are</h2> -->
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
          title: "Τεχνολογία",
          icon: "file-code",
          text:
            "Η ομάδα μας αποτελείται από προγραμματιστές και μηχανικούς όλων των επιπέδων δεξιοτήτων και σκοπός μας είναι η συνεχής ανάπτυξή τους.",
        },
        {
          title: "Μάθηση",
          icon: "graduation-cap",
          text:
            "Οργανώνουμε μεγάλο αριθμό ενημερωτικών τεχνολογικών ομιλιών κάθε χρόνο και προσφέρουμε έναν κόμβο συζήτησης και βελτίωσης.",
        },
        {
          title: "Εθελοντισμός",
          icon: "user-friends",
          text:
            "Εκτός των τεχνολογικών μας ενδιαφερόντων, στοχεύουμε να προσφέρουμε στην κοινότητά μας μέσω εθελοντικών events.",
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
