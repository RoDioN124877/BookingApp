import React from "react";

interface Props {
  query: string;
  setQuery: (v: string) => void;
}

export const SearchBar: React.FC<Props> = ({ query, setQuery }) => {
  return (
    <div className="search container" role="search">
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        style={{ position: "absolute", left: 26, top: 40 }}
      >
        <path
          d="M21 21l-4.35-4.35M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"
          stroke="#9aa4af"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Поиск по названию или типу (напр. 'Ресторан')"
      />
    </div>
  );
};
export default SearchBar;
