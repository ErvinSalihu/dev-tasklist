import Link from "next/link";
import { getSingleBooking } from "@/app/api/getSingleBooking";

async function SingleBooking({ params }: { params: { id: number } }) {
  const singleBooking = await getSingleBooking(params.id);

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
          Booking Details
        </h2>
        <div className="text-lg mb-4 text-black text-center">
          This Booking is with <strong>{singleBooking.doctor_name}</strong> for{" "}
          <strong>{singleBooking.service}</strong> it starts at{" "}
          <strong>{singleBooking.start_time}</strong> and it ends at {" "}
          <strong>{singleBooking.end_time}</strong>.
        </div>
        <div className="flex justify-center mt-4">
          <Link
            href="/"
            className="bg-teal-600 rounded-md px-4 py-2 text-white hover:bg-teal-700 transition-colors duration-200"
          >
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SingleBooking;
