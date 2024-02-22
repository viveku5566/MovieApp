import axios from 'axios';
import {ActionTypes} from './ActionTypes';
import {Dispatch} from 'redux';
import {Url} from '..';

export interface spokenLanguages {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface movideDetailAPI {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
  };
  budget: number;
  media_type: string;
  genres: {id: number; name: string}[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  production_countries: {iso_3166_1: string; name: string}[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: spokenLanguages[];
  status: string;
  tagline: string;
  title: string | null;
  video: false;
  vote_average: number;
  name: string;
  vote_count: number;
  profile_path: string;
  biography: string;
  birthday: string;
  last_air_date: string;
}

export interface movieDetailFetchStart {
  type: ActionTypes.MOVIE_DETAIL_FETCH_START;
}

export interface movieDetailFetchSuccess {
  type: ActionTypes.MOVIE_DETAIL_FETCH_SUCCESS;
  payload: movideDetailAPI;
}

export interface movieDetailFetchError {
  type: ActionTypes.MOVIE_DETAIL_FETCH_ERROR;
  payload: string;
}

export type movieDetailsAction =
  | movieDetailFetchStart
  | movieDetailFetchSuccess
  | movieDetailFetchError;

const getMovieDetails = (movie_id: string, mediaType: string) => {
  return async (dispatch: Dispatch<movieDetailsAction>) => {
    dispatch({
      type: ActionTypes.MOVIE_DETAIL_FETCH_START,
    });

    try {
      const {data} = await axios.get(`${Url}/${mediaType}/${movie_id}`, {
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzA5MjVmMzg5NDJiMjFlNzM2M2JkNzQ0ZjRmYzMyMSIsInN1YiI6IjYyYjBjMzc0M2E0OGM1MDA1MjU3ZDAwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JaepdQEKhH_FTptqhX93dVU1wYWz3t-kBeoqxPH4vps',
        },
      });
      console.log('dasaras', data);
      dispatch({
        type: ActionTypes.MOVIE_DETAIL_FETCH_SUCCESS,
        payload: data,
      });
    } catch (err: any) {
      dispatch({
        type: ActionTypes.MOVIE_DETAIL_FETCH_ERROR,
        payload: err.message,
      });
    }
  };
};

export default getMovieDetails;