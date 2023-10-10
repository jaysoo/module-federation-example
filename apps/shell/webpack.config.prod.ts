import { composePlugins, withNx } from '@nx/webpack';
import { withReact } from '@nx/react';
import { withModuleFederation } from '@nx/react/module-federation';

import baseConfig from './module-federation.config';

const prodConfig = {
  ...baseConfig,
  remotes: [
    ['about', 'https://jazzy-bublanina-a66402.netlify.app'],
    ['blog', 'https://celebrated-florentine-da1449.netlify.app'],
    ['store', 'https://lighthearted-dusk-3e4645.netlify.app'],
  ],
};

// Nx plugins for webpack to build config object from Nx options and context.
export default composePlugins(
  withNx(),
  withReact(),
  withModuleFederation(prodConfig)
);
