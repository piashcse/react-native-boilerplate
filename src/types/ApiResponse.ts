export interface ApiResponse<T = any> {
  data: T; // Data can be either a single object or an array of objects
  error: string;
  statusCode: number;
}
export interface SingInSignUpResponse {
  userData: UserData;
  token: string;
  refreshToken: string;
}

export interface UserData {
  id: number;
  userName: string;
  email: string;
  mobile: string;
  image: string;
  hashedRefreshToken: string;
  forcePasswordChange: boolean;
  point: number;
  isActive: boolean;
  role: Role;
  userPermissions: number[];
}
export interface Role {
  id: number;
  title: string;
}

export interface BaseModel {
  dates: Dates
  page: number
  results: MovieItem[]
  total_pages: number
  total_results: number
}

export interface Dates {
  maximum: string
  minimum: string
}

export interface MovieItem {
  adult: boolean
  backdrop_path?: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}
