import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const categoryMap: Record<string, string> = {
  Popular: "/movie/popular",
  "Now Playing": "/movie/now_playing",
  "Top Rated": "/movie/top_rated",
  "Trending This Week": "/trending/movie/week",
  Animation: "/discover/movie?with_genres=16",
  Action: "/discover/movie?with_genres=28",
  Comedy: "/discover/movie?with_genres=35",
};

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [movies, setMovies] = useState<any[]>([]); // i don't want to specify a type here, if you know what to do please send the solution to the group
  const [page, setPage] = useState(1);

  const endpoint = categoryMap[categoryName || ""] || "/movie/popular";

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await axios.get(
        `https://api.themoviedb.org/3${endpoint}${
          endpoint.includes("?") ? "&" : "?"
        }api_key=${API_KEY}&language=en-US&page=${page}`
      );
      setMovies((prev) => [...prev, ...res.data.results]);
    };

    fetchMovies();
  }, [endpoint, page]);

  return (
    <div className="p-4 text-white">
      <h1 className="text-2xl font-bold mb-4">{categoryName}</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <img
            key={movie.id}
            src={
              movie.poster_path
                ? `${IMAGE_BASE_URL}${movie.poster_path}`
                : "https://via.placeholder.com/150x225?text=No+Image"
            }
            alt={movie.title}
            className="rounded"
          />
        ))}
      </div>

      <div className="text-center mt-6">
        <button
          onClick={() => setPage((p) => p + 1)}
          className="px-6 py-2 border border-white rounded hover:bg-white hover:text-black transition"
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default CategoryPage;
