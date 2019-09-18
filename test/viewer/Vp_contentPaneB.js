var config = require('../../nightwatch.conf.js');

    module.exports = {
    'Content Pane': function(browser) {
        browser
        .login(browser.globals.viewer_user, browser.globals.viewer_pass)
        .waitForElementVisible('a[href="/site/R4D/"]')
        .click('a[href="/site/R4D/"]')
        .waitForElementVisible('a[title="HSE"]')
        .click('a[title="HSE"]')
        .waitForElementVisible('a[href="/site/R4D/?guid=76a7df0a-9379-4060-9571-773b9fe6181c"]') 
        .click('a[href="/site/R4D/?guid=76a7df0a-9379-4060-9571-773b9fe6181c"]')
        .pause(2000)
        .assert.containsText('.item-name', 'Emergency Response Plan R4D')
        .waitForElementVisible('.showThumbnails')
        .click('.showThumbnails')
        .waitForElementVisible('.nextPage')
        .click('.nextPage')
        .waitForElementVisible('input[value="2"]', 300)
        .end()
        }
    }