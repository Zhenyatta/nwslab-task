import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

export type AppDispatch = ThunkDispatch<any, any, AnyAction>;

export interface RootState {
  cats: {
    isLoading: boolean;
    categories: { id: number; name: string }[];
    categoryId: number;
    cats: { id: string; url: string }[];
    error: string | null;
  };
}

export interface Cats {
  height: number;
  id: number;
  url: string;
  width: number;
}

export interface Categories {
  id: number;
  name: string;
}

export interface CategoriesProps {
  name: string;
  id: number;
  changePage: () => void;
}

export interface CatData {
  data: any;
  id: number;
  page: number;
}

export interface CatIMGProps {
  url: string;
  key: string;
}
