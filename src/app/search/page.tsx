import { CardMovies } from "@/components/card-movies"
import { movieService } from "@/services/movies-services"

type tParams = Promise<{ q: string }>

export default async function SearchPage({
  searchParams,
}: {
  searchParams: tParams
}) {
  const { q } = await searchParams

  const movies = await movieService.searchMovies({ s: q, page: 1 })

  if (movies.Response === 'False') {
    return (
      <div className="container mx-auto">
        <h1 className="text-2xl font-semibold text-center">
          No results found for Query: {q}
        </h1>
      </div>
    )
  }


  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap gap-5 items-center">
        {movies.Search.map((movie) => (
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
    </div>
  )
}
