'use strict';

function tocFilter (data) {
  var toc = this.extend.helper.store.toc(data.content);
  data.content = data.content.replace('<!--{%_TOC_%}-->', '<div class="toc-wrapper">' + toc + '</div>');
};

module.exports = tocFilter;
