import React, { useState } from "react";
import type { Booking } from "../types";
import { saveBooking } from "../utils/storage";
import { Modal } from "./Modal";
import { Toast } from "./Toast";

interface Props {
  venueId: number;
  onClose?: () => void;
}

export const BookingForm: React.FC<Props> = ({ venueId, onClose }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [people, setPeople] = useState<number>(2);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [openConfirm, setOpenConfirm] = useState(false);
  const [toast, setToast] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date || !time || !name || !phone) {
      setToast(true);
      return;
    }
    const booking: Booking = {
      id: Date.now(),
      venueId,
      date,
      time,
      people,
      name,
      phone,
      createdAt: new Date().toISOString(),
    };
    saveBooking(booking);
    setOpenConfirm(true);
  };

  const closeAll = () => {
    setOpenConfirm(false);
    setToast(true);
    setTimeout(() => setToast(false), 1200);
    if (onClose) onClose();
    setDate(""); setTime(""); setPeople(2); setName(""); setPhone("");
  };

  return (
    <>
      <form onSubmit={handleSubmit} style={{marginTop:10}}>
        <div className="form-row">
          <div className="field">
            <input className="input" type="date" value={date} onChange={(e)=>setDate(e.target.value)} required />
          </div>
          <div className="field">
            <input className="input" type="time" value={time} onChange={(e)=>setTime(e.target.value)} required />
          </div>
        </div>

        <div style={{marginTop:8}}>
          <input className="input" type="number" min={1} value={people} onChange={(e)=>setPeople(Number(e.target.value))} />
        </div>

        <div style={{marginTop:8}}>
          <input className="input" placeholder="Ваше имя" value={name} onChange={(e)=>setName(e.target.value)} required />
        </div>

        <div style={{marginTop:8}}>
          <input className="input" placeholder="Телефон" value={phone} onChange={(e)=>setPhone(e.target.value)} required />
        </div>

        <div style={{marginTop:12, display:"flex", gap:8}}>
          <button type="submit" className="btn btn-primary">Подтвердить</button>
          <button type="button" onClick={() => onClose?.()} className="btn btn-ghost">Отмена</button>
        </div>
      </form>

      <Modal open={openConfirm} onClose={() => { setOpenConfirm(false); if (onClose) onClose(); }}>
        <div style={{textAlign:"center"}}>
          <div style={{fontSize:36}}>🎉</div>
          <h3 style={{margin:"10px 0 4px", fontSize:18}}>Бронирование принято</h3>
          <p className="small">Мы сохранили бронь в админке.</p>
          <div style={{marginTop:14}}>
            <button onClick={closeAll} className="btn btn-primary">Отлично</button>
          </div>
        </div>
      </Modal>

      <Toast show={toast} text="Пожалуйста, заполните все поля" onClose={() => setToast(false)} />
    </>
  );
};
