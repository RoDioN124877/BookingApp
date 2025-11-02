import React, { useState } from "react";
import type { Venue } from "../types";
import { BookingForm } from "./BookingForm";

interface Props { venue: Venue }

export const VenueCard: React.FC<Props> = ({ venue }) => {
  const [open, setOpen] = useState(false);

  return (
    <article className="card" aria-labelledby={`venue-${venue.id}-title`}>
      <div className="img-wrap" role="img" aria-label={`${venue.name} — изображение`}>
        <img src={venue.image} alt={venue.name} />
        <div className="labels">
          <div className="badge" aria-hidden="true">★ {venue.rating.toFixed(1)}</div>
        </div>

        <div className="img-info small" aria-hidden="true">
          <span style={{fontSize:13}}>{venue.hours}</span>
        </div>
      </div>

      <div className="body">
        <header className="title">
          <h3 id={`venue-${venue.id}-title`}>{venue.name}</h3>
          <div className="subtitle" aria-hidden="true">{venue.type}</div>
        </header>

        <div className="meta small" aria-hidden="true">
          <span>{venue.address}</span>
        </div>

        <p className="desc" title={venue.description}>{venue.description}</p>

        <div className="venue-footer">
          <div className="tags" aria-hidden="true">
            <span className="tag">Рейтинг: {venue.rating}</span>
            <span className="tag">{venue.type}</span>
          </div>

          <div style={{minWidth:160}}>
            <button
              className="btn btn-primary"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-controls={`booking-${venue.id}`}
              title={`Забронировать столик в ${venue.name}`}
            >
              {/* простая иконка календаря (svg) */}
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M7 10h5" stroke="#02110d" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                <rect x="3" y="4" width="18" height="16" rx="2" stroke="#02110d" strokeWidth="1.6" />
                <path d="M16 2v4M8 2v4" stroke="#02110d" strokeWidth="1.6" strokeLinecap="round"/>
              </svg>
              Забронировать
            </button>
          </div>
        </div>

        {open && (
          <div id={`booking-${venue.id}`} style={{marginTop:12}}>
            <BookingForm venueId={venue.id} onClose={() => setOpen(false)} />
          </div>
        )}
      </div>
    </article>
  );
};

export default VenueCard;
