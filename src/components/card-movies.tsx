import Image from "next/image";
import Link from "next/link";

interface CardMoviesProps {
  title: string;
  year: string;
  type: string;
  poster: string;
  imdbID: string;
}

export const CardMovies = ({ title, year, type, poster, imdbID }: CardMoviesProps) => {
  return (
    <Link className="max-w-[200px] cursor-pointer group relative"
      href={`/movie/${imdbID}`}
    >
      <div className="relative rounded-lg">
        <Image src={poster} alt={title} 
          width={200} 
          height={300} 
        />
        <div className="hidden group-hover:block absolute inset-0 bg-black bg-opacity-50 text-white text-center p-2 rounded-lg">
          {title}
        </div>
      </div>
      <div
        className="flex flex-col gap-1 p-2"
      >
        <h2 className="truncate uppercase text-sm font-semibold">{title}</h2>
        <p
          className="text-xs text-gray-500">Year: {year}</p>
        <p
          className="text-xs text-gray-500">Type: {type}</p>
      </div>
    </Link>
  );
};