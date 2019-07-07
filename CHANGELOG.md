# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.10.2](https://github.com/hiroppy/fusuma/compare/v1.10.1...v1.10.2) (2019-07-07)

### Bug Fixes

- **webpack:** set basePath ([1a1c71c](https://github.com/hiroppy/fusuma/commit/1a1c71c))

### Performance Improvements

- **client:** don't use setTimeout when the page number is 0 ([08e4ee2](https://github.com/hiroppy/fusuma/commit/08e4ee2))

## [1.10.1](https://github.com/hiroppy/fusuma/compare/v1.10.0...v1.10.1) (2019-07-07)

### Performance Improvements

- **webpack:** introduce cache-loader ([b009380](https://github.com/hiroppy/fusuma/commit/b009380))

# [1.10.0](https://github.com/hiroppy/fusuma/compare/v1.9.6...v1.10.0) (2019-07-06)

### Bug Fixes

- **client:** modify css ([3409c27](https://github.com/hiroppy/fusuma/commit/3409c27))

### Features

- **configs:** add scaffolding into init command ([0d10187](https://github.com/hiroppy/fusuma/commit/0d10187))

## [1.9.6](https://github.com/hiroppy/fusuma/compare/v1.9.5...v1.9.6) (2019-07-06)

### Bug Fixes

- **client:** fix errors ([944639b](https://github.com/hiroppy/fusuma/commit/944639b))

## [1.9.5](https://github.com/hiroppy/fusuma/compare/v1.9.4...v1.9.5) (2019-07-05)

### Performance Improvements

- **client:** don't include setupWebSlides in useEffect when on browsers ([2445045](https://github.com/hiroppy/fusuma/commit/2445045)), closes [#140](https://github.com/hiroppy/fusuma/issues/140)

## [1.9.4](https://github.com/hiroppy/fusuma/compare/v1.9.3...v1.9.4) (2019-07-05)

### Bug Fixes

- **client:** don't use localstorage when running presentation api ([269975a](https://github.com/hiroppy/fusuma/commit/269975a))
- **fusuma-loader:** replace class with className ([48d0f73](https://github.com/hiroppy/fusuma/commit/48d0f73))

## [1.9.3](https://github.com/hiroppy/fusuma/compare/v1.9.2...v1.9.3) (2019-07-04)

### Bug Fixes

- resolve edge-case of webpack base-path resolution ([2b05c77](https://github.com/hiroppy/fusuma/commit/2b05c77))
- **client:** don't accept null ([84ff3aa](https://github.com/hiroppy/fusuma/commit/84ff3aa)), closes [#139](https://github.com/hiroppy/fusuma/issues/139)
- **client:** modify code block font size ([#136](https://github.com/hiroppy/fusuma/issues/136)) ([2ef98fa](https://github.com/hiroppy/fusuma/commit/2ef98fa))
- **webpack:** don't output remark warning ([d66093f](https://github.com/hiroppy/fusuma/commit/d66093f))

## [1.9.2](https://github.com/hiroppy/fusuma/compare/v1.9.1...v1.9.2) (2019-07-01)

### Bug Fixes

- **client:** optimize webSlides ([6ae8025](https://github.com/hiroppy/fusuma/commit/6ae8025))

## [1.9.1](https://github.com/hiroppy/fusuma/compare/v1.9.0...v1.9.1) (2019-07-01)

### Bug Fixes

- **webpack:** don't use alias on userland ([3202f4b](https://github.com/hiroppy/fusuma/commit/3202f4b))

# [1.9.0](https://github.com/hiroppy/fusuma/compare/v1.8.0...v1.9.0) (2019-07-01)

### Bug Fixes

- **configs:** showIndex is now as a default ([bdffa06](https://github.com/hiroppy/fusuma/commit/bdffa06))
- **webpack:** add output log ([04a3521](https://github.com/hiroppy/fusuma/commit/04a3521))

### Features

- **client:** support HMR of mermaid ([abee659](https://github.com/hiroppy/fusuma/commit/abee659))
- **configs:** add chart option ([a60a466](https://github.com/hiroppy/fusuma/commit/a60a466))
- **webpack:** don't use webpack-dev-server ([dd4a3fb](https://github.com/hiroppy/fusuma/commit/dd4a3fb))
- **webpack:** implement to generate mermaid nodes in MDXAST ([bfd73a5](https://github.com/hiroppy/fusuma/commit/bfd73a5))
- **webpack:** run SSR when running build task ([b277517](https://github.com/hiroppy/fusuma/commit/b277517))
- **webpack:** support MathJax ([adeaf00](https://github.com/hiroppy/fusuma/commit/adeaf00))

### Performance Improvements

- **client:** don't use setTimeout when NODE_ENV=production ([dd49411](https://github.com/hiroppy/fusuma/commit/dd49411))

# [1.8.0](https://github.com/hiroppy/fusuma/compare/v1.7.0...v1.8.0) (2019-06-26)

### Features

- **client:** implement drawing feature ([7a75b09](https://github.com/hiroppy/fusuma/commit/7a75b09))

# [1.7.0](https://github.com/hiroppy/fusuma/compare/v1.6.0...v1.7.0) (2019-06-25)

### Features

- **client:** implement capturing screen contents ([9c98fc0](https://github.com/hiroppy/fusuma/commit/9c98fc0))

# [1.6.0](https://github.com/hiroppy/fusuma/compare/v1.5.1...v1.6.0) (2019-06-24)

### Bug Fixes

- **client:** calculate blob's duration ([f953623](https://github.com/hiroppy/fusuma/commit/f953623))
- **client:** modify sidebar css ([4505871](https://github.com/hiroppy/fusuma/commit/4505871))
- **configs:** don't validate .fusumarc ([e76fe22](https://github.com/hiroppy/fusuma/commit/e76fe22))
- **fusumarc:** decide repositoryUrl automatically ([175b966](https://github.com/hiroppy/fusuma/commit/175b966))
- **fusumarc:** remove author key ([7e03faa](https://github.com/hiroppy/fusuma/commit/7e03faa))
- **fusumarc:** rename from name to title ([bdcccd7](https://github.com/hiroppy/fusuma/commit/bdcccd7))
- **webpack:** avoid using AggressiveMergingPlugin ([2411456](https://github.com/hiroppy/fusuma/commit/2411456))

### Features

- **client:** implement timeline and recording ([52264f5](https://github.com/hiroppy/fusuma/commit/52264f5))

### Performance Improvements

- optimize processing performance ([c33a19d](https://github.com/hiroppy/fusuma/commit/c33a19d))

## [1.5.1](https://github.com/hiroppy/fusuma/compare/v1.5.0...v1.5.1) (2019-06-22)

### Bug Fixes

- **client:** don't use lazyload ([900d245](https://github.com/hiroppy/fusuma/commit/900d245))

# [1.5.0](https://github.com/hiroppy/fusuma/compare/v1.4.2...v1.5.0) (2019-06-20)

### Features

- **live:** renew design and logger ([44b3463](https://github.com/hiroppy/fusuma/commit/44b3463))

## [1.4.2](https://github.com/hiroppy/fusuma/compare/v1.4.1...v1.4.2) (2019-06-19)

### Bug Fixes

- **live:** push comments list if a user joins ([3a6e1f2](https://github.com/hiroppy/fusuma/commit/3a6e1f2))
- **webpack:** don't output built logs when pdf and live ([041a09a](https://github.com/hiroppy/fusuma/commit/041a09a))

## [1.4.1](https://github.com/hiroppy/fusuma/compare/v1.4.0...v1.4.1) (2019-06-19)

### Bug Fixes

- **webpack:** don't use chunks:all in splitChunks ([61b0a42](https://github.com/hiroppy/fusuma/commit/61b0a42))

# [1.4.0](https://github.com/hiroppy/fusuma/compare/v1.3.0...v1.4.0) (2019-06-19)

### Bug Fixes

- some tweaks ([821050c](https://github.com/hiroppy/fusuma/commit/821050c))

### Features

- **client:** change sidebar ui ([efbaed8](https://github.com/hiroppy/fusuma/commit/efbaed8))

# [1.3.0](https://github.com/hiroppy/fusuma/compare/v1.2.3...v1.3.0) (2019-06-19)

### Features

- introduce live mode ([f13985a](https://github.com/hiroppy/fusuma/commit/f13985a))
- **utils:** add lazyloadModules ([3f257db](https://github.com/hiroppy/fusuma/commit/3f257db))

## [1.2.3](https://github.com/hiroppy/fusuma/compare/v1.2.2...v1.2.3) (2019-06-18)

### Bug Fixes

- **client:** fix typo ([803c4b0](https://github.com/hiroppy/fusuma/commit/803c4b0))
- **fusuma:** check to exist @fusuma/task-pdf ([074712e](https://github.com/hiroppy/fusuma/commit/074712e))

## [1.2.2](https://github.com/hiroppy/fusuma/compare/v1.2.1...v1.2.2) (2019-06-17)

### Bug Fixes

- **webpack:** resolve path ([f1811a0](https://github.com/hiroppy/fusuma/commit/f1811a0))

## [1.2.1](https://github.com/hiroppy/fusuma/compare/v1.2.0...v1.2.1) (2019-06-17)

### Bug Fixes

- **fusuma:** add shebang ([d170610](https://github.com/hiroppy/fusuma/commit/d170610))

# [1.2.0](https://github.com/hiroppy/fusuma/compare/v1.1.2...v1.2.0) (2019-06-17)

### Bug Fixes

- **client:** move init of ws process to base ([b4caaf6](https://github.com/hiroppy/fusuma/commit/b4caaf6))
- **deps:** update dependency css-loader to v3 ([85bbc6e](https://github.com/hiroppy/fusuma/commit/85bbc6e))
- **deps:** update dependency deepmerge to v3.2.1 ([6b390d2](https://github.com/hiroppy/fusuma/commit/6b390d2))
- **deps:** update dependency file-loader to v4 ([795349e](https://github.com/hiroppy/fusuma/commit/795349e))
- **Host:** fix note ([28974bd](https://github.com/hiroppy/fusuma/commit/28974bd))
- **presenter:** disable lazyload on view mode ([91fd6fa](https://github.com/hiroppy/fusuma/commit/91fd6fa))
- **webpack:** replace a string of image src with cjs ([883d007](https://github.com/hiroppy/fusuma/commit/883d007))
- lazyload ([ba9669b](https://github.com/hiroppy/fusuma/commit/ba9669b))

### Features

- **client:** delete loading screen ([05230b8](https://github.com/hiroppy/fusuma/commit/05230b8))
- **client:** enable hmr ([fc6bd03](https://github.com/hiroppy/fusuma/commit/fc6bd03))
- **client:** enable mdx ([8781843](https://github.com/hiroppy/fusuma/commit/8781843))
- **webpack:** create webpack-loader to traverse MDAST ([1db5281](https://github.com/hiroppy/fusuma/commit/1db5281))
- **webpack:** support emoji ([c898581](https://github.com/hiroppy/fusuma/commit/c898581)), closes [#92](https://github.com/hiroppy/fusuma/issues/92)
