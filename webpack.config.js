const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    main: path.resolve('./dist', 'packages.ts'),
  },
  output: {
    path: path.resolve(__dirname, 'src'),
    filename: '0Packages.ts',
    library: {
      name: 'Dayjs',
      type: 'var',
    },
  },
};
