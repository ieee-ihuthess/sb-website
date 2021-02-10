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
  faGitlab,
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
  faGitlab,
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
  Vue.component("Layout", DefaultLayout);
  Vue.component("font-awesome", FontAwesomeIcon);
  Vue.use(BootstrapVue);
  Vue.use(VueScrollactive);
  Vue.use(VueScrollTo);
  Vue.use(VueTypedJs);
  Vue.use(Particles);
}
