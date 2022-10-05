"use strict";

// This is the global list of the stories, an instance of StoryList
let storyList;
let myStories = new Set();

/** Get and show stories when site first loads. */
async function getAndShowStoriesOnStart() {
  storyList = await StoryList.getStories();

  $storiesLoadingMsg.remove();

  putStoriesOnPage();
}

/**
 * A render method to render HTML for an individual Story instance
 * - story: an instance of Story
 *
 * Returns the markup for the story.
 */
function generateStoryMarkup(story) {
  const hostName = story.getHostName(story.url);

  return $(`
      <li id="${story.storyId}">
        <a href="${story.url}" target="a_blank" class="story-link">
          ${story.title}
        </a>
        <small class="story-hostname">(${hostName})</small>
        <small class="story-author">by ${story.author}</small>
        <small class="story-user">posted by ${story.username}</small>
      </li>
    `);
}

/** Gets list of stories from server, generates their HTML, and puts on page. */
function putStoriesOnPage() {
  $allStoriesList.empty();

  // loop through all of our stories and generate HTML for them
  for (let story of storyList.stories) {
    const $story = generateStoryMarkup(story);
    $allStoriesList.append($story);
  }

  $allStoriesList.show();
}

/////////////////////////////////////////////////////////////////
// Add story from form and update stories
$("#add-story-form").on("submit", submitNewStory);

async function submitNewStory(e) {
  e.preventDefault();
  await storyList.addStory(currentUser, {
    title: $("#title").val(),
    author: $("#author").val(),
    url: $("#url").val(),
  });

  storyList = await StoryList.getStories();

  myStories.add(storyList.stories[0].storyId);
  updatePage();

  $("#title").val(""), $("#author").val(""), $("#url").val("");
}
/////////////////////////////////////////////////////////////////
