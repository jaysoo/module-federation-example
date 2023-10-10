import { shared } from '../../module-federation.base.config';

export default {
  name: 'blog',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
  shared,
};
