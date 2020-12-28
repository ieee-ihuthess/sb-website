// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";

import BootstrapVue from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueScrollactive from "vue-scrollactive";
import VueScrollTo from "vue-scrollto";
import Particles from "particles.vue";
import VueTypedJs from "vue-typed-js";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faYoutube,
  faLeanpub,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {
  faFileCode,
  faGraduationCap,
  faUserFriends,
  faChevronUp,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;
library.add(
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faGithub,
  faYoutube,
  faLeanpub,
  faFileCode,
  faChevronUp,
  faChevronDown,
  faGraduationCap,
  faUserFriends
);

export default function(Vue, { router, head, isClient }) {
  head.link.push({
    rel: "stylesheet",
    href:
    "https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;600&family=Roboto:wght@300&display=swap",
  });
  // Set default layout as a global component
  Vue.component("font-awesome", FontAwesomeIcon);
  Vue.component("Layout", DefaultLayout);
  Vue.use(BootstrapVue);
  Vue.use(VueScrollactive);
  Vue.use(VueScrollTo);
  Vue.use(VueTypedJs);
  Vue.use(Particles);
  if (isClient) {
    const VueCarousel = require('vue-carousel').default;
    Vue.use(VueCarousel);
  }
}
