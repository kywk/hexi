'use strict';

/**
* Div tag
*
* Syntax:
*   {% div classname1 [classname2 ...] %}
*   content
*   {% enddiv %}
*/

module.exports = function(ctx) {
  return function divTag(args, content) {
    var result = '';

    result += '<div class="' + args.join(' ') + '">';
    result += ctx.render.renderSync({text: content, engine: 'markdown'});
    result += '</div>';

    return result;
  };
};
