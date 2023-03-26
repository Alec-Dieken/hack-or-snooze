"use strict";

let favorites = new Set();

/**
 * API Handler for clicking on a favorite star and add that post to users favorites
 */
$body.on("click", ".star", handleAddToFavorites);
async function handleAddToFavorites(e) {
  const $starIcon = $(e.currentTarget);
  const starID = $starIcon.parent().attr("id");

  if (!favorites.has(starID)) {
    // $starIcon.children().attr('class', 'fas fa-star');

    const response = await axios({
      url: `${BASE_URL}/users/${currentUser.username}/favorites/${starID}`,
      method: "POST",
      data: { token: currentUser.loginToken },
    });

    currentUser.favorites = response.data.user.favorites;
  } else {
    const response = await axios.delete(
      `${BASE_URL}/users/${currentUser.username}/favorites/${starID}`,
      { data: { token: currentUser.loginToken } }
    );
    currentUser.favorites = response.data.user.favorites;
  }

  updateFavoritesUI();
}
