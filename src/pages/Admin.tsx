import React, { useEffect, useState } from "react";
import { getBookings, removeBooking } from "../utils/storage";
import { venues } from "../data/venues";
import type { Booking } from "../types";

export const Admin: React.FC = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(()=> {
    setBookings(getBookings());
    const onStorage = () => setBookings(getBookings());
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const handleDelete = (id: number) => {
    removeBooking(id);
    setBookings(getBookings());
  };

  return (
    <div className="container">
      <h1 className="h1">Админ-панель — Заявки</h1>
      {bookings.length === 0 ? (
        <div className="empty">Пока нет броней.</div>
      ) : (
        <div style={{overflowX:"auto", marginTop:12}}>
          <table className="table">
            <thead>
              <tr>
                <th>Заведение</th>
                <th>Дата</th>
                <th>Время</th>
                <th>Чел.</th>
                <th>Имя</th>
                <th>Телефон</th>
                <th>Действия</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map(b => {
                const v = venues.find(x => x.id === b.venueId);
                return (
                  <tr key={b.id}>
                    <td>{v?.name}</td>
                    <td>{b.date}</td>
                    <td>{b.time}</td>
                    <td>{b.people}</td>
                    <td>{b.name}</td>
                    <td>{b.phone}</td>
                    <td><button onClick={()=>handleDelete(b.id)} style={{color:"#ff7b7b", background:"transparent", border:"none", cursor:"pointer"}}>Удалить</button></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
