import { Bell, ChevronDown, Info, Play, Search } from "lucide-react";
import "react";

const Homepage = () => {
  return (
    <section className=" homepage w-full h-full">
      <header className=" header w-full h-full">
        <img
          src="/Home-img/bcg home.png"
          className="absolute w-full -z-50"
          alt=""
        />
        <div className="opacity-15  h-full bg-black w-full absolute"></div>
        <nav className="flex gap-10 pt-3">
          <span className="ml-5 ">
            <img src="/Home-img/logo.png" alt="" width={96} height={25} />
          </span>

          <menu className="flex gap-5">
            <li>Home</li>
            <li>TV Shows</li>
            <li> Movies</li>
            <li>News & Popular</li>
            <li>My List</li>
            <li>Browse by language</li>
          </menu>

          <div className="flex gap-4    ml-[28rem]">
            <Search />
            <Bell />

            <span className="flex">
              {" "}
              <img src="/watch-img/smile purple.png" alt="" width={25} />
              <ChevronDown width={15} />{" "}
            </span>
          </div>
        </nav>

        <div className="w-100   h-96 mt-29 ml-30">
          <img src="/Home-img/house N.png" alt="" width={518} height={207} />
          <p className="text-sm mt-3">
            Years after retiring from their formidable ninja lives,
            <br /> a dysfunctional family must return to shadowy missions to
            counteract a string of looming threats.
          </p>

          <div className="flex gap-3 pt-3">
            <button className="flex  p-1 px-4 bg-white rounded  text-black border">
              <Play
                color="black
              "
              />{" "}
              Play{" "}
            </button>
            <button className="flex p-1 border  bg-[#9d9da1] text-black rounded">
              <Info color="black" /> More Info
            </button>
          </div>
        </div>
      </header>
      <div className="relativ h-[300vh] w-full">
        <div>
          <h2 className="pl-15 text-xl">Matched to You </h2>

          <div className="mt-13 pl-15 space-x-7">
            <span className="w-52 h-32 p-5 px-20 py-10 rounded border border-white">
              la
            </span>
            <span className="w-52 h-32 p-5 px-20 py-10 rounded border border-white">
              la
            </span>
            <span className="w-52 h-32 p-5 px-20 py-10 rounded border border-white">
              la
            </span>
            <span className="w-52 h-32 p-5 px-20 py-10 rounded border border-white">
              la
            </span>
            <span className="w-52 h-32 p-5 px-20 py-10 rounded border border-white">
              la
            </span>
            <span className="w-52 h-32 p-5 px-20 py-10 rounded border border-white">
              la
            </span>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="pl-15 text-xl">New on Netflix</h2>

          <div className="mt-13 pl-15 space-x-7">
            <span className="w-52 h-32 p-5 px-20 py-10 rounded border border-white">
              la
            </span>
            <span className="w-52 h-32 p-5 px-20 py-10 rounded border border-white">
              la
            </span>
            <span className="w-52 h-32 p-5 px-20 py-10 rounded border border-white">
              la
            </span>
            <span className="w-52 h-32 p-5 px-20 py-10 rounded border border-white">
              la
            </span>
            <span className="w-52 h-32 p-5 px-20 py-10 rounded border border-white">
              la
            </span>
            <span className="w-52 h-32 p-5 px-20 py-10 rounded border border-white">
              la
            </span>
          </div>
        </div>
        <div className="mt-20">
          <h2 className="pl-15 text-xl">We Think You'll Love These</h2>

          <div className="mt-13 pl-15 space-x-7">
            <span className="w-52 h-32 p-5 px-20 py-10 rounded border border-white">
              la
            </span>
            <span className="w-52 h-32 p-5 px-20 py-10 rounded border border-white">
              la
            </span>
            <span className="w-52 h-32 p-5 px-20 py-10 rounded border border-white">
              la
            </span>
            <span className="w-52 h-32 p-5 px-20 py-10 rounded border border-white">
              la
            </span>
            <span className="w-52 h-32 p-5 px-20 py-10 rounded border border-white">
              la
            </span>
            <span className="w-52 h-32 p-5 px-20 py-10 rounded border border-white">
              la
            </span>
          </div>
        </div>
        <div className="mt-20">
          <h2 className="pl-15 text-xl">Animation</h2>

          <div className="mt-13 pl-15 space-x-7">
            <span className="w-52 h-32 p-5 px-20 py-10 rounded border border-white">
              la
            </span>
            <span className="w-52 h-32 p-5 px-20 py-10 rounded border border-white">
              la
            </span>
            <span className="w-52 h-32 p-5 px-20 py-10 rounded border border-white">
              la
            </span>
            <span className="w-52 h-32 p-5 px-20 py-10 rounded border border-white">
              la
            </span>
            <span className="w-52 h-32 p-5 px-20 py-10 rounded border border-white">
              la
            </span>
            <span className="w-52 h-32 p-5 px-20 py-10 rounded border border-white">
              la
            </span>
          </div>
        </div>
        <div className="mt-20">
          <h2 className="pl-15 text-xl">Inspiring Movies</h2>

          <div className="mt-13 pl-15 space-x-7">
            <span className="w-52 h-32 p-5 px-20 py-10 rounded border border-white">
              la
            </span>
            <span className="w-52 h-32 p-5 px-20 py-10 rounded border border-white">
              la
            </span>
            <span className="w-52 h-32 p-5 px-20 py-10 rounded border border-white">
              la
            </span>
            <span className="w-52 h-32 p-5 px-20 py-10 rounded border border-white">
              la
            </span>
            <span className="w-52 h-32 p-5 px-20 py-10 rounded border border-white">
              la
            </span>
            <span className="w-52 h-32 p-5 px-20 py-10 rounded border border-white">
              la
            </span>
          </div>
        </div>
        <div className="mt-20">
          <h2 className="pl-15 text-xl">Continue Watching for James</h2>

          <div className="mt-13 pl-15 space-x-7">
            <span className="w-52 h-32 p-5 px-20 py-10 rounded border border-white">
              la
            </span>
            <span className="w-52 h-32 p-5 px-20 py-10 rounded border border-white">
              la
            </span>
            <span className="w-52 h-32 p-5 px-20 py-10 rounded border border-white">
              la
            </span>
            <span className="w-52 h-32 p-5 px-20 py-10 rounded border border-white">
              la
            </span>
          </div>
        </div>
        <div className="mt-20">
          <h2 className="pl-15 text-xl">Watch In One Weekend</h2>

          <div className="mt-13 pl-15 space-x-7">
            <span className="w-52 h-32 p-5 px-20 py-10 rounded border border-white">
              la
            </span>
            <span className="w-52 h-32 p-5 px-20 py-10 rounded border border-white">
              la
            </span>
            <span className="w-52 h-32 p-5 px-20 py-10 rounded border border-white">
              la
            </span>
            <span className="w-52 h-32 p-5 px-20 py-10 rounded border border-white">
              la
            </span>
            <span className="w-52 h-32 p-5 px-20 py-10 rounded border border-white">
              la
            </span>
            <span className="w-52 h-32 p-5 px-20 py-10 rounded border border-white">
              la
            </span>
          </div>
        </div>
        <div className="mt-20">
          <h2 className="pl-15 text-xl">Critically Acclaimed Movies</h2>

          <div className="mt-13 pl-15 space-x-7">
            <span className="w-52 h-32 p-5 px-20 py-10 rounded border border-white">
              la
            </span>
            <span className="w-52 h-32 p-5 px-20 py-10 rounded border border-white">
              la
            </span>
            <span className="w-52 h-32 p-5 px-20 py-10 rounded border border-white">
              la
            </span>
            <span className="w-52 h-32 p-5 px-20 py-10 rounded border border-white">
              la
            </span>
            <span className="w-52 h-32 p-5 px-20 py-10 rounded border border-white">
              la
            </span>
            <span className="w-52 h-32 p-5 px-20 py-10 rounded border border-white">
              la
            </span>
          </div>
        </div>
        <div className="mt-20">
          <h2 className="pl-15 text-xl">Today's Fresh Picks for You</h2>

          <div className="mt-13 pl-15 space-x-7">
            <span className="w-52 h-32 p-5 px-20 py-10 rounded border border-white">
              la
            </span>
            <span className="w-52 h-32 p-5 px-20 py-10 rounded border border-white">
              la
            </span>
            <span className="w-52 h-32 p-5 px-20 py-10 rounded border border-white">
              la
            </span>
            <span className="w-52 h-32 p-5 px-20 py-10 rounded border border-white">
              la
            </span>
            <span className="w-52 h-32 p-5 px-20 py-10 rounded border border-white">
              la
            </span>
            <span className="w-52 h-32 p-5 px-20 py-10 rounded border border-white">
              la
            </span>
          </div>
        </div>
        <div className="mt-20">
          <h2 className="pl-15 text-xl">Adult Animation</h2>
          <div className="mt-13 pl-15 space-x-7">
            <span className="w-52 h-32 p-5 px-20 py-10 rounded border border-white">
              la
            </span>
            <span className="w-52 h-32 p-5 px-20 py-10 rounded border border-white">
              la
            </span>
            <span className="w-52 h-32 p-5 px-20 py-10 rounded border border-white">
              la
            </span>
            <span className="w-52 h-32 p-5 px-20 py-10 rounded border border-white">
              la
            </span>
            <span className="w-52 h-32 p-5 px-20 py-10 rounded border border-white">
              la
            </span>
            <span className="w-52 h-32 p-5 px-20 py-10 rounded border border-white">
              la
            </span>
          </div>
        </div>
      </div>
      <footer className="">
        <article className="relative w-full bg-black justify-center p-20 text-gray-400 text-xs">
          Questions? Call{" "}
          <a href="" className="hover:underline text-white">
            1-844-505-2993
          </a>
          <div className=" flex justify-between mt-4 list-none py-6">
            <div className="underline flex flex-col space-y-4">
              <li>Audio Description </li>
              <li>Investor Relations</li>
              <li>Privacy</li>
              <li> Contact Us</li>
            </div>

            <div className="underline flex flex-col space-y-4">
              <li> Help Center</li>
              <li> Jobs</li>
              <li> Legal Notices </li>
              <li>Do Not Sell or Share My Personal <br />Information</li>
            </div>

            <div className="underline flex flex-col space-y-4">
              <li> Gift Cards</li>
              <li> Netflix Shop</li>
              <li> Cookie Preferences</li>
              <li> Ad Choices</li>
            </div>

            <div className="underline flex flex-col space-y-4">
              <li>Media Center </li>
              <li>Terms of Use</li>
              <li>Corporate Informtion</li>
            </div>
          </div>
          <div className="border w-fit p-5 px-5 py-2 ml-9 mb-5 ">
            <select
              name="language"
              id=" language"
              className="bg-black text-white rounded-lg">
              <option value="en" className="text-l font-bold">
                English{" "}
              </option>
              <option value="fr">French</option>
            </select>
          </div>
        </article>
      </footer>
    </section>
  );
};

export default Homepage;
