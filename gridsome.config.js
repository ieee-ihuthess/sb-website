const i18n = require('./src/plugins/i18n')

module.exports = {
  siteName: "IEEE Student Branch - IHU Thessaloniki",
  siteUrl: "https://relaxed-raman-07896d.netlify.app",
  titleTemplate: "%s",
  plugins: [
    i18n,
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Member",
        path: "./content/members/**/*.md",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Event",
        path: "./content/events/**/*.md",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Faq",
        path: "./content/faq/**/*.md",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "GalleryImage",
        path: "./content/gallery/**/*.md",
      },
    },
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/admin`,
      },
    },
  ],
};
