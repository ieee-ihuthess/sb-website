<template>
  <section class="section" id="faq">
    <h2>Frequent Questions</h2>
    <div class="faq" role="tablist">
      <b-card
        no-body
        class="question"
        v-for="(question, index) in questions"
        :key="question.heading"
      >
        <b-card-header
          header-tag="header"
          class="question__top-wrapper"
          role="tab"
          @click="toggleClicked(index)"
          :ref="'toggle' + index"
          v-b-toggle="'accordion' + index"
        >
          <h4 class="question__heading" :ref="'heading' + index">
            {{ question.heading }}
          </h4>
          <a class="question__toggle">
            <font-awesome
              :ref="'icon' + index"
              class="question__icon"
              icon="chevron-down"
              size="lg"
            />
          </a>
        </b-card-header>
        <b-collapse :id="'accordion' + index" role="tabpanel">
          <b-card-body>
            <b-card-text
              >I start opened because <code>visible</code> is
              <code>true</code></b-card-text
            >
            <b-card-text>{{ question.text }}</b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      d: 1,
      questions: [
        {
          heading: "What is IEEE?",
          text: `
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
          richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
          brunch. Food toggleruck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
          tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
          assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
          wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
          vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
          synth nesciunt you probably haven't heard of them accusamus labore VHS.
        `,
        },
        {
          heading: "Why should I join the IEEE Student Branch?",
          text: `
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
          richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
          brunch. Food toggleruck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
          tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
          assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
          wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
          vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
          synth nesciunt you probably haven't heard of them accusamus labore VHS.
        `,
        },
        {
          heading: "How can I join the IEEE Student Branch?",
          text: `
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
          richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
          brunch. Food toggleruck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
          tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
          assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
          wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
          vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
          synth nesciunt you probably haven't heard of them accusamus labore VHS.
        `,
        },
        {
          heading: "What activities does the IEEE Student Branch organize?",
          text: `
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
          richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
          brunch. Food toggleruck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
          tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
          assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
          wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
          vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
          synth nesciunt you probably haven't heard of them accusamus labore VHS.
        `,
        },
      ],
    };
  },
  methods: {
    toggleClicked(index) {
      const toggleElement = this.$refs["toggle" + index][0];
      console.log(toggleElement);
      if (toggleElement.classList.contains("collapsed")) {
        this.$refs["icon" + index][0].classList.add("collapsed");
        this.$refs["icon" + index][0].classList.remove("not-collapsed");
        this.$refs["heading" + index][0].classList.add("not-collapsed");
      } else {
        this.$refs["icon" + index][0].classList.add("not-collapsed");
        this.$refs["icon" + index][0].classList.remove("collapsed");
        this.$refs["heading" + index][0].classList.remove("not-collapsed");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/variables";

.question {
  border: none !important;
  background: none !important;
  margin-bottom: 30px;

  &__top-wrapper {
    cursor: pointer;
    background: none;
    border: none !important;
    display: flex;
    padding: 5px 10px;
    justify-content: space-between;
    align-items: center;
  }

  &__heading {
    padding-right: 10px;
  }

  &__heading.not-collapsed {
    color: $light-blue !important;
  }

  &__toggle {
    color: $dark-gray;

    :hover {
      cursor: pointer;
    }
  }

  &__icon.not-collapsed {
    color: $dark-gray;
    transform: rotate(0deg);
    transition: transform 0.3s linear;
  }

  &__icon.collapsed {
    color: $light-blue;
    transform: rotate(180deg);
    transition: transform 0.3s linear;
  }
}
</style>
