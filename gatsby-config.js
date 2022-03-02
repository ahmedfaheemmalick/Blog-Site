const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  siteMetadata: {
    siteUrl: `https://a-blog-site-app.netlify.app`,
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENFUL_ACCESS_TOKEN,
      },
    },
  ],
};
