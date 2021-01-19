# TSDX based Monorepo

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)
![unit test](https://github.com/ERS-HCL/ts-collaborate/workflows/Unit%20Test/badge.svg)
![E2E Test](https://github.com/ERS-HCL/ts-collaborate/workflows/E2E%20Test/badge.svg)
![Lint](https://github.com/ERS-HCL/ts-collaborate/workflows/Lint/badge.svg)
![size](https://github.com/ERS-HCL/ts-collaborate/workflows/Compressed%20Size/badge.svg)
![Release](https://github.com/ERS-HCL/ts-collaborate/workflows/Release/badge.svg)

## Usage

This monorepo is setup for a dummy `@thefakeorg/` NPM organization. There are 4 shared packages:

- `@thefakeorg/react` - React shared component library
- `@thefakeorg/react` - React Native shared component library
- `@thefakeorg/utils` - A utils packages
- `@thefakeorg/store` - A redux store 


Unlike other TSDX templates, the developer experience for this template is currently a bit more manual.

Your first order of business will be to search and replace `@thefakeorg` for the npm organization of your own.

After that you can install all the dependencies in the root directory. Since the monorepo uses Lerna and Yarn Workspaces, npm CLI is not supported (only yarn).

```sh
yarn install
```

This will install all dependencies in each project, build them, and symlink them via Lerna

## Development workflow

In one terminal, run tsdx watch in parallel:

```sh
yarn start
```

This builds each package to `<packages>/<package>/dist` and runs the project in watch mode so any edits you save inside `<packages>/<package>/src` cause a rebuild to `<packages>/<package>/dist`. The results will stream to to the terminal.

### Using the web-app (NextJS Web APP)

NextJS App which is using the shared libraries

```sh
yarn start:web-app
```

This will start the web-app on `localhost:3000`. If you have lerna running watch in parallel mode in one terminal, and then you run `yarn dev` inside the project directory for hot reloading

Important Safety Tip: When adding/altering packages in the playground, use `alias` object in package.json. This will tell Webpack/Parcel to resolve them to the filesystem instead of trying to install the package from NPM. It also fixes duplicate React errors you may run into. This approach works fine in the NextJS application , however for the `native-app` this seems to have issues related to the `multiple react versions` where ever the `react` dependency is involved. To handle this we use the `traditional link` approach for hot module reload.

### Using the native-app (React Native App)


React Native App which is using the shared libraries

```sh
yarn start:native-app
```

This builds the shared dependencies and starts the application.

As mentioned above for hot module reload based debugging for the shared dependencies specially where `react` dependencies are involved, we need to do the following

```sh
cd <root_dir>packages/react-native
yarn link
```

This will create a link for `@thefakeorg/react-native` library and now be linked to the `native-app`

```sh
cd <root_dir>/native-app
yarn link "@thefakeorg/react-native"
```

Now you can hot module reload the shared react native components.

### Running Cypress

(In a third terminal) you can run Cypress and it will run your integration tests against the playground/example. If you want to keep integration tests and examples seperate you can copy the example folder to another folder called like `app` or whatever. Cypress will look for `localhost:3000` by default. If you change ports, also make sure to update [`.github/integration.yaml`](.github/integration.yml) as well.


### Running Storybook

```
yarn storybook
```