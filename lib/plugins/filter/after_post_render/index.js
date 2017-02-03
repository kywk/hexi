'use strict';

module.exports = ctx => {
  const { filter } = ctx.extend;

  filter.register('after_post_render', require('./external_link'));
  filter.register('after_post_render', require('./excerpt'));

  /* Hexi: built in filters */
  filter.register('after_post_render', require('./toc'));
};
