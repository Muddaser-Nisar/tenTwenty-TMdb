export interface Genre {
  id: number;
  name: string;
} //category interface

export interface GenreWithPoster extends Genre {
  poster_path: string;
} //category with image from movie
