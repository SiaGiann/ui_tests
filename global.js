// https://github.com/nightwatchjs/nightwatch/issues/498

require('env2')('.env');

var self = module.exports = {
    base_url: process.env.BASE_URL,
    viewer_user: process.env.VIEWER_USER,
    viewer_pass: process.env.VIEWER_PASS,
    admin_user: process.env.ADMIN_USER,
    admin_pass: process.env.ADMIN_PASS,
    google_url: process.env.GOOGLE_URL,
    page_load_speed: 5000,
};