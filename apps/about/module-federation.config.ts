import { shared } from '../../module-federation.base.config';

export default {
  name: 'about',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
  shared,
};
