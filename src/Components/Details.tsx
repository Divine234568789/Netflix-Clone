import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const MovieDetail = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState<any>(null);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
      )
      .then((res) => setMovie(res.data));
  }, [movieId]);

  if (!movie) return <p className="text-white p-4">Loading...</p>;

  return (
    <div className="p-4 text-white">
      <h1 className="text-3xl font-bold">{movie.title}</h1>
      <p className="mt-2">{movie.overview}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="mt-4 rounded"
      />
    </div>
  );
};

export default MovieDetail;
