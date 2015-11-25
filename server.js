require('babel-core/register')({
  retainLines: typeof v8debug !== 'undefined',
});
require('./src/server/index.js');
