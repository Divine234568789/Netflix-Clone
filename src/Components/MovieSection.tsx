import MovieRow from "./MovieRow";
import SearchBar from "./SearchBar";

const categories = [
  { title: "Popular", endpoint: "/movie/popular" },
  { title: "Now Playing", endpoint: "/movie/now_playing" },
  { title: "Top Rated", endpoint: "/movie/top_rated" },
  { title: "Trending This Week", endpoint: "/trending/movie/week" },
  { title: "Animation", endpoint: "/discover/movie?with_genres=16" },
  { title: "Action", endpoint: "/discover/movie?with_genres=28" },
  { title: "Comedy", endpoint: "/discover/movie?with_genres=35" },
];

const MovieSection = () => {
  return (
    <div className="p-4">
      {categories.map((cate) => (
        <MovieRow
          key={cate.title}
          title={cate.title}
          endpoint={cate.endpoint}
          itemCount={6}
        />
      ))}
      <div className="p-4">
        <SearchBar />
      </div>
    </div>
  );
};

export default MovieSection;
