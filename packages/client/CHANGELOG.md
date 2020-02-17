# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.16.0](https://github.com/hiroppy/fusuma/compare/v1.15.2...v1.16.0) (2020-02-17)

### Features

- **qr:** implement qr code ([6397b57](https://github.com/hiroppy/fusuma/commit/6397b57ff1c655aa07827968f690e0079cfbb88f))

## [1.15.2](https://github.com/hiroppy/fusuma/compare/v1.15.1...v1.15.2) (2020-02-13)

### Bug Fixes

- **babel:** update babel-plugin-prismjs and babel-loader ([bec5b41](https://github.com/hiroppy/fusuma/commit/bec5b4136314d83b44db17e24c73383a590ca50a))

## [1.15.1](https://github.com/hiroppy/fusuma/compare/v1.15.0...v1.15.1) (2020-01-05)

**Note:** Version bump only for package @fusuma/client

# [1.15.0](https://github.com/hiroppy/fusuma/compare/v1.14.2...v1.15.0) (2019-09-04)

**Note:** Version bump only for package @fusuma/client

## [1.14.2](https://github.com/hiroppy/fusuma/compare/v1.14.1...v1.14.2) (2019-08-10)

**Note:** Version bump only for package @fusuma/client

## [1.14.1](https://github.com/hiroppy/fusuma/compare/v1.14.0...v1.14.1) (2019-07-30)

**Note:** Version bump only for package @fusuma/client

# [1.14.0](https://github.com/hiroppy/fusuma/compare/v1.13.0...v1.14.0) (2019-07-26)

### Features

- add build.ssr option ([3e49dde](https://github.com/hiroppy/fusuma/commit/3e49dde))

# [1.13.0](https://github.com/hiroppy/fusuma/compare/v1.12.1...v1.13.0) (2019-07-16)

**Note:** Version bump only for package @fusuma/client

## [1.12.1](https://github.com/hiroppy/fusuma/compare/v1.12.0...v1.12.1) (2019-07-12)

### Bug Fixes

- **client:** call Prism.hightlightAll ([9850452](https://github.com/hiroppy/fusuma/commit/9850452))
- **client:** fix Twitter lint in Sidebar and decide URL automatically ([b5ec52d](https://github.com/hiroppy/fusuma/commit/b5ec52d))

# [1.12.0](https://github.com/hiroppy/fusuma/compare/v1.11.0...v1.12.0) (2019-07-10)

### Features

- **client:** implement some components for user-land ([d203381](https://github.com/hiroppy/fusuma/commit/d203381))

# [1.11.0](https://github.com/hiroppy/fusuma/compare/v1.10.2...v1.11.0) (2019-07-08)

### Features

- **mdx:** implement line-highlight ([94e83e7](https://github.com/hiroppy/fusuma/commit/94e83e7))

## [1.10.2](https://github.com/hiroppy/fusuma/compare/v1.10.1...v1.10.2) (2019-07-07)

### Performance Improvements

- **client:** don't use setTimeout when the page number is 0 ([08e4ee2](https://github.com/hiroppy/fusuma/commit/08e4ee2))

# [1.10.0](https://github.com/hiroppy/fusuma/compare/v1.9.6...v1.10.0) (2019-07-06)

### Bug Fixes

- **client:** modify css ([3409c27](https://github.com/hiroppy/fusuma/commit/3409c27))

## [1.9.6](https://github.com/hiroppy/fusuma/compare/v1.9.5...v1.9.6) (2019-07-06)

### Bug Fixes

- **client:** fix errors ([944639b](https://github.com/hiroppy/fusuma/commit/944639b))

## [1.9.5](https://github.com/hiroppy/fusuma/compare/v1.9.4...v1.9.5) (2019-07-05)

### Performance Improvements

- **client:** don't include setupWebSlides in useEffect when on browsers ([2445045](https://github.com/hiroppy/fusuma/commit/2445045)), closes [#140](https://github.com/hiroppy/fusuma/issues/140)

## [1.9.4](https://github.com/hiroppy/fusuma/compare/v1.9.3...v1.9.4) (2019-07-05)

### Bug Fixes

- **client:** don't use localstorage when running presentation api ([269975a](https://github.com/hiroppy/fusuma/commit/269975a))

## [1.9.3](https://github.com/hiroppy/fusuma/compare/v1.9.2...v1.9.3) (2019-07-04)

### Bug Fixes

- **client:** don't accept null ([84ff3aa](https://github.com/hiroppy/fusuma/commit/84ff3aa)), closes [#139](https://github.com/hiroppy/fusuma/issues/139)
- **client:** modify code block font size ([#136](https://github.com/hiroppy/fusuma/issues/136)) ([2ef98fa](https://github.com/hiroppy/fusuma/commit/2ef98fa))

## [1.9.2](https://github.com/hiroppy/fusuma/compare/v1.9.1...v1.9.2) (2019-07-01)

### Bug Fixes

- **client:** optimize webSlides ([6ae8025](https://github.com/hiroppy/fusuma/commit/6ae8025))

## [1.9.1](https://github.com/hiroppy/fusuma/compare/v1.9.0...v1.9.1) (2019-07-01)

### Bug Fixes

- **webpack:** don't use alias on userland ([3202f4b](https://github.com/hiroppy/fusuma/commit/3202f4b))

# [1.9.0](https://github.com/hiroppy/fusuma/compare/v1.8.0...v1.9.0) (2019-07-01)

### Bug Fixes

- **configs:** showIndex is now as a default ([bdffa06](https://github.com/hiroppy/fusuma/commit/bdffa06))

### Features

- **client:** support HMR of mermaid ([abee659](https://github.com/hiroppy/fusuma/commit/abee659))
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

# [1.4.0](https://github.com/hiroppy/fusuma/compare/v1.3.0...v1.4.0) (2019-06-19)

### Bug Fixes

- some tweaks ([821050c](https://github.com/hiroppy/fusuma/commit/821050c))

### Features

- **client:** change sidebar ui ([efbaed8](https://github.com/hiroppy/fusuma/commit/efbaed8))

# [1.3.0](https://github.com/hiroppy/fusuma/compare/v1.2.3...v1.3.0) (2019-06-19)

### Features

- introduce live mode ([f13985a](https://github.com/hiroppy/fusuma/commit/f13985a))

## [1.2.3](https://github.com/hiroppy/fusuma/compare/v1.2.2...v1.2.3) (2019-06-18)

### Bug Fixes

- **client:** fix typo ([803c4b0](https://github.com/hiroppy/fusuma/commit/803c4b0))

# [1.2.0](https://github.com/hiroppy/fusuma/compare/v1.1.2...v1.2.0) (2019-06-17)

**Note:** Version bump only for package @fusuma/client
