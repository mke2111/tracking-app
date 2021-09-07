export const UPDATE_GAMES = 'UPDATE_GAMES';

export const UPDATE_USER = 'UPDATE_USER';

export const updateUser = data => ({
  type: UPDATE_USER,
  data,
});

export const updateGames = data => ({
  type: UPDATE_GAMES,
  data,
});
