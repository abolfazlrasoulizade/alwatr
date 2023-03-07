import {existsSync} from 'node:fs';

// https://modern-web.dev/docs/dev-server/cli-and-configuration/#configuration-file
/** @type {import('@web/dev-server').DevServerConfig} */
export const config = {
  port: 8080,
  open: true,
  watch: true,
  // debug: true,
  rootDir: 'dist',
  appIndex: 'index.html',
  plugins: [],
  middleware: [(context, next) => {
    // if file not found, return app index.html
    if (!(
      context.url === '/' ||
      context.url.startsWith('/__w') ||
      existsSync(config.rootDir + context.url)
    )) {
      context.url = config.appIndex;
    }
    return next();
  }],
};
