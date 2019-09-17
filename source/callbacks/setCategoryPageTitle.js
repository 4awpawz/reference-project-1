module.exports = ({ $tag, asset }) => {
    $tag.prepend(`${asset.categoryItem.category} `);
};