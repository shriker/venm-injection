# 🐍 VENM Injection

[![Build Status](https://travis-ci.org/shriker/venm-injection.svg?branch=master)](https://travis-ci.org/shriker/venm-injection)

Full-stack TypeScript environment: Vue.js, ExpressJS, Node.js, and MongoDB. MEAN but with Vue (MEVN).

## Stack

* [x] TypeScript
* [x] **[MongoDB](https://www.mongodb.com/)** with [Mongoose](http://mongoosejs.com/)
* [x] **[Node.js](https://nodejs.org/)**
* [x] **[ExpressJS](https://expressjs.com/)**
* [x] **[Vue.js](https://vuejs.org/)**

### Including

* [x] [axios](https://github.com/mzabriskie/axios)
* [x] [Jest](https://jestjs.io/)
* [x] Passport

## Prerequisites

1. [Visual Studio Code](https://code.visualstudio.com/) - *Recommended*
1. [Git](https://git-scm.com/downloads)
1. [Node.js](https://nodejs.org/)
1. [MongoDB](https://www.mongodb.com/) - Install and run MongoDB, making sure it is running on the default port (27017)

## Project Structure

The most obvious difference in a TypeScript + Node project is the folder structure.
In a TypeScript project, it's best to have separate _source_  and _distributable_ files.
TypeScript (`.ts`) files live in your `src` folder and after compilation are output as JavaScript (`.js`) in the `dist` folder.
The `test` and `views` folders remain top level as expected.

The full folder structure of this app is explained below:

> **Note!** Make sure you have already built the app using `npm run build`

| Name | Description |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| **.vscode**              | Contains VS Code specific settings                                                            |
| **dist**                 | Contains the distributable (or output) from your TypeScript build. This is the code you ship  |
| **node_modules**         | Contains all your npm dependencies                                                            |
| **src**                  | Contains your source code that will be compiled to the dist dir                               |
| **src/config**           | Passport authentication strategies and login middleware. Add other complex config code here   |
| **src/controllers**      | Controllers define functions that respond to various http requests                            |
| **src/models**           | Models define Mongoose schemas that will be used in storing and retrieving data from MongoDB  |
| **src/public**           | Static assets that will be used client side                                                   |
| **src/types**            | Holds .d.ts files not found on DefinitelyTyped.                                               |
| **src**/server.ts        | Entry point to your express app                                                               |
| **test**                 | Contains your tests. Separate from source because there is a different build process.         |
| **views**                | Views define how your app renders on the client.                                              |
| .env.example             | API keys, tokens, passwords, database URI.                                                    |
| .eslintignore            | Config settings for paths to exclude from linting                                             |
| .eslintrc.js             | Config settings for ESLint code style checking                                                |
| .prettierrc.js           | Config settings for Prettier                                                                  |
| .travis.yml              | Used to configure Travis CI build                                                             |
| .copyStaticAssets.ts     | Build script that copies images, fonts, and JS libs to the dist folder                        |
| jest.config.js           | Used to configure Jest running tests written in TypeScript                                    |
| package.json             | File that contains npm dependencies as well as build scripts                                  |
| tsconfig.json            | Config settings for compiling server code written in TypeScript                               |

### Running scripts

To call a script, simply run `npm run <script-name>` from the command line.
You'll notice that npm scripts can call each other which makes it easy to compose complex builds out of simple individual build scripts.
Below is a list of all the scripts available:

| Npm Script | Description |
| ------------------------- | ------------------------------------------------------------------------------------------------- |
| `start`                   | Does the same as 'npm run serve'. Can be invoked with `npm start`                                 |
| `build`                   | Full build. Runs ALL build tasks (`build-sass`, `build-ts`, `lint`, `copy-static-assets`)       |
| `serve`                   | Runs node on `dist/server.js` which is the apps entry point                                       |
| `watch-node`              | Runs node with nodemon so the process restarts if it crashes. Used in the main watch task         |
| `watch`                   | Runs all watch tasks (TypeScript, Sass, Node). Use this if you're not touching static assets.     |
| `test`                    | Runs tests using Jest test runner                                                                 |
| `watch-test`              | Runs tests in watch mode                                                                          |
| `build-ts`                | Compiles all source `.ts` files to `.js` files in the `dist` folder                                 |
| `watch-ts`                | Same as `build-ts` but continuously watches `.ts` files and re-compiles when needed                |
| `build-sass`              | Compiles all `.scss` files to `.css` files                                                          |
| `watch-sass`              | Same as `build-sass` but continuously watches `.scss` files and re-compiles when needed            |
| `lint`                    | Runs ESLint on project files                                                                       |
| `copy-static-assets`      | Calls script that copies JS libs, fonts, and images to dist directory                             |
| `debug`                   | Performs a full build and then serves the app in watch mode                                       |
| `serve-debug`             | Runs the app with the --inspect flag                                                               |
| `watch-debug`             | The same as `watch` but includes the --inspect flag so you can attach a debugger                   |

## Testing
Simply run `npm run test`.
Note this will also generate a coverage report.

## License
This project is derivived from [TypeScript-Node-Starter](https://github.com/microsoft/TypeScript-Node-Starter) by Microsoft.
Licensed under the [MIT](LICENSE.md) License.
