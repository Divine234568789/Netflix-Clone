import "react";

const landing = () => {
  return (
    <section className="landing max-w-screen max-h-screen">
      <header className="header max-w-screen max-h-screen ">
        <div className="bg-black h-screen opacity-60 absolute w-full"></div>

        <nav className=" flex gap-1 justify-between text-white z-99 relative h-24 pt-5 ">
          <div className="pt-1 pl-20 justify-center flex text-3xl">
            <img
              src="/public/landing-img/logo.png"
              alt="NetFlix Logo"
              width={195}
            />
          </div>

          <menu className="flex gap-9 w-72 pt-1 text-2xl">
            <span className="border border-black px-3 py-1 rounded text-black h-fit ">
              <select className="bg-transparent  text-white ">
                <option
                  value="en"
                  className="  bg-[#1b1b1b] text-white font-normal  border"
                >
                  {" "}
                  English{" "}
                </option>
              </select>
            </span>
            <li>
              <button className="p-2 bg-red-700 rounded text-white">
                Sign Up
              </button>
            </li>
          </menu>
        </nav>

        <div className="flex flex-col justify-center relative items-center h-full w-full text-white mt-30 pb-50">
          <h1 className="text-4xl font-bold">
            Unlimited movies, TV shows, and more.
          </h1>
          <h2 className="text-xl font-semibold mt-4">
            Watch anywhere. Cancel anytime.
          </h2>
          <p className="text-xl mt-4">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="mt-4">
            <input
              type="email"
              placeholder="Email address "
              required
              className="w-96 p-2 rounded opacity-80 placeholder-transperant text-white outline-none border-2 ring-black ring-focus"
            />
            <button className="bg-red-700 px-5 py-2 rounded ml-2 text-white font-semibold">
              Get Started {`>`}
            </button>
          </div>
        </div>
      </header>

      <article className="  mx-24 pt-3  mt-5 h-27 rounded-lg bg-gradient-to-r from-[#2d0b0b] via-[#400al4] to-[#001f3f] p-6 text-white ">
        <div className="flex items-center justify-center space-x-4">
          <img
            src="/public/landing-img/popcorn.png"
            alt=""
            width={96}
            height={96}
            className="opacity-90"
          />
          <div className="   ">
            <h2 className="text-lg font-bold">
              The Netflix you love just for $7.00{" "}
            </h2>
            <p className="text-sm text-gray-200">
              {" "}
              Get the standards with ads plan.
            </p>
            <a
              href="#"
              className="text-blue-400  underline  hover:text-blue-300"
            >
              {" "}
              Learn more{" "}
            </a>
          </div>
        </div>
      </article>
      <article className="w-full h-full flex justify-center ">
        <div className="w-4xl h-96  flex items-center justify-center">
          <div className=" flex justify-center flex-col pt-">
            <h2 className="text-2xl font-bold">Enjoy on Your TV</h2>
            <p>
              Watch on Smart TVs,playstation,Xbox, <br /> Chromwcast,Apple Tv.
              Blu-ray players,and more
            </p>
            <a href=""> learn More </a>
          </div>

          <div className=" pt-30">
            <img
              src="/public/landing-img/tv.png"
              alt="TV Image"
              width={500}
              className="img relative"
            />
          </div>
          <img
            src="/public/landing-img/screenshot.png"
            alt=""
            width={365}
            className="absolute right-82 -bottom-119"
          />
        </div>
      </article>
      <article className="-mb-10">
        <div className="bg-[#1b1b1b] w-full h-1.5 mt-45 -mb-35"></div>
        <div className="mt-45 flex justify-center items-center gap-15">
          <div>
            <img
              src="/public/landing-img/watch.png"
              alt=""
              width={400}
              className="relative z-10"
            />
          </div>
          <img
            src="/public/landing-img/screenshot2.png"
            alt=""
            width={245}
            className="absolute left-88 -bottom-227 bg-no-repeat"
          />
          <div>
            <h2 className="text-2xl font-bold">Watch everywhere</h2>
            <p>
              Stream unlimited movies and TV shows on your <br /> phone, tablet,
              laptop, and TV.
            </p>
          </div>
        </div>
        <div className="bg-[#1b1b1b] w-full h-1.5 "></div>
      </article>
      <article className="">
        <div className="flex items-center justify-center gap-10">
          <div>
            <h2 className="text-2xl font-bold">Create Profiles for Kids</h2>
            <p>
              Send kids on adventures with their favorite
              <br /> characters in a space made just for them—free <br /> with
              your membership.
            </p>
          </div>

          <div className=" pt-30">
            <img
              src="/public/landing-img/kids.png"
              alt="TV Image"
              width={500}
              className="img relative"
            />
          </div>
        </div>
        <div className="bg-[#1b1b1b] w-full h-1.5"></div>
      </article>
      <article className="-mb-10">
        <div className="mt-15 flex justify-center items-center gap-15">
          <div>
            <img
              src="/public/landing-img/phone.jpg"
              alt=""
              width={400}
              className="relative z-10"
            />
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              Download your shows <br />
              to watch offline
            </h2>
            <p>
              Watch on a plane, train, or submarine. <br />
            </p>
          </div>
        </div>
        <div className="bg-[#1b1b1b] w-full h-1.5 mt-10"></div>
      </article>

      <article>
        <div className="  flex items-center justify-center gap-5 flex-col mt-20">
          <h1 className="font-bold text-3xl">Frequently Asked Questions</h1>
          <div className="bg-[#1b1b1b] w-2xl h-15 rounded-lg question">
            <h2 className="text-2xl font-bold w-xl  flex justify-between ml-7 mt-3">
              {" "}
              What is Netflix?{" "}
              <img
                src="public/landing-img/vector.png"
                alt=""
                width={31}
                height={31}
                className="mr-5 mt-1"
              />
            </h2>
          </div>
          <div className="bg-[#1b1b1b] w-2xl h-15 rounded-lg question">
            <h2 className="text-2xl font-bold flex justify-between ml-7 mt-3">
              How much is Netflix?{" "}
              <img
                src="public/landing-img/vector.png"
                alt=""
                width={31}
                height={31}
                className="mr-22 mt-1"
              />
            </h2>
          </div>
          <div className="bg-[#1b1b1b] w-2xl h-15 rounded-lg question">
            <h2 className="text-2xl font-bold flex justify-between ml-7 mt-3">
              Where can I watch?{" "}
              <img
                src="public/landing-img/vector.png"
                alt=""
                width={31}
                height={31}
                className="mr-22 mt-1"
              />
            </h2>
          </div>
          <div className="bg-[#1b1b1b] w-2xl h-15 rounded-lg question">
            <h2 className="text-2xl font-bold flex justify-between ml-7 mt-3">
              How to cancel?{" "}
              <img
                src="public/landing-img/vector.png"
                alt=""
                width={31}
                height={31}
                className="mr-22 mt-1"
              />
            </h2>
          </div>
          <div className="bg-[#1b1b1b] w-2xl h-15 rounded-lg question">
            <h2 className="text-2xl font-bold flex justify-between ml-7 mt-3">
              What devices can I use?{" "}
              <img
                src="public/landing-img/vector.png"
                alt=""
                width={31}
                height={31}
                className="mr-22 mt-1"
              />
            </h2>
          </div>
          <div className="bg-[#1b1b1b] w-2xl h-15 rounded-lg question">
            <h2 className="text-2xl font-bold flex justify-between ml-7 mt-3">
              Is Netflix free?{" "}
              <img
                src="public/landing-img/vector.png"
                alt=""
                width={31}
                height={31}
                className="mr-22 mt-1"
              />
            </h2>
          </div>
        </div>
        <div className=" mt-9 flex justify-center flex-col  items-center  gap-4 ">
          <h2>
            Ready to Watch? Enter your email to create or restart your
            membership
          </h2>
          <div className="">
            <input
              type="email"
              placeholder="Email address"
              required
              className="w-96 p-2 rounded opacity-87 placeholder-transperant text-white outline-none border-2 ring-black ring-focus"
            />
            <button className="bg-red-700 px-5 py-2 rounded ml-2 text-white font-semibold">
              Get Started {`>`}
            </button>
          </div>
        </div>
        <div className="bg-[#1b1b1b] w-full h-1.5 mt-10"></div>
      </article>

      <article className="relative bottom-0 w-full bg-black justify-center p-20 text-gray-400 text-xs">
        Questions? Call{" "}
        <a href="" className="hover:underline text-white">
          1-844-505-2993
        </a>
        <div className=" flex justify-between mt-4 list-none py-6">
          <div className="underline flex flex-col space-y-4">
            <li>FAQ </li>
            <li>Help Center</li>
            <li>Account</li>
            <li> Media Center</li>
            <li>Investor Relations</li>
          </div>

          <div className="underline flex flex-col space-y-4">
            <li> Jobs </li>
            <li> Netflix Shop</li>
            <li> Redeem Gift Cards </li>
            <li> Buy Gift Cards</li>
            <li> Ways to Watch</li>
          </div>

          <div className="underline flex flex-col space-y-4">
            <li> Terms of Use</li>
            <li> Privacy</li>
            <li> Cookie Preferences</li>
            <li> Corporate Information</li>
            <li> Contact Us</li>
          </div>

          <div className="underline flex flex-col space-y-4">
            <li>Speed Test </li>
            <li>Legal Notices</li>
            <li>Only on Netflix</li>
            <li>Do Not Sell or Share Personal Information</li>
            <li>Ad Choices</li>
          </div>
        </div>
        <div className="border w-fit p-5 px-5 py-2 ml-9 mb-5 ">
          <select
            name="language"
            id=" language"
            className="bg-black text-white rounded-lg"
          >
            <option value="en" className="text-l font-bold">
              English{" "}
            </option>
            <option value="fr">French</option>
          </select>
        </div>
      </article>
    </section>
  );
};

export default landing;
