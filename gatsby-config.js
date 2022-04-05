module.exports = {
  siteMetadata: {
    title: `Tianci W`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
  "gatsby-plugin-sass", 
  "gatsby-transformer-remark", 
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  },
  "gatsby-plugin-sharp",
  "gatsby-plugin-image",
  {
    resolve:"gatsby-source-filesystem",
    options:{
      name:"blog",
      path:`${__dirname}/blog`
    }
  }
]
};