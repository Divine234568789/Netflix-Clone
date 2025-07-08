import "react";
import { useNavigate } from "react-router";

const Landing = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/Signup-page");
  };

  return (
    <>
      <section className="landing w-full min-h-screen bg-black">
        <header className="header relative w-full min-h-150">
          <div className="bg-black h-full opacity-60 absolute w-full inset-0"></div>

          <nav className="relative z-10 flex flex-col md:flex-row md:justify-between items-center px-4 md:px-10 lg:px-20 h-24 pt-5">
            <div className="flex items-center text-3xl">
              <img
                className="w-36 md:w-48"
                src="/landing-img/logo.png"
                alt="NetFlix Logo"
                width={145}
              />
            </div>

            <menu className="flex gap-4 md:gap-6 lg:gap-9 items-center mt-4 md:mt-0">
              <span className="border border-black px-3 py-1 rounded text-black bg-white">
                <select className="px-4 py-1.5 md:px-3 lg:w-32 md:text-base bg-transparent text-black">
                  <option
                    value="en"
                    className="bg-[#1b1b1b] text-black font-normal border"
                  >
                    English
                  </option>
                </select>
              </span>
              <li>
                <button
                  className="px-6 py-2 md:px-3 lg:w-32 md:text-base bg-red-700 rounded text-white  hover:bg-red-900 transition-colors duration-100 hover:cursor-pointer"
                  onClick={handleClick}
                >
                  Sign Up
                </button>
              </li>
            </menu>
          </nav>

          <div className="flex flex-col justify-center items-center text-center relative z-10 w-full h-full text-white mt-40 px-4">
            <h1 className="text-2xl md:text-4xl font-bold">
              Unlimited movies, TV shows, and more.
            </h1>
            <h2 className="text-lg md:text-xl font-semibold mt-4">
              Watch anywhere. Cancel anytime.
            </h2>
            <p className="text-base md:text-xl mt-4">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <div className="mt-4 flex flex-col sm:flex-row items-center gap-2 w-full max-w-xl">
              <input
                type="email"
                placeholder="Email address"
                required
                className="flex-1 w-full p-2 rounded opacity-80 placeholder-gray-400 text-black outline-none border-2 border-gray-300"
              />
              <button
                className="bg-red-700 px-5 py-2 rounded text-white font-semibold w-full sm:w-auto hover:bg-red-900 transition-colors duration-100 hover:cursor-pointer"
                onClick={handleClick}
              >
                Get Started {`>`}
              </button>
            </div>
          </div>
        </header>

        <article className="mx-2 md:mx-8 lg:mx-24 pt-3 mt-5 rounded-lg bg-gradient-to-r from-[#2d0b0b] via-[#400a14] to-[#001f3f] p-4 md:p-6 text-white">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <img
              src="/landing-img/popcorn.png"
              alt=""
              width={96}
              height={96}
              className="opacity-90"
            />
            <div>
              <h2 className="text-base md:text-lg font-bold">
                The Netflix you love just for $7.00
              </h2>
              <p className="text-xs md:text-sm text-gray-200">
                Get the standards with ads plan.
              </p>
              <a
                href="#"
                className="text-blue-400 underline hover:text-blue-300"
              >
                Learn more
              </a>
            </div>
          </div>
        </article>

        <article className="w-full flex justify-center mt-8">
          <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-center relative">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-2 lg:gap-4 px-4">
              <h2 className="text-xl md:text-2xl font-bold">
                Enjoy on Your TV
              </h2>
              <p className="text-base md:text-lg">
                Watch on Smart TVs, Playstation, Xbox,
                <br className="hidden md:block" /> Chromecast, Apple TV, Blu-ray
                players, and more.
              </p>
              <a
                href="#"
                className="text-blue-400 underline hover:text-blue-300"
              >
                Learn More
              </a>
            </div>
            <div className="relative mt-6 lg:mt-0 lg:ml-8">
              <img
                src="/landing-img/tv.png"
                alt="TV Image"
                width={350}
                className="relative z-10"
              />
              <img
                src="/landing-img/screenshot.png"
                alt=""
                width={254}
                className="relative left-11.5 bottom-52"
              />
            </div>
          </div>
        </article>

        <article className="mt-8">
          <div className="bg-[#1b1b1b] w-full h-1.5 my-8"></div>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-8 relative px-4">
            <div>
              <img
                src="/landing-img/watch.png"
                alt=""
                width={250}
                className="relative z-10"
              />
              <img
                src="/landing-img/screenshot2.png"
                alt=""
                width={152}
                className="relative bottom-42 left-12 flex bg-no-repeat"
              />
            </div>

            <div className="mt-6 lg:mt-0">
              <h2 className="text-xl md:text-2xl font-bold">
                Watch everywhere
              </h2>
              <p className="text-base md:text-lg">
                Stream unlimited movies and TV shows on your{" "}
                <br className="hidden md:block" /> phone, tablet, laptop, and
                TV.
              </p>
            </div>
          </div>
          <div className="bg-[#1b1b1b] w-full h-1.5 my-8"></div>
        </article>

        <article className="mt-8">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-8 px-4">
            <div className="mt-6 lg:mt-0">
              <h2 className="text-xl md:text-2xl font-bold">
                Create Profiles for Kids
              </h2>
              <p className="text-base md:text-lg">
                Send kids on adventures with their favorite
                <br className="hidden md:block" />
                characters in a space made just for them—free
                <br className="hidden md:block" /> with your membership.
              </p>
            </div>
            <div>
              <img
                src="/landing-img/kids.png"
                alt="TV Image"
                width={250}
                className="relative"
              />
            </div>
          </div>
          <div className="bg-[#1b1b1b] w-full h-1.5 my-8"></div>
        </article>

        <article className="mt-8">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-8 px-4">
            <div>
              <img
                src="/landing-img/phone.jpg"
                alt=""
                width={250}
                className="relative z-10"
              />
            </div>
            <div className="mt-6 lg:mt-0">
              <h2 className="text-xl md:text-2xl font-bold">
                Download your shows <br className="hidden md:block" />
                to watch offline
              </h2>
              <p className="text-base md:text-lg">
                Watch on a plane, train, or submarine.
              </p>
            </div>
          </div>
          <div className="bg-[#1b1b1b] w-full h-1.5 my-8"></div>
        </article>

        <article>
          <div className="flex flex-col items-center gap-5 mt-12 px-4">
            <h1 className="font-bold text-2xl md:text-3xl text-center">
              Frequently Asked Questions
            </h1>
            {[
              "What is Netflix?",
              "How much is Netflix?",
              "Where can I watch?",
              "How to cancel?",
              "What devices can I use?",
              "Is Netflix free?",
            ].map((q, i) => (
              <div
                key={i}
                className="bg-[#1b1b1b] w-full max-w-2xl rounded-lg question my-1"
              >
                <h2 className="text-lg md:text-2xl font-bold flex justify-between items-center px-6 py-4">
                  {q}
                  <img
                    src="/public/landing-img/vector.png"
                    alt=""
                    width={31}
                    height={31}
                    className="ml-4"
                  />
                </h2>
              </div>
            ))}
          </div>
          <div className="mt-9 flex flex-col items-center gap-4 px-4">
            <h2 className="text-center text-base md:text-lg">
              Ready to Watch? Enter your email to create or restart your
              membership
            </h2>
            <div className="flex flex-col sm:flex-row items-center gap-2 w-full max-w-xl">
              <input
                type="email"
                placeholder="Email address"
                required
                className="flex-1 w-full p-2 rounded opacity-90 placeholder-gray-400 text-black outline-none border-2 border-gray-300"
              />
              <button
                className="bg-red-700 px-5 py-2 rounded text-white font-semibold w-full sm:w-auto  hover:bg-red-900 transition-colors duration-100 hover:cursor-pointer"
                onClick={handleClick}
              >
                Get Started {`>`}
              </button>
            </div>
          </div>
          <div className="bg-[#1b1b1b] w-full h-1.5 mt-10"></div>
        </article>

        <footer className="relative w-full bg-black flex flex-col items-center justify-center p-8 md:p-20 text-gray-400 text-xs mt-8">
          <div className="mb-4">
            Questions? Call{" "}
            <a href="" className="hover:underline text-white">
              1-844-505-2993
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-5xl mb-6">
            <ul className="underline flex flex-col space-y-2">
              <li>FAQ</li>
              <li>Help Center</li>
              <li>Account</li>
              <li>Media Center</li>
              <li>Investor Relations</li>
            </ul>
            <ul className="underline flex flex-col space-y-2">
              <li>Jobs</li>
              <li>Netflix Shop</li>
              <li>Redeem Gift Cards</li>
              <li>Buy Gift Cards</li>
              <li>Ways to Watch</li>
            </ul>
            <ul className="underline flex flex-col space-y-2">
              <li>Terms of Use</li>
              <li>Privacy</li>
              <li>Cookie Preferences</li>
              <li>Corporate Information</li>
              <li>Contact Us</li>
            </ul>
            <ul className="underline flex flex-col space-y-2">
              <li>Speed Test</li>
              <li>Legal Notices</li>
              <li>Only on Netflix</li>
              <li>Do Not Sell or Share Personal Information</li>
              <li>Ad Choices</li>
            </ul>
          </div>
          <div className="border w-fit p-2 rounded mb-5">
            <select
              name="language"
              id="language"
              className="bg-black text-white rounded-lg px-2 py-1"
            >
              <option value="en" className="font-bold">
                English
              </option>
              <option value="fr">French</option>
            </select>
          </div>
        </footer>
      </section>
    </>
  );
};

export default Landing;
