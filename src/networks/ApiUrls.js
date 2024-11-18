import { Constants } from '../appConstant/AppConstant';

const BASE_URL = 'https://api.themoviedb.org/3/';
const MOVIE_LIST = `movie/now_playing?api_key=${Constants.API_KEY}&language=en-US`;

export const ApiUrls = {
  BASE_URL,
  MOVIE_LIST,
};
