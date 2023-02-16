const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    main: path.resolve('./dist', 'packages.js'),
  },
  output: {
    path: path.resolve(__dirname, 'src'),
    filename: 'Packages.js',
    library: {
      name: 'Dayjs',
      type: 'var',
    },
  },
};
