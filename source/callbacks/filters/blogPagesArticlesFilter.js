/**
 * Return a subset of articles for each blog page
 * and name each page using the iterator's index value.
 */
module.exports = ({ collection, siteMetadata }) => {
    const totalPages =
        Math.ceil(siteMetadata.articlesCatalog.length / collection.articlesPerPage);
    const pages = [];
    for (let i = 0; i < totalPages; i++) {
        const start = collection.articlesPerPage * i;
        const end = start + collection.articlesPerPage;
        pages.push({
            pageName: i === 0 && "index.html" || "page" + (i + 1),
            data: siteMetadata.articlesCatalog.slice(start, end)
        });
    }
    return pages;
};