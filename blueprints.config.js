var externals = [
  'each',
  'has',
  'isEmpty',
  'last',
  'pick',
  'omit',
  'some',
].reduce(function(dict, name) {
  dict['lodash/'+name] = name;
  return dict;
}, {
  lodash: 'lodash',
  superagent: 'superagent',
});


module.exports = function() { return [{
  name: 'apiClient',
  webpack: {
    entry: {
      build: './src/index.es6.js',
    },
    output: {
      library: '[name].js',
      libraryTarget: 'umd',
    },
    resolve: {
      generator: 'npm-and-modules',
      paths: [''],
      extensions: ['', '.js', '.jsx', '.es6.js', '.json'],
    },
    loaders: [
      'esnextreact',
      'json',
    ],
    plugins: [
      'production-loaders',
      'set-node-env',
      'abort-if-errors',
      'minify-and-treeshake',
    ],
    externals: externals,
  },
}]}
