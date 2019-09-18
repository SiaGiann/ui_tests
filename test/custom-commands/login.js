var config = require('../../nightwatch.conf.js')
require('env2')('.env');
var load_speed = 3000


exports.command = function(username, password) {

  this
    .url(this.globals.base_url)
    .windowMaximize()
    .waitForElementVisible('body', load_speed)
    .setValue('#LoginView1_Login1_UserName', username)
    .setValue('#LoginView1_Login1_Password', password)
    .click('#LoginView1_Login1_LoginButton')
    .pause(load_speed)
    .assert.elementPresent('a[href="/site/R4D/"]')

  return this;
};

