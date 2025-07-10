import MovieRow from "./MovieRow";

const categories = [
  { title: "Popular", endpoint: "/movie/popular", count: 15 },
  { title: "Now Playing", endpoint: "/movie/now_playing", count: 15 },
  { title: "Top Rated", endpoint: "/movie/top_rated", count: 15 },
  { title: "Trending This Week", endpoint: "/trending/movie/week", count: 15 },
  { title: "Comedy", endpoint: "/discover/movie?with_genres=35", count: 15 },
  { title: "Continue Watching James", endpoint: "/movie/popular", count: 8 },

  { title: "Horror", endpoint: "/discover/movie?with_genres=27", count: 15 },
  {
    title: "Romance",
    endpoint: "/discover/movie?with_genres=10749",
    count: 15,
  },
  { title: "Sci-Fi", endpoint: "/discover/movie?with_genres=878", count: 15 },
  {
    title: "Documentary",
    endpoint: "/discover/movie?with_genres=99",
    count: 15,
  },
];

const MovieSection = () => {
  return (
    <div className="py-6">
      {categories.map((cate) => (
        <MovieRow
          key={cate.title}
          title={cate.title}
          endpoint={cate.endpoint}
          itemCount={cate.count}
        />
      ))}
    </div>
  );
};

export default MovieSection;

const categoriesWithDetails = [
  { title: "Trailers Like These", endpoint: "/trending/movie/week", count: 7 },
];

export const MovieSectionWithDetails = () => {
  return (
    <div className="py-6">
      {categoriesWithDetails.map((cate2) => (
        <MovieRow
          key={cate2.title}
          title={cate2.title}
          endpoint={cate2.endpoint}
          itemCount={cate2.count}
        />
      ))}
    </div>
  );
};
const category2 = [
  {
    title: "More Like This",
    endpoint: "/discover/movie?with_genres=35",
    count: 8,
  },
];

export const MoreDetails = () => {
  return (
    <div className="py-6">
      {category2.map((cate3) => (
        <MovieRow
          key={cate3.title}
          title={cate3.title}
          endpoint={cate3.endpoint}
          itemCount={cate3.count}
        />
      ))}
    </div>
  );
};
