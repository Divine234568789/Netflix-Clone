import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { Play } from "lucide-react";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const Details = () => {
  // const { id } = useParams();
  // const [movie, setMovie] = useState<any>(null);

  // useEffect(() => {
  //   const fetchMovie = async () => {
  //     try {
  //       const res = await axios.get(
  //         `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
  //       );
  //       setMovie(res.data);
  //     } catch (error) {
  //       console.error("Failed to fetch movie details:", error);
  //     }
  //   };

  //   fetchMovie();
  // }, [id]);

  // if (!movie) return <p className="text-white text-center p-10">Loading...</p>;
  const { id } = useParams();
  const [movie, setMovie] = useState<any>(null);

  useEffect(() => {
    const fetchMovie = async () => {
      if (!id) return; // Prevent calling API with undefined ID

      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
        );
        setMovie(res.data);
      } catch (error) {
        console.error("Failed to fetch movie details:", error);
      }
    };

    fetchMovie();
  }, [id]);

  if (!movie) return <p className="text-white text-center p-10">Loading...</p>;

  return (
    <section className="details-section max-w-full max-h-full text-white">
      <header className="relative w-full h-full">
        <img
          src={`${IMAGE_BASE_URL}${movie.backdrop_path}`}
          alt={movie.title}
          className="w-full h-[600px] object-cover absolute -z-10"
        />
        <div className="absolute w-full h-full bg-black opacity-50 z-0"></div>

        <div className="relative z-10 pt-32 px-8 md:flex md:justify-between md:items-start">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold">{movie.title}</h1>
            <p className="mt-4 text-sm">{movie.overview}</p>
            <div className="flex gap-4 mt-5">
              <button className="flex items-center bg-white text-black px-4 py-2 rounded">
                <Play className="mr-2" size={20} />
                Play
              </button>
              <button className="border border-white px-4 py-2 rounded">
                + My List
              </button>
            </div>
            <p className="text-sm mt-4">
              <strong>Release:</strong> {movie.release_date} |{" "}
              <strong>Runtime:</strong> {movie.runtime} mins
            </p>
            <p className="text-sm">
              <strong>Genres:</strong>{" "}
              {movie.genres.map((g: any) => g.name).join(", ")}
            </p>
          </div>

          <div className="mt-8 md:mt-0 md:w-1/3 text-sm">
            <p>
              <strong>Rating:</strong> {movie.vote_average.toFixed(1)} ⭐ (
              {movie.vote_count.toLocaleString()} votes)
            </p>
            <p className="mt-2">
              <strong>Status:</strong> {movie.status}
            </p>
            <p className="mt-2">
              <strong>Language:</strong> {movie.original_language.toUpperCase()}
            </p>
          </div>
        </div>
      </header>

      <article className="mt-20 px-8">
        <h2 className="text-2xl mb-4">More Like This</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {/* Replace these spans with real recommendations later */}
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className="bg-[#1b1b1b] h-40 rounded-xl border border-gray-700"
            ></span>
          ))}
        </div>
      </article>

      <article className="mt-20 px-8">
        <h2 className="text-2xl mb-4">
          About <span className="font-bold">{movie.title}</span>
        </h2>
        <p>
          <strong>Tagline:</strong> {movie.tagline || "No tagline available"}
        </p>
        <p className="mt-2">
          <strong>Production Companies:</strong>{" "}
          {movie.production_companies.map((c: any) => c.name).join(", ")}
        </p>
        <p className="mt-2">
          <strong>Budget:</strong> ${movie.budget.toLocaleString()}
        </p>
        <p className="mt-2">
          <strong>Revenue:</strong> ${movie.revenue.toLocaleString()}
        </p>
      </article>
    </section>
  );
};

export default Details;
