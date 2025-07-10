import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Link } from "react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
// const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const MovieRow = ({
  title,
  endpoint,
  itemCount,
}: {
  title: string;
  endpoint: string;
  itemCount: number;
}) => {
  const [movies, setMovies] = useState<any[]>([]); // how do i fix this error that is popping up
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      const fullUrl = `https://api.themoviedb.org/3${endpoint}${
        endpoint.includes("?") ? "&" : "?"
      }api_key=${API_KEY}&language=en-US`;

      const res = await axios.get(fullUrl);
      setMovies(res.data.results.slice(0, itemCount));
    };

    fetchMovies();
  }, [endpoint, itemCount]);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollAmount = 300;

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative mt-10 px-4 md:px-8 group">
      <h2 className="text-xl font-bold text-white mb-2">{title}</h2>

      <button
        onClick={() => scroll("left")}
        className="hidden group-hover:flex absolute -left-3 top-[50%] -translate-y-1/2 z-10 bg-black/50 hover:bg-black hover:cursor-pointer text-white px-2 py-2 rounded-full"
      >
        <ArrowLeft />
      </button>
      <button
        onClick={() => scroll("right")}
        className="hidden group-hover:flex absolute -right-3 top-[50%] -translate-y-1/2 z-10 bg-black/50 hover:bg-black hover:cursor-pointer text-white px-2 py-2 rounded-full"
      >
        <ArrowRight />
      </button>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
      >
        {movies.map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="h-full w-full object-cover rounded hover:scale-105 transition"
            />
          </Link>
        ))}
      </div>

      <div className="mt-3 text-sm rounded bg-red-600 hover:bg-red-900 transition hover:cursor-pointer flex w-15 justify-center p-2 text-left">
        <Link
          to={`/category/${encodeURIComponent(title)}`}
          className="text-white"
        >
          See All
        </Link>
      </div>
    </div>
  );
};

export default MovieRow;
