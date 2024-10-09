import { Booking } from "./getBookings";

export async function getSingleBooking(
  id?: number
): Promise<Booking> {
  const res = await fetch(
    `http://host.docker.internal:5000/api/bookings/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
