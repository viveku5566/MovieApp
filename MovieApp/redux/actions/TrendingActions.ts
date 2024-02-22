import {Dispatch} from 'redux';
import axios from 'axios';
import {ActionTypes} from './ActionTypes';
import {Url} from '..';

export interface TrendingFetchStart {
  type: ActionTypes.TRENDING_FETCH_START;
}

export interface TrendingFetchSuccess {
  type: ActionTypes.TRENDING_FETCH_SUCCESS;
  payload: string[];
}

export interface TrendingFetchError {
  type: ActionTypes.TRENDING_FETCH_ERORR;
  payload: string;
}

export type TrendingAction =
  | TrendingFetchStart
  | TrendingFetchSuccess
  | TrendingFetchError;

const getTrending = () => {
  return async (dispatch: Dispatch<TrendingAction>) => {
    dispatch({
      type: ActionTypes.TRENDING_FETCH_START,
    });
    try {
      const {data} = await axios.get(`${Url}/trending/all/week`, {
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzA5MjVmMzg5NDJiMjFlNzM2M2JkNzQ0ZjRmYzMyMSIsInN1YiI6IjYyYjBjMzc0M2E0OGM1MDA1MjU3ZDAwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JaepdQEKhH_FTptqhX93dVU1wYWz3t-kBeoqxPH4vps',
        },
      });

      const {results} = data;
      dispatch({
        type: ActionTypes.TRENDING_FETCH_SUCCESS,
        payload: results,
      });
    } catch (err: any) {
      if (err) {
        dispatch({
          type: ActionTypes.TRENDING_FETCH_ERORR,
          payload: err.message,
        });
      }
    }
  };
};

export default getTrending;