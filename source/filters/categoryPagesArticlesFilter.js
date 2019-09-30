/**
 * Return all the items in the catagoriesCatalog.
 */
module.exports = ({ siteMetadata }) =>
    siteMetadata.categoriesCatalog.map(item => ({
        pageName: item.category,
        data: item
    }));