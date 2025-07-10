import "react";
import { useState, type ChangeEvent, type FormEvent } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      // setError("Both fields are required.");
      toast.error("Both fields are required.");
      return;
    }

    const storedUser = localStorage.getItem(`user:${email}`);
    if (!storedUser) {
      // setError("No account found with this email.");
      toast.error("No account found with this email.");
      return;
    }

    const parsedUser = JSON.parse(storedUser);

    if (parsedUser.password !== password) {
      // setError("Incorrect password.");
      toast.error("Incorrect password.");
      return;
    }

    // alert(`Welcome back, ${parsedUser.email}!`);
    toast.success(`Welcome back, ${parsedUser.email}!`);
    setTimeout(() => navigate("/Homepage"), 1500);
  };

  return (
    <div className="relative w-screen h-screen log">
      <header>
        <div className="bg-black h-full overflow-hidden opacity-55 absolute w-full"></div>
        <img
          src="/img/logo.png"
          alt="Netflix Logo"
          width={300}
          className="pl-28 pt-3 relative"
        />
      </header>

      <main className="flex-grow flex items-center justify-center py-8 px-4 relative">
        <div className="w-full max-w-md bg-[#141414] bg-opacity-80 rounded-lg p-8 md:p-12">
          <h1 className="text-3xl font-bold mb-8 text-white">Log In</h1>
          <form action="" onSubmit={handleLogin} className="space-y-6">
            <div>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
                placeholder="Email"
                className="w-full p-3 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
                className="w-full p-3 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-600 text-white font-bold py-3 rounded cursor-pointer hover:bg-red-900 transition duration-200"
            >
              Log In
            </button>
          </form>
          {error && <p className="text-red-600 mt-3">{error}</p>}

          <div className="mt-8 p-4 bg-black bg-opacity-40 rounded">
            <p className="text-xs text-gray-300 text-center">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
              <span className="text-blue-500 hover:underline cursor-pointer">
                Learn more
              </span>
              .
            </p>
          </div>
        </div>
      </main>
      <footer className="relative bottom-0 w-full bg-black bg-opacity-80 justify-center p-20 text-gray-400 text-xs">
        Questions? Call{" "}
        <a href="tel:1-866-579-7172" className="text-white hover:underline">
          1-866-579-7172
        </a>
        <div className="flex justify-between list-none py-6  mt-4">
          <div className="flex flex-col space-y-4 underline">
            <li>FAQ</li>
            <li>Privacy</li>
            <li>Ad Choices</li>
          </div>
          <div className="flex flex-col space-y-4 underline">
            <li>Help Center</li>
            <li>Cookie Preferences</li>
          </div>
          <div className="flex flex-col space-y-4 underline">
            <li>Netflix Shop</li>
            <li>Corporate Information</li>
          </div>
          <div className="flex flex-col space-y-4 underline">
            <li>Terms of Use</li>
            <li>
              Do Not Sell or Share My Personal <br />
              Information
            </li>
          </div>
        </div>
        <div>
          select your language:
          <select
            name=""
            id=""
            className="border ml-3 border-gray-500 py-1 pr-10 my-5 text-white p-2 rounded"
          >
            <option className="text-black" value="Afrikaans">
              Afrikaans
            </option>
            <option className="text-black" value="Amharic">
              Amharic
            </option>
            <option className="text-black" value="Arabic">
              Arabic
            </option>
            <option className="text-black" value="Armenian">
              Armenian
            </option>
            <option className="text-black" value="Azerbaijani">
              Azerbaijani
            </option>
            <option className="text-black" value="Basque">
              Basque
            </option>
            <option className="text-black" value="Belarusian">
              Belarusian
            </option>
            <option className="text-black" value="Bengali">
              Bengali
            </option>
            <option className="text-black" value="English">
              English
            </option>
            <option className="text-black" value="Igbo">
              Igbo
            </option>
            <option className="text-black" value="Hindi">
              Hindi
            </option>
            <option className="text-black" value="Japanese">
              Japanese
            </option>
            <option className="text-black" value="Korean">
              Korean
            </option>
            <option className="text-black" value="Malay">
              Malay
            </option>
            <option className="text-black" value="Malayalam">
              Malayalam
            </option>
            <option className="text-black" value="Marathi">
              Marathi
            </option>
          </select>
        </div>
      </footer>
    </div>
  );
};

export default LoginPage;
