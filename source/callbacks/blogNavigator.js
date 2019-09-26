module.exports = ({ $tag, asset, site }) => {
    let totalPages = asset.collection.totalItems;
    const index = asset.collection.index;

    // older}
    if (index === totalPages - 1) {
        $tag.append(/* html */`
            <span class="navigator__empty">Older</span>
        `);
    } else {
        // shouldn't use hard code "blog" for name, use userConfig.blogFolderName
        $tag.append(/* html */`
            <a class="navigator__older" href="/blog/page${index + 2}">Older</a>
        `);
    }
    // newer
    if (index === 0) {
        $tag.append(/* html */`
                <span class="navigator__empty">Newer</span>
        `);
    } else {
        $tag.append(/* html */`
            <a class="navigator__newer" href="/blog/${index === 1 ? "" : `page${index}`}">Newer</a>
        `);
    }
};