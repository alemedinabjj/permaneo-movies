import { movieService } from "@/services/movies-services";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";

export const Banner = async () => {
  const movies = await movieService.searchMovies({ s: 'avengers', page: 1 });

  return (
    <div className="h-96 bg-gray-900 mb-6 p-5">
      <Carousel className="md:container max-w-[200px] w-full mx-auto">
        <CarouselContent>
          {movies.Search.map(movie => (
            <CarouselItem key={movie.imdbID} className="md:basis-1/6">
              <Image
                src={movie.Poster}
                alt={movie.Title}
                width={200}
                height={300}
                objectFit="cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

    </div>
  )
}