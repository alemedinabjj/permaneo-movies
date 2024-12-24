import { Banner } from "@/components/banner";
import { CardMovies } from "@/components/card-movies";
import { movieService } from "@/services/movies-services";

export default async function Home() {
  const movies = await movieService.searchMovies({ s: 'batman', page: 1 });

  console.log(movies)
  return (
    <main>

    <Banner />

     <div className="flex flex-wrap gap-5 items-center container mx-auto">
      {movies.Search.map(movie => (
        <CardMovies 
          key={movie.imdbID}
          title={movie.Title}
          year={movie.Year}
          type={movie.Type}
          poster={movie.Poster}
          imdbID={movie.imdbID}
        />
      ))}
      </div>
    </main>
  );
}
