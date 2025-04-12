# Integrating SvelteKit into an Express server at a dynamic base path

```sh
pnpm install
pnpm run start
```

On Windows you might need to enable [`shell-emulator`](https://pnpm.io/cli/run#shellemulator):

```sh
pnpm config set shell-emulator true
```

## Issues

[#595 (comment)](https://github.com/sveltejs/kit/issues/595#issuecomment-1448663284) suggests that this is intended to be a supported configuration, but unfortunately there are some shenanigans as of writing:
1. Asset imports seem to not respect [`kit.paths.relative`](https://svelte.dev/docs/kit/configuration#paths) ([#9569](https://github.com/sveltejs/kit/issues/9569#issuecomment-2795392652))
2. Snafu with trailing slashes on the base path ([#13702](https://github.com/sveltejs/kit/issues/13702), [workaround](https://github.com/HoldYourWaffle/sveltekit-express-dynamic-basepath/blob/6a489f64cf9338d81606570a6184a6188d4d4878/express/server.js#L13))
3. [`trailingSlash`](https://svelte.dev/docs/kit/page-options#trailingSlash) redirects against root instead of base (tbd)
4. [`($app/paths).base`](https://svelte.dev/docs/kit/$app-paths#base) is determined at build-time (tbd, related to [#7242](https://github.com/sveltejs/kit/issues/7242))

## References

- [`adapter-node` with custom server](https://svelte.dev/docs/kit/adapter-node#Custom-server)
