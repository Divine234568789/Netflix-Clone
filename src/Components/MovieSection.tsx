import "react";

const categories = [
  "Matched to You",
  "New on Netflix",
  "We Think You'll Love These",
  "Animation",
  "Inspiring Movies",
  "Continue Watching for James",
  "Watch In One Weekend",
  "Critically Acclaimed Movies",
  "Today's Fresh Picks for You",
  "Adult Animation",
];

const MovieRow = ({
  title,
  itemCount,
}: {
  title: string;
  itemCount: number;
}) => (
  <div className="mt-10">
    <h2 className="pl-2 md:pl-8 text-base md:text-xl font-semibold text-white">
      {title}
    </h2>

    <div className="mt-5 pl-2 md:pl-8 flex gap-4 overflow-x-auto overflow-x-hidden">
      {Array.from({ length: itemCount }).map((_, id) => (
        <span
          key={id}
          className="min-w-[8rem] md:min-w-[13rem] h-24 md:h-32 flex items-center justify-center p-2 md:p-5 rounded border border-white text-white text-center"
        >
          Movie
        </span>
      ))}
    </div>
  </div>
);

const MovieSection = () => {
  return (
    <div className="relative w-full px-2 md:px-8 py-8">
      {categories.map((title, index) => (
        <MovieRow key={title} title={title} itemCount={index === 5 ? 4 : 6} />
      ))}
    </div>
  );
};

export default MovieSection;
