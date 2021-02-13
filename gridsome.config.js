// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "IEEE Student Branch - IHU Thessaloniki",
  siteUrl: "https://relaxed-raman-07896d.netlify.app",
  titleTemplate: "%s",
  plugins: [
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
