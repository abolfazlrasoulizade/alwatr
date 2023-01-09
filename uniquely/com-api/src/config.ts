import {createLogger} from '@alwatr/logger';

export const logger = createLogger('com-api');

export const config = {
  orderStorage: {
    host: process.env.ORDER_STORAGE_HOST ?? '127.0.0.1',
    port: process.env.ORDER_STORAGE_PORT != null ? +process.env.ORDER_STORAGE_PORT : 9000,
    token: process.env.ORDER_STORAGE_TOKEN ?? 'YOUR_SECRET_TOKEN',
  },
  productStorage: {
    host: process.env.PRODUCT_STORAGE_HOST ?? '127.0.0.1',
    port: process.env.PRODUCT_STORAGE_PORT != null ? +process.env.PRODUCT_STORAGE_PORT : 9000,
    name: process.env.SPRODUCT_TORAGE_NAME ?? 'product',
    token: process.env.PRODUCT_STORAGE_TOKEN ?? 'YOUR_SECRET_TOKEN',
  },
  token: {
    secret: process.env.SECRET ?? 'YOUR_SECRET',
  },
  nanoServer: {
    host: process.env.HOST ?? '0.0.0.0',
    port: process.env.PORT != null ? +process.env.PORT : 8000,
    accessToken: process.env.ACCESS_TOKEN ?? 'YOUR_SECRET_TOKEN',
    allowAllOrigin: true,
  },
};

logger.logProperty('config', config);
