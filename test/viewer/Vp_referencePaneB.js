var config = require('../../nightwatch.conf.js');

module.exports = {
  'Reference Pane': function(browser) {
    browser
      .login(browser.globals.viewer_user, browser.globals.viewer_pass)
      .waitForElementVisible('a[href="/site/R4D/"]')
      .click('a[href="/site/R4D/"]')
      .waitForElementVisible('a[href="/site/R4D/?guid=1f29f91b-38bd-4c67-aa25-e19dbfab9100"]')
      .click('a[href="/site/R4D/?guid=1f29f91b-38bd-4c67-aa25-e19dbfab9100"]')
      .assert.containsText('body', 'P&ID WELL-6')
      .waitForElementVisible('.ac.viewer-sidebar-pane-inner.js-control')
      .assert.containsText('.ac.viewer-sidebar-pane-inner.js-control', 'Possible references')
      .waitForElementVisible('.sidebar-header.sidebar-header-pos-11.below')
      .click('.sidebar-header.sidebar-header-pos-11.below')
      .assert.containsText('.candidate-list', 'Line numbers')
      // .waitForElementVisible('.candidate__label icon.icon-file', function() {
      //   browser.click('.candidate__label icon.icon-file')
      // })
      .click('.sidebar-header.sidebar-header-pos-10.above')
      .assert.containsText('.ac.viewer-sidebar-pane-inner.js-control', 'Operating Manual')
      .end()
    }
}
