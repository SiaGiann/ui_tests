  // Scenario: Checks the functionality ofthe toolbar inside Pane A

var config = require('../../nightwatch.conf.js');

module.exports = {
  'Content Pane': function(browser) {
    browser
      .login(browser.globals.viewer_user, browser.globals.viewer_pass)
      .click('a[href="/site/R4D/"]')
      .waitForElementVisible('a[href^="/site/R4D/?guid="]', 2000)
      .assert.containsText('body', 'P&ID WELL-6')      
      .click('a[href^="/site/R4D/?guid="]')
      // thumbnails button
      .waitForElementVisible('.showThumbnails', 3000)
      .click('.showThumbnails')
      // previous and next page button
      .assert.visible('.previousPage')
      .assert.visible('.nextPage')
      // rotate button
      .assert.visible('.rotate')
      .click('.rotate')
      // zoomOut and zoomIn button
      .assert.visible('.zoomOut')
      .click('.zoomOut')
      // fit width of page on screen
      .waitForElementVisible('.fitWidth') 
      .click('.fitWidth')
      // fit entire page on screen
      .waitForElementVisible('.fitPage')
      .click('.fitPage')
      // zoom in on rectangle
      .waitForElementVisible('.fitArea')
      .click('.fitArea')
      // pan dockument
      .waitForElementVisible('.pan') 
      .click('.pan')
      // select text
      .waitForElementVisible('.select') 
      .click('.select')
      // expand viewer toolbar
      // .waitForElementVisible('.toolbar-overflow-button', 2000, function() {
      //   browser.click('.toolbar-overflow-button')
      // })
      // highlight shapes
      .waitForElementVisible('.viewer-toolbar__item.qc-highlight')
      .click('.qc-highlight')
      // search box
      .waitForElementVisible('.searchterm')
      .click('.searchterm')
      .execute(function (input) {
        $('.searchterm').trigger('focus');
      })
      .keys(['ce-'])
      .pause(1000)
      .keys(['700'])
      .waitForElementVisible('.searchUp', 3000)
      // show more link
      .waitForElementVisible('.app-expand.app-expand--up.app-expand--viewer-header')
      .click('.app-expand.app-expand--up.app-expand--viewer-header')
      .pause(1000)
      .assert.containsText('.item-additional-info.ac', 'Revision')
      .end()
  }
}
