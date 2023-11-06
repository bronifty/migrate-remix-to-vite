# Migrate Remix to Vite

### Begin with a standard Remix install

- don't have it install node_modules if you want to follow with this explanation using yarn

```sh
npx create-remix@latest
```

- change directory into your new app; for instance if it's the current default name

```sh
cd ./my-remix-app
```

- install the deps

```sh
yarn
```

- swap the @remix-run/dev/dist folder out of node_modules for the custom built one with update to compiler

```sh
rm -rf node_modules/@remix-run/dev/dist && cp -r @remix-run/dev/dist/ node_modules/@remix-run/dev/
```

### Compiler Plugin Update Notes

- this is the update made to the vite plugin for remix

```ts
viteChildCompiler = await createViteDevServer({
          ...viteUserConfig,
          mode: viteConfig.mode,
```

![](./vite-plugin.png)
