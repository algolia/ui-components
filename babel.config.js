module.exports = (api) => {
  const isTest = api.env('test');
  const isCjs = api.env('cjs');
  const modules = isTest || isCjs ? 'commonjs' : false;
  const targets = {};

  if (isTest) {
    targets.node = true;
  } else {
    targets.browsers = ['last 2 versions', 'ie >= 9'];
  }

  return {
    presets: [
      ['@babel/preset-typescript'],
      ['@babel/preset-react'],
      [
        '@babel/preset-env',
        {
          modules,
          targets,
        },
      ],
    ],
    plugins: [
      [
        '@babel/plugin-transform-runtime',
        {
          corejs: false,
          helpers: true,
          regenerator: true,
        },
      ],
    ],
  };
};
