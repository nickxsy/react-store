import { Configuration as DevServerConfigurations } from 'webpack-dev-server';

import { BuildOptions } from './types/config';

export function buildDevServer(options: BuildOptions): DevServerConfigurations {
  return {
    port: options.port,
    open: false,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH'
    }
  };
}
