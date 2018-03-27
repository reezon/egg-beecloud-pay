'use strict'

const assert = require('assert')
const BCRESTAPI = require('beecloud-node-sdk')

module.exports = app => {
  const { appId, appSecret, masterSecret, testSecret, isSandbox } = app.config.beecloudPay || {}

  assert(appId && appSecret && masterSecret && testSecret,
    '[egg-beecloud-pay] Must set `appId`, `appSecret`, `masterSecret` and `testSecret` in wechat-api\'s config')

  app.coreLogger.info('[egg-beecloud-pay] setup')

  const api = new BCRESTAPI()
  api.registerApp(appId, appSecret, masterSecret, testSecret)
  api.setSandbox(isSandbox)

  app.beecloudPay = api
}
