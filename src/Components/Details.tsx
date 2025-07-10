import { Play } from "lucide-react";
import "react";
import { MoreDetails, MovieSectionWithDetails } from "./MovieSection";

const Details = () => {
  return (
    <section className="details-section w-full h-full">
      <header className="header w-full h-full relative">
        <img
          src="/details-img/bg-1.png"
          className="w-full h-[40rem] absolute -z-50 object-cover"
          alt=""
        />
        <div className="absolute inset-0 bg-black opacity-15"></div>

        <div className="pt-20 px-4 md:px-8 lg:px-20">
          <img
            src="/details-img/house of n.png"
            alt=""
            className="w-full max-w-[440px] h-auto"
          />

          <div className="flex flex-wrap items-center gap-4 mt-5">
            <button className="flex items-center gap-2 px-4 py-2 bg-white rounded text-black border">
              <Play color="black" />
              Play
            </button>
            <img src="/details-img/Button.png" alt="" width={40} height={40} />
            <img src="/details-img/like.png" alt="" width={40} height={40} />
          </div>

          <div className="text-white text-sm mt-10 flex flex-col lg:flex-row justify-between gap-10">
            <div className="text-xl space-y-3 max-w-xl">
              <h2>
                <span>New</span> · 3 Seasons · 2024 · HD
              </h2>
              <h3>TV-MA · smoking, violence</h3>
              <h1 className="flex items-center gap-2 text-lg">
                <img src="/details-img/Label.png" alt="" />
                #2 in TV Shows Today
              </h1>
              <p className="leading-relaxed">
                Years after retiring from their formidable ninja lives, a
                dysfunctional family must return to shadowy missions to
                counteract a string of looming threats.
              </p>
            </div>

            <div className="text-sm w-full lg:w-1/3 space-y-2">
              <p>Cast: Kento Kaku, Yosuke Eguchi, Tae Kimura, more</p>
              <p>Genres: TV Dramas, Japanese, TV Thrillers</p>
              <p>This show is: Dark, Suspenseful, Exciting</p>
            </div>
          </div>
        </div>

        <article className="mt-20 px-4 flex flex-col items-center gap-4">
          <div className="w-full max-w-5xl flex flex-col sm:flex-row justify-between items-center mb-4 text-white">
            <h1 className="text-2xl">Episodes</h1>
            <h2 className="text-lg text-gray-400">House of Ninjas</h2>
          </div>

          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="bg-[#1b1b1b] w-full max-w-2xl h-12 rounded-lg flex items-center justify-center text-white"
            >
              {i + 1}
            </div>
          ))}
        </article>
      </header>

      <article className="mt-20 w-full px-4 lg:px-20">
        <div className="w-full">
          <MoreDetails />

          <div className="mt-20">
            <MovieSectionWithDetails />
          </div>

          <div className="mt-20 text-white">
            <h1 className="text-xl">
              About <span className="text-2xl font-bold">House of Ninjas</span>
            </h1>

            <div className="mt-4 space-y-3">
              <p>
                <span className="font-bold text-gray-400">Director:</span> Dave
                Boyle
              </p>
              <p>
                <span className="font-bold text-gray-400">Cast:</span> Kento
                Kaku, Yosuke Eguchi, Tae Kimura, Kengo Kora, Aju Makita, Nobuko
                Miyamoto, Tomorowo Taguchi, Riho Yoshioka, Tokio Emoto, Kyusaku
                Shimada, Pierre Taki, Mariko Tsutsui, Tenta Banka, Takayuki
                Yamada
              </p>
              <p>
                <span className="font-bold text-gray-400">Genres:</span> TV
                Dramas, Japanese, TV Thrillers
              </p>
              <p>This show is: Dark, Suspenseful, Exciting</p>
              <p>
                <span className="font-bold text-gray-400">
                  Maturity rating:
                </span>{" "}
                Smoking, violence · For Mature Audiences.
              </p>
              <p>
                <span className="font-bold text-gray-400">Rating:</span> TV-MA
              </p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Details;
