require('env2')('.env');
var config = require('../../nightwatch.conf.js');

module.exports = {
  'Admin top bar': function(browser) {
    browser
        .login(browser.globals.admin_user, browser.globals.admin_pass)
        .waitForElementVisible('a[href="/Admin/Default.aspx"]')
        .waitForElementVisible('a[href="/site/R4D/"]')
        .click('a[href="/site/R4D/"]')
        .waitForElementVisible('tr[data-index="1"] a') //P&ID WELL-6
        .click('tr[data-index="1"] a')
        .assert.containsText('body', 'P&ID WELL-6')
        .waitForElementVisible('a[title="This unpublishes the file for this site only."]')
        .waitForElementVisible('a[title="Deletes ALL revisions and renditions of ALL files in this folder in ALL sites permanantly"]')
        .waitForElementVisible('a[title="Update keywords, update candidates, and/or republishes, etc."]')
        .waitForElementVisible('button[title="Edit shapes (R)"]')
        .click('button[title="Edit shapes (R)"]')
        .waitForElementVisible('.editTools')
        .end()
  }
}