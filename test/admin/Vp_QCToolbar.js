var config = require('../../nightwatch.conf.js');

    module.exports = {
    'QC toolbar': function(browser) {
        var currentShapeNr, totalShapeNumbers, nrSelectedShapes;

        browser
        .login(browser.globals.admin_user, browser.globals.admin_pass)
        .waitForElementVisible('a[href="/site/R4D/"]')
        .click('a[href="/site/R4D/"]')
        .waitForElementVisible('tr[data-index="1"] a') //P&ID WELL-6
        .click('tr[data-index="1"] a')
        .assert.containsText('body', 'P&ID WELL-6')
        .waitForElementPresent('.zoom option[value="1.0"]')
        .click('.zoom option[value="1.0"]')
        .waitForElementVisible('button[title="Edit shapes (R)"]')
        .click('button[title="Edit shapes (R)"]')
        .waitForElementVisible('.editTools')
        .waitForElementVisible('div[title="WELL CONTROL PANEL"]')
        .click('div[title="WELL CONTROL PANEL"]')
        .pause(1000)
        .waitForElementVisible('.handle.SS')
        .waitForElementVisible('.popup.shape-edit.aligned-left')
        .getText('.search-hits-container', function(result) {
            var parts = result.value.split(' ');
            currentShapeNr = parseInt(parts[0]);
            totalShapeNumbers = parseInt(parts[2]);
        })
        .click('.searchDown')
        .perform(function() {
            browser.assert.containsText('.search-hits-container', (currentShapeNr + 1) + ' / ' + totalShapeNumbers)
        })
        .click('div[title="WELL CONTROL PANEL"]')
        .click('.edit-toolbar__item.edit-toggle-ignore')
        .click('.searchDown')
        .perform(function() {
            browser.assert.containsText('.search-hits-container', (currentShapeNr + 1) + ' / ' + totalShapeNumbers)
        })
        .click('.searchUp')
        .perform(function() {
            browser.assert.containsText('.search-hits-container', (currentShapeNr - 1) + ' / ' + totalShapeNumbers)
        })
        // prefix 
        .click('div[title="WELL CONTROL PANEL"]')
        .click('.edit-prefix')
        .setAlertText('hello', function() {
            browser.acceptAlert();
        })
        // reset
        .waitForElementVisible('div[title="helloWELL CONTROL PANEL"')
        .click('.edit-toolbar__item.edit-reset')
        .acceptAlert()
        .waitForElementVisible('div[title="WELL CONTROL PANEL"]')
        .elements('css selector', '.shape.selected', function(result) {
            nrSelectedShapes = result.value.length;
        })
        // toggle selection of shapes
        .click('.edit-toolbar__item.edit-toggle-empty')
        .elements('css selector', '.shape.selected', function(result) {
            browser.assert.ok(result.value.length > nrSelectedShapes);
        })
        
        // toggle blaking out references- cannot find a way to check it
        .waitForElementPresent('.has-candidate.visible', 'helloWELL CONTROL PANEL')
        .click('.edit-toolbar__item.edit-toggle-blank')
        .end()
    }
};