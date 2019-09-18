// most of the time you need to run this test twice

var config = require('../../nightwatch.conf.js');

    module.exports = {
    'Add and edit shape': function(browser) {

        browser
        .login(browser.globals.admin_user, browser.globals.admin_pass)
        .waitForElementVisible('a[href="/site/R4D/"]')
        .click('a[href="/site/R4D/"]')
        .waitForElementVisible('tr[data-index="1"] a') //P&ID WELL-6
        .click('tr[data-index="1"] a')
        .assert.containsText('body', 'P&ID WELL-6')
        .waitForElementVisible('button[title="Edit shapes (R)"]')
        .click('button[title="Edit shapes (R)"]')
        //add shape
        .waitForElementVisible('.edit-insert')
        .click('.edit-insert')
        .moveToElement('.canvas', 60, 60)
        .mouseButtonDown(0)
        .moveToElement('.canvas', 90, 90)
        .mouseButtonUp(0)
        .setValue('.shape-edit textarea', 'test')
        // save
        .click('.edit-save')
        .waitForElementVisible('.notification')
        //edit shape's text
        .click('div[title="test"]')
        .click('.shape-edit textarea')
        .setValue('.shape-edit textarea', '1')
        .click('.edit-save')
        .waitForElementVisible('div[title="1"]')
        // resize shapes
        .moveToElement('.canvas', 90, 90)
        .mouseButtonDown(0)
        .moveToElement('.canvas', 90, 150)
        .mouseButtonUp(0)
        // move shape
        .click('div[title="1"]')
        .mouseButtonDown(0)
        .moveToElement('.canvas', 200, 150)
        .mouseButtonUp(0)
        .pause(2000) //don't remove this
        .click('.edit-save')
        .waitForElementVisible('.notification', 'Saved changes')
        .waitForElementNotVisible('.notification')
        // delete shape
        .waitForElementVisible('div[title="1"]')
        .click('div[title="1"]')
        .waitForElementVisible('.edit-delete')
        .click('.edit-delete')
        .waitForElementNotPresent('div[title="1"]')
        .click('.edit-save')

        //copy,cut,paste,undo,redo
        // .click('div[title="1"]')
        // .click('.edit-copy')
        // .click('.edit-paste')
        // .click('div[title="1"]')
        // .click('.edit-cut')
        // .click('.edit-paste')
        // .click('.edit-undo')
        // .click('.edit-redo')
        // .click('.edit-save')
        // .keys("Ctrl", function() {
        //     browser.click('div[title="1"]')
        //     browser.click('div[title="WELL CONTROL PANEL"]')
        //     browser.click('.edit-merge')
        // })
        .end();
    }
};