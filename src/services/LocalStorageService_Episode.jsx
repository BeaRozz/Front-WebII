const LOCAL_STORAGE_KEY = 'episode-likes-dislikes';

export const getLikesDislikesFromLocalStorage = () => {
  const data = localStorage.getItem(LOCAL_STORAGE_KEY);
  return data ? JSON.parse(data) : {};
};

export const setLikesDislikesToLocalStorage = (episodeId, likes, dislikes) => {
  const data = getLikesDislikesFromLocalStorage();
  data[episodeId] = { likes, dislikes };
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
};
