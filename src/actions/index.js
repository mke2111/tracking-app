export const UPDATE_MEASURES = 'UPDATE_MEASURES';

export const UPDATE_USER = 'UPDATE_USER';

export const updateUser = data => ({
  type: UPDATE_USER,
  data,
});

export const updateMeasures = data => ({
  type: UPDATE_MEASURES,
  data,
});
