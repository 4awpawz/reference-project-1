module.exports = ({ $tag, asset }) => {
    $tag.prepend(`${asset.collection.item.category} `);
};