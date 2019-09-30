/**
 * Return all the articles in the articlesCatalog.
 */
module.exports = ({ siteMetadata }) => [{
    pageName: "index.html",
    data: siteMetadata.articlesCatalog
}];
