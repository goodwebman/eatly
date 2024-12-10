import { create } from 'zustand'



// export const useFavoritesStore = create<FavoritesState>(set => ({
// 	favorites: [],
// 	addFavorite: id =>
// 		set(state => ({
// 			favorites: [...state.favorites, id],
// 		})),
// 	removeFavorite: id =>
// 		set(state => ({
// 			favorites: state.favorites.filter(favoriteId => favoriteId !== id),
// 		})),
// }))


interface StoreState {
	favorites: string[];
	addFavorite: (item: string) => void;
	removeFavorite: (item: string) => void;
  }
  
  const useFavoritesStore = create<StoreState>((set) => ({
	favorites: JSON.parse(localStorage.getItem('favorites') || '[]'),
	addFavorite: (item) => set((state) => {
	  const newFavorites = [...state.favorites, item];
	  localStorage.setItem('favorites', JSON.stringify(newFavorites));
	  return { favorites: newFavorites };
	}),
	removeFavorite: (item) => set((state) => {
	  const newFavorites = state.favorites.filter(fav => fav !== item);
	  localStorage.setItem('favorites', JSON.stringify(newFavorites));
	  return { favorites: newFavorites };
	}),
  }));
  
  export default useFavoritesStore;