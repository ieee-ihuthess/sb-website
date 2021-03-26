<template>
  <b-navbar
    tag="nav"
    v-b-scrollspy="200"
    sticky
    :class="{ navbar: true, 'navbar--transparent': transparentNav }"
    toggleable="lg"
    type="dark"
  >
    <b-container class="navbar__container">
      <b-navbar-brand class="navbar__brand" href="#">
        <g-image
          :src="logosrc"
          width="50"
          height="50"
          class="navbar__image d-inline-block align-top mr-3"
          alt="Student Branch Logo"
        />
        <span class="navbar__brand__title" style="font-size: 15px;">
          IEEE Student Branch <br />
          IHU Thessaloniki
        </span>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item
            @click.prevent="scrollDone(item.target)"
            class="navbar__link"
            v-scroll-to="{ el: item.target, offset: scrollOffset }"
            v-for="item in menuItems"
            :key="item.name"
            :href="item.target"
            >{{ $t(item.name) }}</b-nav-item
          >
          <b-nav-item-dropdown
            :text="$i18n.locale.substring(0, 2).toUpperCase()"
            right
          >
            <b-dropdown-item
              @click.prevent="localeChanged(locale)"
              v-for="locale in availableLocales"
              :key="locale"
            >
              {{ locale }}
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
export default {
  name: "TheHeader",
  data() {
    return {
      currentLocale: this.$i18n.locale.toString(),
      availableLocales: this.$i18n.availableLocales,
      currentScrolledSection: "",
      menuItems: [
        {
          name: "home",
          target: "#home",
        },
        {
          name: "gallery",
          target: "#gallery",
        },
        {
          name: "WIE",
          target: "#wie",
        },
        {
          name: "FAQ",
          target: "#faq",
        },
        {
          name: "newsAndEvents",
          target: "#latest",
        },
        {
          name: "members",
          target: "#members",
        },
        {
          name: "contact",
          target: "#contact",
        },
      ],
      logosrc: require("@/assets/img/sb-logo-min.png"),
      transparentNav: true,
    };
  },
  created() {
    this.$root.$on("bv::scrollspy::activate", this.onScrollToSection);
  },
  mounted() {
    if (process.isClient) {
      if (screen.width < 990) this.$data.transparentNav = false;
      else this.$data.transparentNav = true;
      window.addEventListener("scroll", this.onScroll);
    }
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  computed: {
    scrollOffset() {
      if (process.isClient) {
        return screen.width < 768 ? -450 : -100;
      }
    },
  },
  methods: {
    onScrollToSection(target) {
      this.$data.currentScrolledSection = target;
    },
    onScroll() {
      if (process.isClient) {
        if (screen.width < 990) this.$data.transparentNav = false;
        const currentScrollPosition =
          window.pageYOffset || document.documentElement.scrollTop;
        if (currentScrollPosition < 0) {
          return;
        }

        if (currentScrollPosition < 5) {
          this.$data.transparentNav = true;
        } else {
          this.$data.transparentNav = false;
        }
      }
    },
    scrollIntoView(evt) {
      evt.preventDefault();
      const href = evt.target.getAttribute("href");
      const el = href ? document.querySelector(href) : null;
      if (el) {
        this.$refs.content.scrollTop = el.offsetTop;
      }
    },
    scrollDone(target) {
      history.pushState({}, null, this.$route.path + target);
    },
    localeChanged(locale) {
      this.$router.push({
        path: this.$tp(
          this.$route.path + this.currentScrolledSection,
          locale,
          true
        ),
      });
    },
  },
};
</script>

<style lang="scss">
@import "~/assets/scss/variables";

.navbar {
  background: $dark-blue;
  padding-left: 50px !important;
  padding-right: 50px !important;
  transition: background 1s;

  @media (max-width: $screen-md-min) {
    padding-left: 20px !important;
    padding-right: 20px !important;
  }

  &--transparent {
    background: none !important;

    @media (max-width: $screen-md-min) {
      background: $dark-blue !important;
    }
  }

  &__container {
    max-width: 1440px !important;
  }

  &__image {
    height: 50px !important;
    width: 50px !important;
  }

  &__brand {
    display: flex !important;
    line-height: 22px !important;

    &__title {
      align-self: center;
    }
  }

  &__link {
    text-transform: uppercase;
    margin-left: 10px;
    border-bottom: 1px solid transparent;
    transition: border-bottom 0.7s;

    .active {
      color: white !important;
      border-bottom: 1px solid $light-blue;

      @media (max-width: $screen-md-min) {
        border-bottom: none;
      }
    }

    &:hover {
      border-bottom: 1px solid $light-blue;
    }

    @media (max-width: $screen-md-min) {
      border-bottom: none;

      &:hover {
        border-bottom: none;
      }

      &:target {
        border-bottom: none;
      }
    }
  }
}
</style>
