const fs = require("fs");
const path = require("path");
const jsYaml = require("js-yaml");
const localesDirectory = path.resolve(process.cwd(), './content/locales');

/**
 * @typedef PluginProps
 * @type {object}
 */


/**
 * This is a Next.js plugin that installs a webpack image loader module 
 * that includes meta data and lqip
 * @param {PluginProps} nextConfig
 */
module.exports = function nextI18nLoader(nextConfig = {}) {

  const locales = getLocales()

  const localeKeys = Object.keys(locales).map(key => locales[key].language.path)
  const defaultKey = locales[Object.keys(locales).find(key => locales[key].language.default)].language.path



  mergeDefaults(nextConfig, {
    i18n: {
      locales: localeKeys,
      defaultLocale: defaultKey,
    }
  })
  return Object.assign({}, nextConfig)


}

const mergeDefaults = function (opts, defaults) {
  for (i in defaults) {

    if ((!(i in opts)) || opts[i] === null) {
      opts[i] = defaults[i];
    }
  }
  return opts;
}

function _getRawLocaleByFile(filename) {
  var fullPath = path.join(localesDirectory, "" + filename);
  var fileContents = fs.readFileSync(fullPath, 'utf8');
  var data = jsYaml.safeLoad(fileContents);
  return data;
}

const getLocales = function () {
  var localeFiles = fs
    .readdirSync(localesDirectory)
    .filter(function (f) { return f.endsWith('.yml'); });
  var items = [].concat.apply([], localeFiles.map(function (filename) { return _getRawLocaleByFile(filename); }));
  return items.reduce(function (accum, item) {
    accum[item.language.locale] = item;
    return accum;
  }, {});
};
