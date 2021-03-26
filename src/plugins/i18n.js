module.exports = {
  use: "gridsome-plugin-i18n",
  options: {
    locales: [
      // locales list
      "el-gr",
      "en-gb",
    ],
    pathAliases: {
      // path segment alias for each locales
      "el-gr": "el",
      "en-gb": "en",
    },
    fallbackLocale: "en-gb", // fallback language
    defaultLocale: "el-gr", // default language
    enablePathRewrite: true, // rewrite path with locale prefix, default: true
    rewriteDefaultLanguage: true, // rewrite default locale, default: true
    messages: {
      "el-gr": require("../locales/el-gr.json"),
      "en-gb": require("../locales/en-gb.json"),
    },
  },
};
