export const selectTeachers = (state) => state.teachers.items;

export const selectIsLoading = (state) => state.teachers.isLoading;

export const selectError = (state) => state.teachers.error;

export const selectFavorites = (state) => state.favorite.favorite;

export const selectIsLoadingFav = (state) => state.favorites.isLoading;

export const selectErrorFav = (state) => state.favorites.error;
