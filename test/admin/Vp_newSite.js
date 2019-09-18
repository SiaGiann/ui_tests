var config = require('../../nightwatch.conf.js');

    module.exports = {
    'Add and edit Site': function(browser) {
        browser
        .login(browser.globals.admin_user, browser.globals.admin_pass)
        .waitForElementVisible('a[href="/Admin/Default.aspx"]')
        .click('a[href="/Admin/Default.aspx"]')
        .waitForElementVisible('.ac.content-pane--explorer', 'Root')
        .waitForElementVisible('a[href="/Admin/Sites/Default.aspx"]')
        .click('a[href="/Admin/Sites/Default.aspx"]')
        .waitForElementVisible('.app-edit')
        .waitForElementVisible('.app-publish-site')
        .waitForElementVisible('.app-delete-empty-folders')
        .waitForElementVisible('.content-submenu-inner a[href="Default.aspx"]')
        .waitForElementVisible('.content-submenu-inner a[href="Templates.aspx"]')

        // add a new site
        .click('.content-pane--sites .app-create')
        .waitForElementVisible('.popup--draggable')
        .waitForElementVisible('.popup--draggable input[data-bind-property="name"]')
        .setValue('.popup--draggable input[data-bind-property="name"]', 'test site')
        .setValue('.popup--draggable input[data-bind-property="key"]', 't1')
        .setValue('.popup--draggable input[data-bind-property="publicationRule"]', 'Collection=GENERAL_DOCS')
        .click('.popup--draggable .app-ok')
        .waitForElementVisible('.notifications')
        
        // edit a site
        .useXpath()
        .click("//tr[1]//button[1]")
        .useCss()
        .waitForElementVisible('.popup--draggable', 'Site name')
        .setValue('.popup--draggable input[data-bind-property="name"]', 'test')
        .click('.popup--draggable .app-ok')
        .waitForElementVisible('.notifications')
        .assert.containsText('body', 'L12SG Drilling Rig Exampletest')
        // we want to have the site name "L12SG Drilling Rig Example" for the next test
        .useXpath()
        .click("//tr[1]//button[1]")
        .useCss()
        .waitForElementVisible('.popup--draggable', 'Site name')
        .clearValue('.popup--draggable input[data-bind-property="name"]')
        .setValue('.popup--draggable input[data-bind-property="name"]', 'L12SG Drilling Rig Example')
        .click('.popup--draggable .app-ok')
        .waitForElementVisible('.notifications')
        .assert.containsText('body', 'L12SG Drilling Rig Example')

        // republish button
        .click('.app-publish-site')
        .acceptAlert()
        .waitForElementVisible('.notifications', "Queued task to reprocess site with key 'L12SG'")

        .pause(5000)
        .end()
    }
};