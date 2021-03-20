export const ADD_FAVORITE = {
  event: 'addFavorite',
  icon: 'grade',
  color: 'primary',
  tooltipText: 'Add to Favorites',
  outlined: true,
  hideFunction: (object: any) => object.isFavorite
};

export const REMOVE_FAVORITE = {
  class: 'dark',
  event: 'removeFavorite',
  icon: 'grade',
  color: 'primary',
  tooltipText: 'Remove from favorites'
};
