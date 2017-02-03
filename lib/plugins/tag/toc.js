'use strict';

/**
 * TOC tag
 *
 * Syntax:
 *   {% toc %}
 */

function tocTag (args, content) {
  return '<!--{%_TOC_%}-->';
};

module.exports = tocTag;
