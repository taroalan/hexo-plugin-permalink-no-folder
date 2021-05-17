const _utils = require('./utils');

function myPlugin(hexo) {
  if (!hexo || !hexo.config || !hexo.config.permalink_no_folder) {
    return;
  }

  const pathFn = _utils.checkDependency('path');
  const hexoUtil = _utils.checkDependency('hexo-util');
  const slugize = hexoUtil.slugize;
  const Permalink = hexoUtil.Permalink;

  hexo.extend.filter.register('after_init', function() {
    const config = hexo.config;

    const getNewLink = post => {
      if (!(post && post.source && post.source.startsWith('_posts/')))
        return null;

      const source = post.source.slice('_posts/'.length);
      const sourceWithNoPostfix = source.substring(
        0,
        source.length - pathFn.extname(source).length
      );

      if (sourceWithNoPostfix.indexOf('/') === -1) {
        return;
      }

      // console.log('----');
      // console.log(sourceWithNoPostfix);

      let paths = sourceWithNoPostfix.split('/');
      let filename = paths[paths.length - 1];
      let regDate = /^\d{4}-\d{2}-\d{2}-/;
      let slugLink =
        filename.substring(regDate.test(filename) ? 11 : 0, filename.length) +
        '.html';

      if (config.permalink_no_folder_replacement) {
        slugLink = config.permalink_no_folder_replacement + slugLink;
      }
  
      // console.log(slugLink);

      return slugLink;
    };

    const usePlugin = permalink =>
      config.permalink === ':title.html' && config.permalink_no_folder;
    const oldStringify = Permalink.prototype.stringify;

    Permalink.prototype.stringify = function(data) {
      if (usePlugin(this)) {
        const newLink = getNewLink(data);
        if (newLink) return newLink;
      }

      return oldStringify.call(this, data);
    };

    return;
  });
}

module.exports = myPlugin;
