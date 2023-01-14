import {createLogger} from '@alwatr/logger';

export const logger = createLogger('photo');

export const config = {
  nanoServer: {
    host: process.env.HOST ?? '0.0.0.0',
    port: process.env.PORT != null ? +process.env.PORT : 8000,
    allowAllOrigin: true,
    accessToken: process.env.ACCESS_TOKEN ?? 'YOUR_SECRET_TOKEN',
  },
  storage: {
    host: process.env.STORAGE_HOST ?? '127.0.0.1',
    port: process.env.STORAGE_PORT != null ? +process.env.STORAGE_PORT : 9000,
    token: process.env.STORAGE_TOKEN ?? 'YOUR_SECRET_TOKEN',
    name: process.env.STORAGE_NAME ?? 'photo',
  },
  photo: {
    secret: process.env.PHOTO_SECRET ?? 'SECRET',
    originalPath: process.env.ORIGINAL_PHOTO_PATH ?? './',

  },
};

logger.logProperty('config', config);