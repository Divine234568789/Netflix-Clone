import { useState } from "react";
import { useNavigate } from "react-router";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search/${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="mb-6 flex justify-center gap-2">
      <input
        type="text"
        placeholder="Search movies..."
        className="p-2 w-[250px] rounded border border-white"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
