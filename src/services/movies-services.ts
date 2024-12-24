import httpClient from "@/infra/http/http-client";


interface MovieResponse {
  Search: Movie[];
  totalResults: string;
  Response: string;
}

export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}


interface SearchMoviesParams {
  s: string; 
  page?: number; 
}


interface GetMovieByIdParams {
  i: string; 
  plot?: 'short' | 'full'; 
}

const API_KEY = process.env.NEXT_PUBLIC_OMDB_API_KEY!;

export const movieService = {
  searchMovies: async (params: SearchMoviesParams): Promise<MovieResponse> => {
    const response = await httpClient.get('/', {
      apikey: API_KEY,
      ...params,
      page: params.page?.toString() || '1',
    });
    return response;
  },

  getMovieById: async (params: GetMovieByIdParams) => {
    const response = await httpClient.get('/', {
      apikey: API_KEY,
      ...params,
    });
    return response;
  },


};

