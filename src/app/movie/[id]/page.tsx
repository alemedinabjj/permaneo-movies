import { Button } from "@/components/ui/button";
import { movieService } from "@/services/movies-services";
import Image from "next/image";
import Link from "next/link";

export default async function MoviePage({ params }: { params: { id: string } }) {
  const movie = await movieService.getMovieById({ i: params.id });
  return (
    <main className="container mx-auto space-y-6">

      <div className="flex gap-5">
        <div className="max-w-[300px] w-full">
          <Image 
            src={movie.Poster} 
            alt={movie.Title} 
            width={300} 
            height={450}
          />

          <div
            className="flex flex-col gap-1 p-2 text-xs text-gray-500"
          >
            <h1 className="truncate uppercase text-sm font-semibold">{movie.Title}</h1>
            <p>Year: {movie.Year}</p>
            <p>Type: {movie.Type}</p>
            <p>Rated: {movie.Rated}</p>
            <p>Released: {movie.Released}</p>
            <p>Runtime: {movie.Runtime}</p>
            <p>Genre: {movie.Genre}</p>
            <p>Director: {movie.Director}</p>
            <p>Writer: {movie.Writer}</p>
            <p>Actors: {movie.Actors}</p>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold">Plot</h2>
          <p className="text-sm text-gray-500">{movie.Plot}</p>
        </div>

      </div>

      <Button asChild>
        <Link href="/">Back</Link>
      </Button>
    </main>
  );
}
