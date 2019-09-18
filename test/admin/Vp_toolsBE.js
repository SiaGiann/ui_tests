var config = require('../../nightwatch.conf.js');

    module.exports = {
    'Administration Tools Base Explorer': function(browser) {
        browser
        .login(browser.globals.admin_user, browser.globals.admin_pass)
        .waitForElementVisible('a[href="/Admin/Default.aspx"]')
        .click('a[href="/Admin/Default.aspx"]')
        .waitForElementVisible('.ac.content-pane--explorer', 'Root')
        .waitForElementVisible('.tree.explorer-tree')
        .useXpath()
        .click("//a[text()='Add Collection']")
        .useCss()
        .waitForElementVisible('.popup--blank.popup--draggable', 'Add collection')
        .setValue('.popup--draggable input[data-bind-property="name"]', 'test')
        .setValue('.popup--draggable textarea[data-bind-property="description"]', 'test')
        .setValue('.popup--draggable input[data-bind-property="key"]', 'test')
        .click('.popup--draggable .app-ok')
        // checking if I get an error pop-up
        .useXpath()
        .click("//a[text()='Add Collection']")
        .useCss()
        .waitForElementVisible('.popup--blank.popup--draggable')
        .setValue('.popup--draggable input[data-bind-property="name"]', 'test')
        .setValue('.popup--draggable textarea[data-bind-property="description"]', 'test')
        .setValue('.popup--draggable input[data-bind-property="key"]', 'test123')
        .click('.popup--draggable .app-ok')
        .waitForElementVisible('a[title="test"]')
        .click('a[title="test"]')
        .waitForElementVisible('.ac.content-pane--explorer', 'TEST')
        .waitForElementVisible('.notification')
        // delete collection
        .useXpath()
        .click("//a[text()='Delete']")
        .useCss()
        .acceptAlert()
        .waitForElementNotPresent('a[title="test"]')
        .end()
    }
};