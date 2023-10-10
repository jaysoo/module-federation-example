import { shared } from '../../module-federation.base.config';

export default {
  name: 'shell',
  remotes: ['about', 'blog', 'store'],
  shared,
};
