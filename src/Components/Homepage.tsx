import { Bell, ChevronDown, Info, Play, Search } from "lucide-react";
import "react";
import MovieSection from "./MovieSection";
import { useNavigate } from "react-router";

const Homepage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/Viewer");
  };
  return (
    <section className="homepage w-full min-h-screen bg-black">
      <header className="header relative w-full min-h-[60vh]">
        <img
          src="/Home-img/bcg home.png"
          className="absolute w-full h-screen object-cover"
          alt=""
        />
        <div className="opacity-15 h-full bg-black w-full absolute inset-0"></div>
        <nav className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10 pt-3 relative z-10">
          <span className="ml-5">
            <img src="/Home-img/logo.png" alt="" width={96} height={25} />
          </span>
          <menu className="flex flex-wrap gap-3 md:gap-5 text-xs md:text-base">
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>News & Popular</li>
            <li>My List</li>
            <li>Browse by language</li>
          </menu>
          <div className="flex gap-4 md:ml-auto items-center">
            <Search className="w-5 h-5" />
            <Bell className="w-5 h-5" />

            <button onClick={handleClick}>
              <span className="flex items-center hover:cursor-pointer hover:bg-gray-800 p-1 rounded active:bg-gray-800 active:scale-3d">
                <img src="/watch-img/smile purple.png" alt="" width={25} />{" "}
                <ChevronDown width={15} />
              </span>
            </button>
          </div>
        </nav>
        <div className="w-full max-w-xl px-4 md:px-0 h-auto mt-10 md:mt-28 ml-0 md:ml-32 relative z-10">
          <img
            src="/Home-img/house N.png"
            alt=""
            className="w-64 md:w-[518px] h-auto"
          />
          <p className="text-xs md:text-sm mt-3 text-white">
            Years after retiring from their formidable ninja lives,
            <br /> a dysfunctional family must return to shadowy missions to
            counteract a string of looming threats.
          </p>
          <div className="flex gap-3 pt-3 flex-wrap">
            <button className="flex items-center p-1 px-4 bg-white rounded text-black border">
              <Play color="black" className="mr-2" />
              Play
            </button>
            <button className="flex items-center p-1 border bg-[#9d9da1] text-black rounded">
              <Info color="black" className="mr-2" /> More Info
            </button>
          </div>
        </div>
      </header>

      <footer className="w-full bg-[#141414] text-gray-400 text-xs mt-10">
        <div className="relative w-full px-2 md:px-8 py-8">
          <MovieSection />
        </div>
        <article className="relative w-full max-w-6xl mx-auto flex flex-col items-center p-6 md:p-20">
          <div className="mb-4">
            Questions? Call{" "}
            <a href="" className="hover:underline text-white">
              1-844-505-2993
            </a>
          </div>
          <div className="flex flex-col md:flex-row justify-between w-full mt-4 list-none py-6 gap-8">
            <div className="underline flex flex-col space-y-2 md:space-y-4">
              <li>Audio Description</li>
              <li>Investor Relations</li>
              <li>Privacy</li>
              <li>Contact Us</li>
            </div>
            <div className="underline flex flex-col space-y-2 md:space-y-4">
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Legal Notices</li>
              <li>
                Do Not Sell or Share My Personal{" "}
                <br className="hidden md:block" />
                Information
              </li>
            </div>
            <div className="underline flex flex-col space-y-2 md:space-y-4">
              <li>Gift Cards</li>
              <li>Netflix Shop</li>
              <li>Cookie Preferences</li>
              <li>Ad Choices</li>
            </div>
            <div className="underline flex flex-col space-y-2 md:space-y-4">
              <li>Media Center</li>
              <li>Terms of Use</li>
              <li>Corporate Information</li>
            </div>
          </div>
        </article>
        <div className="border w-fit p-2 md:p-5 rounded ml-0 md:ml-9 mb-5">
          <select
            name="language"
            id="language"
            className="bg-black text-white rounded-lg"
          >
            <option value="en" className="text-l font-bold">
              English
            </option>
            <option value="fr">French</option>
          </select>
        </div>
      </footer>
    </section>
  );
};

export default Homepage;
