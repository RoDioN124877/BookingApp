import type { Booking } from "../types";

const KEY = "bookings_v1";

export const getBookings = (): Booking[] => {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

export const saveBooking = (b: Booking) => {
  const cur = getBookings();
  localStorage.setItem(KEY, JSON.stringify([...cur, b]));
};

export const removeBooking = (id: number | string) => {
  const cur = getBookings();
  const filtered = cur.filter((x) => String(x.id) !== String(id));
  localStorage.setItem(KEY, JSON.stringify(filtered));
};
