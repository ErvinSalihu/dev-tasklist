"use client";

import { createBooking } from "@/app/api/createBooking";
import { useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md transition-colors duration-200"
      type="submit"
      aria-disabled={pending}
    >
      Add Booking
    </button>
  );
}

function CreateBookingForm() {
  const router = useRouter();

  return (
    <div className="flex h-screen w-full items-center justify-center m-auto bg-gray-100">
      <form
        className="flex flex-col gap-6 p-8 border rounded-lg shadow-lg bg-white w-full max-w-md relative"
        action={createBooking}
      >
        <button
          type="button"
          className="absolute top-4 left-4 text-gray-700 hover:text-gray-900"
          onClick={() => router.push("/")}
        >
          X
        </button>

        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Enter Booking Details</h2>

        <label htmlFor="service" className="flex flex-col">
          <span className="text-gray-700">Service Name</span>
          <input
            className="border rounded-md p-3 text-lg text-black bg-gray-100 shadow-md"
            type="text"
            id="service"
            name="service"
            required
          />
        </label>

        <label htmlFor="doctor_name" className="flex flex-col">
          <span className="text-gray-700">Doctor Name</span>
          <input
            className="border rounded-md p-3 text-lg text-black bg-gray-100 shadow-md"
            type="text"
            id="doctor_name"
            name="doctor_name"
            required
          />
        </label>

        <label htmlFor="start_time" className="flex flex-col">
          <span className="text-gray-700">Start Time</span>
          <input
            className="border rounded-md p-3 text-lg text-black bg-gray-100 shadow-md"
            type="time"
            id="start_time"
            name="start_time"
            required
          />
        </label>

        <label htmlFor="end_time" className="flex flex-col">
          <span className="text-gray-700">End Time</span>
          <input
            className="border rounded-md p-3 text-lg text-black bg-gray-100 shadow-md"
            type="time"
            id="end_time"
            name="end_time"
            required
          />
        </label>

        <label htmlFor="date" className="flex flex-col">
          <span className="text-gray-700">Date</span>
          <input
            className="border rounded-md p-3 text-lg text-black bg-gray-100 shadow-md"
            type="date"
            id="date"
            name="date"
            required
          />
        </label>

        <SubmitButton />
      </form>
    </div>
  );
}

export default CreateBookingForm;
