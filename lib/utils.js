module.exports = {
  checkDependency: (depName) => {
    try {
      const dep = require(depName);
      return dep;
    } catch (err) {
      console.error(
        err.message + '\n',
        `hexo-plugin-permalink-no-folder needs dependency '${depName}'.\n`,
        `Running 'npm install ${depName} --save' may solve the error`
      );
      return undefined;
    }
  }
};
