var config = require('../../nightwatch.conf.js');

module.exports = {
  'Viewport login page': function(browser) {
    browser
      .login(browser.globals.viewer_user, browser.globals.viewer_pass)
      .end();
  }
};
