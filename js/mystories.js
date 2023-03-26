"use strict";

/** Handle delete request for user post when user clicks on trash can icon */
$body.on("click", ".delete", handleRemovePost);
async function handleRemovePost(e) {
  const $deleteIcon = $(e.currentTarget);
  const deleteID = $deleteIcon.parent().attr("id");

  await axios.delete(`${BASE_URL}/stories/${deleteID}`, {
    data: { token: currentUser.loginToken },
  });

  myStories.delete(deleteID);
  for (let story of currentUser.ownStories) {
    if (story.storyId === deleteID) {
      currentUser.ownStories.splice(currentUser.ownStories.indexOf(story), 1);
    }
  }

  storyList = await StoryList.getStories();
  $(`#${deleteID}`).hide();
}
