import React, { useState } from "react";
import { venues } from "../data/venues";
import { SearchBar } from "../components/SearchBar";
import { VenueCard } from "../components/VenueCard";

export const Home: React.FC = () => {
  const [query, setQuery] = useState("");

  const filtered = venues.filter((v) =>
    v.name.toLowerCase().includes(query.toLowerCase()) ||
    v.type.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main>
      <div className="container">
        <header>
          <h1 className="h1">Бронирование столиков</h1>
          <p className="h2">Найди заведение и быстро забронируй столик</p>
        </header>

        <SearchBar query={query} setQuery={setQuery} />

        <div style={{marginTop:8}}>
          <div className="grid">
            {filtered.map((v) => <VenueCard key={v.id} venue={v} />)}
          </div>
        </div>
      </div>
    </main>
  );
};
