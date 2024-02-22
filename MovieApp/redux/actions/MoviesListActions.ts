import axios from 'axios';
import {ActionTypes} from './ActionTypes';
import {Dispatch} from 'redux';
import {Url} from '..';

export interface ListFetchStart {
  type: ActionTypes.LIST_FETCH_START;
}

export interface MoviesFetchSuccess {
  type: ActionTypes.MOVIES_LIST_FETCH_SUCCESS;
  payload: string[];
}

export interface TvsFetchSuccess {
  type: ActionTypes.TV_LIST_FETCH_SUCCESS;
  payload: string[];
}

export interface PersonsFetchSuccess {
  type: ActionTypes.PERSONS_LIST_FETCH_SUCCESS;
  payload: string[];
}

export interface ListFetchError {
  type: ActionTypes.LIST_FETCH_ERROR;
  payload: string;
}

export type ListActions =
  | ListFetchStart
  | MoviesFetchSuccess
  | TvsFetchSuccess
  | PersonsFetchSuccess
  | ListFetchError;

const getList = (category: string) => {
  return async (dispatch: Dispatch<ListActions>) => {
    dispatch({
      type: ActionTypes.LIST_FETCH_START,
    });

    try {
      const {data} = await axios.get(`${Url}/trending/${category}/day`, {
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzA5MjVmMzg5NDJiMjFlNzM2M2JkNzQ0ZjRmYzMyMSIsInN1YiI6IjYyYjBjMzc0M2E0OGM1MDA1MjU3ZDAwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JaepdQEKhH_FTptqhX93dVU1wYWz3t-kBeoqxPH4vps',
        },
      });
      const {results} = data;

      switch (category) {
        case 'tv':
          dispatch({
            type: ActionTypes.TV_LIST_FETCH_SUCCESS,
            payload: results,
          });
          break;

        case 'movie':
          dispatch({
            type: ActionTypes.MOVIES_LIST_FETCH_SUCCESS,
            payload: results,
          });
          break;

        case 'person':
          dispatch({
            type: ActionTypes.PERSONS_LIST_FETCH_SUCCESS,
            payload: results,
          });
          break;
      }
    } catch (err: any) {
      if (err)
        dispatch({
          type: ActionTypes.LIST_FETCH_ERROR,
          payload: err.message,
        });
    }
  };
};

export default getList;