export interface Booking {
  id: number;
  service: string;
  doctor_name: string;
  start_time: string;
  end_time: string;
  date: string;
}

export async function getBookings(): Promise<Booking[]> {
  const res = await fetch("http://host.docker.internal:5000/api/bookings", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
