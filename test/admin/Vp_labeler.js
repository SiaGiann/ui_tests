var config = require('../../nightwatch.conf.js');

    module.exports = {
    'Add and edit labeler': function(browser) {
        browser
        .login(browser.globals.admin_user, browser.globals.admin_pass)
        .waitForElementVisible('a[href="/Admin/Default.aspx"]')
        .click('a[href="/Admin/Default.aspx"]')
        .waitForElementVisible('.content-pane--explorer', 'Root')
        .click('a[href="/Admin/Labeler/Default.aspx"]')
        // add 
        .pause(2000)
        .waitForElementVisible('.app-create')
        .click('.app-create')
        .waitForElementVisible('.popup--blank.popup--draggable')
        .click('.popup--blank.popup--draggable .app-ok')
        // edit the labelers
        .waitForElementVisible('.content-pane--admin .app-edit')
        .click('.content-pane--admin .app-edit')
        .waitForElementVisible('.popup--draggable')
        .setValue('.popup--draggable input[name="key"]', '1')
        .click('.popup--draggable .app-ok')
        .waitForElementVisible('.viewer span[data-bind-property="key"]', 'Default1')
        // delete the labeler
        .waitForElementVisible('.content-pane--admin .app-edit')
        .click('.content-pane--admin .app-edit')
        .waitForElementVisible('.popup--blank.popup--draggable')
        .click('.popup--blank.popup--draggable .app-delete')
        .acceptAlert()
        .waitForElementVisible('.app-create.app-auth-labelereditor')
        .end()
    }
};