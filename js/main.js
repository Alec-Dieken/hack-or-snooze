"use strict";

// So we don't have to keep re-finding things on page, find DOM elements once:
const $body = $("body");

const $storiesLoadingMsg = $("#stories-loading-msg");
const $allStoriesList = $("#all-stories-list");

const $loginForm = $("#login-form");
const $signupForm = $("#signup-form");

const $navLogin = $("#nav-login");
const $navUserProfile = $("#nav-user-profile");
const $navLogOut = $("#nav-logout");

const $addStory = $("#add-story");

const $logo = $("#logo")

/** To make it easier for individual components to show just themselves, this
 * is a useful function that hides pretty much everything on the page. After
 * calling this, individual components can re-show just what they want.
 */
function hidePageComponents() {
  const components = [$allStoriesList, $loginForm, $signupForm];
  components.forEach((c) => c.hide());
}

/** The function to show all the original page components at once
 */
function showPageComponents() {
  const components = [$allStoriesList, $loginForm, $signupForm];
  components.forEach((c) => c.show());
}

/** Overall function to kick off the app. */
async function start() {
  // "Remember logged-in user" and log in, if credentials in localStorage
  await checkForRememberedUser();
  await getAndShowStoriesOnStart();
  // if we got a logged-in user
  if (currentUser) updateUIOnUserLogin();
}

// Once the DOM is entirely loaded, begin the app
$(start);
