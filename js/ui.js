"use strict";

/**
 * Reusable function to update parts of the page
 */
function updatePage() {
  putStoriesOnPage();
  if (currentUser) {
    updateDeleteIcon();
    updateFavoritesUI();
  }
}

/**
 * Handle drawing delete icons to page
 */
function updateDeleteIcon() {
  let $html = `
      <span class="delete">
        <i class='fas fa-trash-alt'></i>
      </span>`;

  for (let story of currentUser.ownStories) {
    myStories.add(story.storyId);
  }

  for (let id of myStories) {
    if ($(`#${id}`).find($(".delete")).length === 0) {
      $(`#${id}`).prepend($html);
    }
  }
}

/**
 * Handle drawing star icons to page
 */
function updateFavoritesUI() {
  const $lists = $("li");
  favorites.clear();

  for (let story of currentUser.favorites) {
    favorites.add(story.storyId);
  }

  const $star = $(`
      <span class="star">
        <i class="fa-star far"></i>
      </span>`);

  if ($(".star").length === 0) {
    $lists.prepend($star);
  }

  $lists.each(function (i, el) {
    if (favorites.has($(el).attr("id"))) {
      $(el).find(".star > i").attr("class", "fas fa-star");
    } else {
      $(el).find(".star > i").attr("class", "far fa-star");
    }
  });
}
