/**
 * Templates a string with {{ content }} to binded value
 * @param tpl string to template
 * @param data data array containing the binded value
 */
export const TemplateEngine = function(tpl, data) {
  let regex = /\{\{([^}]+)\}\}/g;
  let match;
  while ((match = regex.exec(tpl))) {
    tpl = tpl.replace(match[0], data[match[1]]);
  }
  return tpl;
};
