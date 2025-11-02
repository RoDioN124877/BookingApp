export interface Venue {
  id: number;
  name: string;
  type: string;
  address: string;
  hours: string;
  rating: number;
  image: string;
  description: string;
}

export interface Booking {
  id: number;
  venueId: number;
  date: string;
  time: string;
  people: number;
  name: string;
  phone: string;
  createdAt: string;
}
