"use strict";

/******************************************************************************
 * Handling navbar clicks and updating navbar
 */

/** Show main list of all stories when click site name */
function navAllStories(evt) {
  hidePageComponents();
  $addStory.hide();
  updatePage();
}
$body.on("click", "#nav-home", navAllStories);
$logo.on("click", navAllStories);

/** Show login/signup on click on "login" */
function navLoginClick(evt) {
  hidePageComponents();
  $loginForm.show();
  $signupForm.show();
}
$navLogin.on("click", navLoginClick);

/**  */
function navLogoClick(evt) {
  showPageComponents();
  $loginForm.hide();
  $signupForm.hide();
  
}
$logo.on("click", navLogoClick);

/** When a user first logins in, update the navbar to reflect that. */
function updateNavOnLogin() {
  $navLogin.hide();
  $loginForm.hide();
  $signupForm.hide();
  $navLogOut.show();
  $navUserProfile.text(`${currentUser.username}`).show();
  $(".main-nav-links").show();
}

/** Show add story form when user clicks on "Post Story" link */
$("#nav-submit").on("click", showAddStory);
function showAddStory() {
  $addStory.show();
  hidePageComponents();

  updatePage();
}

/** Filter stories to only show favorites */
$("#nav-favorites").on("click", showFavoritesOnly);
function showFavoritesOnly() {
  $("li").show();
  $("li").each((i, el) => {
    if (!favorites.has($(el).attr("id"))) {
      $(el).hide();
    }
  });

  $addStory.hide();
}

/** Filter stories to only show user posted stories */
$("#nav-my-stories").on("click", showMyStories);
function showMyStories() {
  $("li").each((i, el) => {
    if (!myStories.has($(el).attr("id"))) {
      $(el).hide();
    } else {
      $(el).show();
    }
  });

  $addStory.hide();
}
