'use strict';

function postGenerator(locals) {
  const orderby = (this.config.sort_by === 'updated') ? 'updated' : 'date';
  const posts = locals.posts.sort(orderby, -1).toArray();
  const length = posts.length;

  return posts.map((post, i) => {
    const { path, layout } = post;

    if (!layout || layout === 'false') {
      return {
        path,
        data: post.content
      };
    }

    if (i) post.prev = posts[i - 1];
    if (i < length - 1) post.next = posts[i + 1];

    const layouts = ['post', 'page', 'index'];
    if (layout !== 'post') layouts.unshift(layout);

    post.__post = true;

    return {
      path,
      layout: layouts,
      data: post
    };
  });
}

module.exports = postGenerator;
