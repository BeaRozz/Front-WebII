function likeCharacter(episodeId, characterId) {
  const key = "likedCharacters";
  const data = JSON.parse(localStorage.getItem(key) || "{}");

  if (!data[episodeId]) data[episodeId] = {};
  if (!data[episodeId][characterId]) data[episodeId][characterId] = 0;

  data[episodeId][characterId] += 1;
  localStorage.setItem(key, JSON.stringify(data));
}
