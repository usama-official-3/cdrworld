import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {

  const phoneNumber = "923015702929";
const message =
  "Assalam-o-Alaikum.\n\nI’m interested in purchasing a Premium CorelDRAW file from cdrworld.vercel.app.\nKindly share the payment details and the purchase process.\n\nThank you.";

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="bg-[#25D366] w-16 h-16 flex items-center justify-center rounded-full shadow-xl hover:scale-110 transition-all duration-300">

        <FaWhatsapp className="text-white text-3xl" />

      </div>
    </a>
  );
}