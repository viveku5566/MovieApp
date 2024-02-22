import {ActionTypes} from './ActionTypes';

export interface addFavourite {
  type: ActionTypes.ADD_FAVOURITE;
  payload: number;
}

export interface removeFavourite {
  type: ActionTypes.REMMOVE_FAVOURITE;
  payload: number;
}

export type favouriteAction = addFavourite | removeFavourite;

export const addToFavourite = (id: number) => {
  return {
    type: ActionTypes.ADD_FAVOURITE,
    payload: id,
  };
};

export const RemoveFavourite = (id: number) => {
  return {
    type: ActionTypes.REMMOVE_FAVOURITE,
    payload: id,
  };
};