'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');

const userActions = require('./user-actions.js');

$(document).ready(() => {

$('#change-password-button').hide();
$('#sign-out-button').hide();

  $('#sign-up').on('submit', function(e) {
  userActions.signUp(e, userActions.signIn);
});

$('#sign-in').on('submit', function(e) {
  userActions.signIn(e);
});

$('#sign-out-button').on('click', userActions.signOut);

$('#change-password').on('submit', userActions.changePassword);

});
