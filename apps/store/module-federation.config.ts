import { shared } from '../../module-federation.base.config';

export default {
  name: 'store',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
  shared,
};
