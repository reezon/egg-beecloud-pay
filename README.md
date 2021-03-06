# egg-beecloud-pay

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-beecloud-pay.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-beecloud-pay
[travis-image]: https://img.shields.io/travis/eggjs/egg-beecloud-pay.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-beecloud-pay
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-beecloud-pay.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-beecloud-pay?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-beecloud-pay.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-beecloud-pay
[snyk-image]: https://snyk.io/test/npm/egg-beecloud-pay/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-beecloud-pay
[download-image]: https://img.shields.io/npm/dm/egg-beecloud-pay.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-beecloud-pay

<!--
Description here.
-->
egg plugin for [beecloud](https://github.com/beecloud/beecloud-nodejs)

## Install

```bash
$ npm i egg-beecloud-pay --save
```

## Dependencies
- [beecloud-node-sdk](https://github.com/beecloud/beecloud-nodejs)

## Usage

```js
// {app_root}/config/plugin.js
exports.beecloudPay = {
  enable: true,
  package: 'egg-beecloud-pay',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.beecloudPay = {
  isSandbox: true,
  appId: '',
  appSecret: '',
  testSecret: '',
  masterSecret: ''
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
