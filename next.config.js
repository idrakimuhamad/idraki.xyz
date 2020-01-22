const { PHASE_PRODUCTION_SERVER } =
  process.env.NODE_ENV === 'development'
    ? {}
    : require('next-server/constants');

function fixExternalsPlugin(config = {}) {
  const { webpack } = config;
  config.webpack = (config, ...rest) => {
    config.externals = config.externals || [];
    return webpack(config, ...rest);
  };
  return config;
}

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_PRODUCTION_SERVER) {
    return {
      /* production only config */
    };
  }

  const withSass = require('@zeit/next-sass');
  const withTM = require('next-plugin-transpile-modules');

  return fixExternalsPlugin(
    withTM(
      withSass({
        target: 'serverless',
        transpileModules: ['react-bulma-components'],
        sassLoaderOptions: {
          includePaths: ['./styles']
        }
      })
    )
  );
};
