var config = require('../../nightwatch.conf.js');

    module.exports = {
    'Add and edit a new pattern': function(browser) {
        browser
        .login(browser.globals.admin_user, browser.globals.admin_pass)
        .waitForElementVisible('a[href="/Admin/Default.aspx"]')
        .click('a[href="/Admin/Default.aspx"]')
        .waitForElementVisible('.content-pane--explorer', 'Root')
        .waitForElementVisible('a[title="TEST123"]')
        .click('a[title="TEST123"]')
        .waitForElementVisible('.ac.content-pane--explorer', 'TEST123')
        // add a pattern
        .click('.app-create')
        .waitForElementVisible('.patterngroups-popup', 'Add a new Pattern Type')
        .click('.app-ok')
        .waitForElementVisible('.pattern-edit', 'Add TagNumber pattern')
        .setValue('textarea[data-bind-property="text"]', "ZZZ-998")
        .setValue('input[data-bind-property="antiPatternText"]', "67-{1}-{3}")
        .setValue('input[data-bind-property="normalizationMask"]', "^SHT")
        .click('.app-generate-normalization-mask')
        .acceptAlert()
        .click('.pattern-edit .form-controls .app-ok')
        .waitForElementVisible('.patterngroups-popup')
        .click('.app-ok')
        // edit pattern group
        .waitForElementVisible('.patterngroups .app-edit')
        .click('.patterngroups .app-edit')
        .waitForElementVisible('.patterngroups-popup', 'DocumentNumber')
        // add pattern
        .click('.patterngroups-popup .app-pattern-add')
        .waitForElementVisible('.pattern-edit')
        .setValue('.pattern-edit textarea[data-bind-property="text"]', "ZZZ-997")
        .setValue('.pattern-edit input[data-bind-property="antiPatternText"]', "67-{1}-{4}")
        .setValue('.pattern-edit input[data-bind-property="normalizationMask"]', "^SHT")
        .click('.app-generate-normalization-mask')
        .acceptAlert()
        .click('.pattern-edit .form-controls .app-ok')
        .waitForElementVisible('.patterngroups-popup')
        .pause(2000)
        // remove 'mentioned in' collection
        .click('.app-is-mentioned-in-delete')
        .acceptAlert()
        .waitForElementNotPresent('.app-is-mentioned-in-delete')
        // delete pattern
        .click('.app-edit')
        .waitForElementVisible('.patterngroups-popup', 'Manage DocumentNumber patterns')
        .click('.patterngroups-popup .app-delete')
        .acceptAlert()
        .end()
    }
};