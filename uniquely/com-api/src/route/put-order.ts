import {config, logger} from '../lib/config.js';
import {nanoServer} from '../lib/server.js';
import {storageClient} from '../lib/storage.js';

import type {Order} from '@alwatr/type/customer-order-management.js';

// Insert new order
nanoServer.route('PUT', '/order/', async (connection) => {
  logger.logMethod('put-order');

  connection.requireToken(config.nanoServer.accessToken);
  const params = connection.requireQueryParams<{userId: string}>({userId: 'string'});
  const remoteAddress = connection.getRemoteAddress();
  const clientId = connection.requireClientId();

  const order = await connection.requireJsonBody<Order>();

  order.id = 'auto_increment';
  order.status = 'registered';
  order.clientId = clientId;
  order.remoteAddress = remoteAddress;

  return {
    ok: true,
    data: await storageClient.set<Order>(order, config.orderStoragePrefix + params.userId),
  };
});
