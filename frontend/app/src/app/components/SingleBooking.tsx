import Link from "next/link";

export function SingleBooking({ id, service, start_time, date }) {
  const utcDate = new Date(date);
  const formattedDate = utcDate.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <div className="border rounded-lg shadow-lg p-4 bg-white hover:shadow-xl transition-shadow duration-200">
      <Link
        href={`/booking/${id}`}
        className="block text-lg font-semibold text-black hover:text-blue-600"
      >
        {service} on {formattedDate} starting at {start_time}
      </Link>
    </div>
  );
}
