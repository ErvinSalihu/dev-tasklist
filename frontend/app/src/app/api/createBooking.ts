import { redirect } from "next/navigation";

export async function createBooking(formData: FormData) {
  const res = await fetch("http://host.docker.internal:5000/api/bookings", {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    alert("Please fill all required fields!");
  }

  if (res.ok) {
    redirect("/");
  }
}
