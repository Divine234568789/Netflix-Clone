import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const SearchResults = () => {
  const { query } = useParams();
  const [results, setResults] = useState<Array<Record<string, string>>>([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
      )
      .then((res) => setResults(res.data.results));
  }, [query]);

  return (
    <div className="p-4 text-white">
      <h2 className="text-xl font-bold mb-4">Search results for "{query}"</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {results.map((movie) => (
          <a key={movie.id} href={`/movie/${movie.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="rounded"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
