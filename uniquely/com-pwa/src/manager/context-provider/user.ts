import {getLocalStorageItem} from '@alwatr/util';

import {userContextProvider} from '../context.js';

// demo
userContextProvider.setValue(getLocalStorageItem('user-context', {
  id: 'demo-123',
  fullName: 'Demo User',
}));
