This is a demo of the Module Federation feature using Nx and React.

The main `shell` app routes to three remote apps: `about`, `blog`, and `store`. There is a shared `@acme/ui` library that is versioned and used in all apps.

Apps can be deployed independently, and the version from `packages/ui/package.json` will determine what each app is built with and what it consumes during runtime.

The app is deployed here: https://lucky-semolina-476b64.netlify.app/

You can see that Home and About are serving two different versions of `@acme/ui` because the latter was deployed with an updated version of the library.

