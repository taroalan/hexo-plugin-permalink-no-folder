const myPlugin = require('./lib/index');

(function init() {
  if (typeof hexo === 'undefined') {
    console.warn('Global hexo not found. This plugin will NOT WORK.');
    return;
  }

  const pluginConfig = hexo.config.permalink_no_folder;

  if (!pluginConfig) {
    console.warn(
      'plugin config not specified.\n',
      'You can config like the following:\n',
      `
permalink_no_folder: true
      `.trim()
    );

    return;
  }

  myPlugin(hexo);
})();

module.exports = myPlugin;
