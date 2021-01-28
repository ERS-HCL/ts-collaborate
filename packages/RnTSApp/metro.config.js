/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const path = require('path');
const getWorkspaces = require('get-yarn-workspaces');
const blacklist = require('metro-config/src/defaults/blacklist');
// const appJson = require('./package.json');

const rootPath = path.resolve(__dirname, '../../');
const workspaces = getWorkspaces(rootPath);
/* const installedDependencies = appJson.dependencies;

const extraNodeModules = {};
Object.keys(installedDependencies).forEach(dep => {
  extraNodeModules[dep] = path.resolve(__dirname, 'node_modules', dep);
});
Object.keys(appJson.devDependencies).forEach(dep => {
  extraNodeModules[dep] = path.resolve(__dirname, 'node_modules', dep);
});
//console.log(extraNodeModules); */
module.exports = {
  projectRoot: path.resolve(rootPath, 'packages/RnTSApp'),

  watchFolders: [path.resolve(__dirname, 'node_modules'), ...workspaces],

  resolver: {
    blacklistRE: blacklist(
      workspaces.map(
        workspacePath =>
          `/${workspacePath.replace(
            /\//g,
            '[/\\\\]',
          )}[/\\\\]node_modules[/\\\\]react-native[/\\\\].*/`,
      ),
    ),
    // extraNodeModules,
    extraNodeModules: {
      'react-native': path.resolve(__dirname, 'node_modules/react-native'),
      react: path.resolve(__dirname, 'node_modules/react'),
      'react-redux': path.resolve(__dirname, 'node_modules/react-redux'),
      'object-assign': path.resolve(__dirname, 'node_modules/object-assign'),
      'prop-types': path.resolve(__dirname, 'node_modules/prop-types'),
      'redux-saga': path.resolve(__dirname, 'node_modules/redux-saga'),
      '@reduxjs/toolkit': path.resolve(
        __dirname,
        'node_modules/@reduxjs/toolkit',
      ),
    },
  },
  resetCache: true,
};
