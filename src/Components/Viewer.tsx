import { ChevronLeft } from "lucide-react";
import "react";
import { useNavigate } from "react-router";

const Viewer = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/Netflix-Clone/Homepage");
  };
  return (
    <section>
      <div className="w-full min-h-[60vh] mt-20 p-3 flex flex-col items-center">
        <h2 className="flex items-center justify-center text-2xl md:text-4xl">
          Who's Watching?
        </h2>
        <div className="flex flex-wrap gap-5 md:gap-7 items-center justify-center mt-7">
          <span className="flex flex-col items-center">
            <img
              src="/watch-img/smile red.png"
              alt=""
              className="w-20 md:w-28"
            />
            <h3 className="mt-1.5 flex justify-center text-base md:text-lg">
              Angel
            </h3>
          </span>
          <span className="flex flex-col items-center">
            <img
              src="/watch-img/smile blue.png"
              alt=""
              className="w-20 md:w-28"
            />
            <h3 className="mt-1.5 flex justify-center text-base md:text-lg">
              Cynthia
            </h3>
          </span>
          <span className="flex flex-col items-center">
            <img
              src="/watch-img/smile purple.png"
              alt=""
              className="w-20 md:w-28"
            />
            <h3 className="mt-1.5 flex justify-center text-base md:text-lg">
              Daimon
            </h3>
          </span>
          <span className="flex flex-col items-center">
            <img
              src="/watch-img/smile yellow.png"
              alt=""
              className="w-20 md:w-28"
            />
            <h3 className="mt-1.5 flex justify-center text-base md:text-lg">
              Fave
            </h3>
          </span>
          <span className="flex flex-col items-center">
            <img
              src="/watch-img/circlePlus.png"
              alt=""
              className="w-20 md:w-28"
            />
            <h3 className="mt-1.5 flex justify-center text-base md:text-lg">
              Add Profile
            </h3>
          </span>
        </div>
        <h2 className="mt-10 rounded flex border p-1.5 px-5 w-fit text-base md:text-lg">
          Manage Profile
        </h2>
        <button
          onClick={handleClick}
          className="mt-5 flex items-center gap-2 text-base md:text-lg hover:cursor-pointer hover:bg-gray-600 rounded"
        >
          {" "}
          <ChevronLeft width={34} />
        </button>
      </div>
    </section>
  );
};

export default Viewer;
