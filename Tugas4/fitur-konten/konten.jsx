// Fitur.jsx
import React from "react";

const fiturList = [
  {
    title: "Pemandangan Alam",
    description:
      "Nikmati keindahan alam yang memukau dan udara sejuk pegunungan.",
    icon: "🌄",
  },
  {
    title: "Akses Mudah",
    description:
      "Lokasi strategis dan mudah dijangkau dengan kendaraan umum maupun pribadi.",
    icon: "🚌",
  },
  {
    title: "Fasilitas Lengkap",
    description: "Tersedia area parkir, toilet, musala, dan warung makan.",
    icon: "🏞️",
  },
];

const Fitur = () => {
  return (
    <section className="py-12 px-4 bg-gray-100">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Fitur Unggulan</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {fiturList.map((fitur, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="text-4xl mb-4">{fitur.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{fitur.title}</h3>
              <p className="text-gray-600">{fitur.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fitur;
