'use strict'

/**
 * egg-beecloud-pay default config
 * @member Config#beecloudPay
 * @property {Boolean} isSandbox - 是否沙盒测试
 * @property {String} appId - appId
 * @property {String} appSecret - appSecret
 * @property {String} testSecret - testSecret
 * @property {String} masterSecret - masterSecret
 */
exports.beecloudPay = {
  app: true,
  agent: false,
  isSandbox: false,
  appId: '',
  appSecret: '',
  testSecret: '',
  masterSecret: ''
}
