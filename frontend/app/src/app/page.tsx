import Link from "next/link";
import { getBookings } from "./api/getBookings";
import { SingleBooking } from "./components/SingleBooking";

const Home: React.FC = async () => {
  const bookings = await getBookings();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gray-50">
      <h1 className="text-4xl font-bold mb-6 text-gray-900">Your Bookings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl p-4">
        {bookings?.map((item) => (
          <SingleBooking key={item.id} {...item} />
        ))}
      </div>
      <Link
        href="/booking/create"
        className="mt-6 bg-teal-600 text-white rounded-lg px-6 py-3 hover:bg-teal-700 transition-colors duration-200 shadow-lg transform hover:scale-105"
      >
        + Create New Booking
      </Link>
    </div>
  );
};

export default Home;
