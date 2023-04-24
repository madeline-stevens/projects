'use strict';

var app = app || {};

page('/about', app.aboutController.about);
// page('/contact', app.contactController.contact);
page('/', app.homeController.home);


page();
