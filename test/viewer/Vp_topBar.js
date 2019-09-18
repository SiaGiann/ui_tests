var config = require('../../nightwatch.conf.js');

module.exports = {
  'Viewport Top Bar': function(browser) {
    browser
      .login(browser.globals.viewer_user, browser.globals.viewer_pass)
      .execute(function (input) {
        $('#searchpageBox').trigger('focus');
      })
      .keys(['r4d'])
      .pause(1000)
      .keys([' '])
      .waitForElementVisible('#ui-id-1', 3000)
      .pause(2000)
      .click('.general-tools__new-tab-link')
      .switchWindow()
      .pause(3000)
      .assert.urlEquals(browser.globals.base_url + "/Start.aspx")
      // .switchWindow()
      .waitForElementVisible('a[class=general-tools__feedback-link]')
      .click('a[class=general-tools__feedback-link]')
      .waitForElementVisible('#feedback-form', 1000)
      .assert.containsText('#feedback-form', 'How can we help you')
      // share link
      .waitForElementVisible('a[class=general-tools__share-link]')
      .click('a[class=general-tools__share-link]')
      .waitForElementVisible('#sharelink-form', 1000)
      .assert.containsText('#sharelink-form', 'Add a personal message')
      // viewer div
      .waitForElementVisible('.app-header__item.app-header__item--personal.loggedIn', 'viewer', function() {
        browser.click('.app-header__item.app-header__item--personal.loggedIn')
      } )
      .waitForElementVisible('.personal-menu.dialog', 1000)
      .assert.containsText('.personal-menu.dialog', 'viewer')
      //logout
      .waitForElementVisible('.personal-menu__item__link.app-log-out', 'Log Out', function() {
        browser.click('.personal-menu__item__link.app-log-out')
      } )
      .waitForElementVisible('.loggedIn', 1000)
      .assert.containsText('.loggedIn', 'You are now logged in')
      .end();
  }
};
