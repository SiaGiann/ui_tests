var config = require('../../nightwatch.conf.js');


module.exports = {
  'Login as an Admin': function(browser) {
    browser
      .login(browser.globals.admin_user, browser.globals.admin_pass)
      .end();
  }
};



