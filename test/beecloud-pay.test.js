'use strict';

const mock = require('egg-mock');

describe('test/beecloud-pay.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/beecloud-pay-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, beecloudPay')
      .expect(200);
  });
});
