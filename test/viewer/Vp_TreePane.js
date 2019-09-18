var config = require('../../nightwatch.conf.js');

module.exports = {
  'Tree Pane': function(browser) {
    browser
      .login(browser.globals.viewer_user, browser.globals.viewer_pass)
      .waitForElementVisible('a[href="/site/R4D/"]') 
      .click('a[href="/site/R4D/"]')
      .waitForElementVisible('.content', 2000)
      .assert.containsText('.content', 'Welcome')
      .assert.containsText('.ac.content-left', 'Homepage')
      .assert.containsText('a[href="/site/R4D/?id=7"]', 'HSE')
      .waitForElementVisible('.treenode__toggle')
      .click('.treenode__toggle')
      .waitForElementVisible('a[title="BowTie Loss of Containment"]')
      .click('a[href="/site/R4D/?guid=7248a49e-eb70-4e2d-a274-52372d92e335"]')
      .waitForElementVisible('.ac.viewer-body.document-viewer.js-control')
      .waitForElementVisible('a[title="Drawings"]')
      .click('a[title="Drawings"]')
      .pause(2000)
      .assert.containsText('.ac.viewer-header.js-control', 'Drawings')
      .click('.tree__control.tree__control--settings')
      .waitForElementVisible('.popup.aligned-top.active')
      .end();
  }
};
