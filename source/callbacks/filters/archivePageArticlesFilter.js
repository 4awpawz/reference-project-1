/**
 * Return all the articles in the articlesCatalog.
 */
module.exports = ({ siteMetadata }) => {
    return [{
        pageName: "index.html",
        data: siteMetadata.articlesCatalog
    }];
};
