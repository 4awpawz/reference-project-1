/*
dataDependencies:
- brand
*/
module.exports = ({ $tag, asset, site }) => {
    $tag.prepend(`${site.dataCatalog.brand.brandName} `);
    // $tag.append(` Page ${asset.collection.itemIndex} of ${site.dataCatalog.blog.totBlogPages}`);
    $tag.append(` Page ${Math.ceil(asset.collection.itemIndex + 1)} of ${site.articlesCatalog.length / asset.collection.articlesPerPage}`);
};