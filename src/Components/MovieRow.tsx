import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const MovieRow = ({
  title,
  itemCount,
  endpoint,
}: {
  title: string;
  itemCount: number;
  endpoint: string;
}) => {
  const [movies, setMovies] = useState<any[]>([]); // i don't want to specify a type here, if you know what to do please send the solution to the group

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3${endpoint}$
          {endpoint.includes("?") ? "&" : "?"}api_key=${API_KEY}&language=en-US`
        );
        setMovies(res.data.results.slice(0, itemCount));
      } catch (err) {
        console.error(`Error loading ${title} movies:`, err);
      }
    };

    fetchMovies();
  }, [endpoint, itemCount, title]);

  return (
    <div className="mt-10">
      <div className="flex justify-between items-center px-2 md:px-8">
        <h2 className="text-base md:text-xl font-semibold text-white">
          {title}
        </h2>
        <Link
          to={`/category/${encodeURIComponent(title)}`}
          className="text-xl text-white hover:bg-white hover:text-black border rounded p-2 border-white"
        >
          See All
        </Link>
      </div>

      <div className="mt-5 pl-2 md:pl-8 flex gap-4 overflow-x-auto scrollbar-hide">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="min-w-[8rem] md:min-w-[13rem] h-24 md:h-32 flex items-center justify-center"
          >
            <img
              src={
                movie.poster_path
                  ? `${IMAGE_BASE_URL}${movie.poster_path}`
                  : "https://via.placeholder.com/150x225?text=No+Image"
              }
              alt={movie.title}
              className="w-full h-full object-cover rounded"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieRow;
