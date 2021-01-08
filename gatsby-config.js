module.exports = {
  siteMetadata: {
    title: "100daysOfGatsby",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "1tfofINWd6DwiI8g9Jl2RakT9An_ZRIZtdff3D8TYD8",
        spaceId: "2tpn3cer7rlo",
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
