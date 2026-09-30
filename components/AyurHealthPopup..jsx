"use client";

import { useEffect, useState } from "react";

export default function AyurHealthPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("ayurhealth-popup");

    if (!alreadyShown) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("ayurhealth-popup", "true");
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, []);

  if (!isOpen) return null;

  const whatsappNumber = "9779851436667";

  const whatsappMessage = encodeURIComponent(
    "Hello, I am interested in the AyurHealth offer. Please provide more details."
  );

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl">

        {/* Close Button */}
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Close popup"
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-2xl text-gray-700 shadow-md transition hover:bg-gray-100"
        >
          ×
        </button>

        {/* Promotional Image */}
        <div className="relative w-full bg-gray-100 object-cover">
          <img
            src="/ayurhealth.PNG"
            alt="AyurHealth Special Offer"
            className="block h-auto max-h-[460px] w-full object-cover "
            onError={(e) => {
              console.error(
                "AyurHealth image could not be loaded. Make sure the file exists at public/ayurhealth.PNG"
              );
              e.currentTarget.style.display = "none";
            }}
          />
        </div>

        {/* Content */}
        <div className="px-6 pb-7 pt-6 text-center">

          <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-green-700">
            Special AyurHealth Offer
          </p>

          <h2 className="font-serif text-3xl font-bold text-gray-900">
            Natural Healing Starts Here
          </h2>

          <p className="mx-auto mt-3 max-w-md text-gray-600">
            Discover our AyurHealth wellness services and take the first
            step toward a healthier lifestyle.
          </p>

          {/* Coupon */}
          <div className="mx-auto my-5 max-w-sm rounded-2xl border-2 border-dashed border-green-600 bg-green-50 px-5 py-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-green-700">
              Your Special Coupon
            </p>

            <p className="mt-1 text-2xl font-extrabold tracking-widest text-green-800">
              AASTHA NATURE 
            </p>

            <p className="mt-1 text-sm text-gray-600">
              Show this coupon when contacting us.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row">

            {/* Phone */}
            <a
              href="tel:+9779851436667"
              className="flex flex-1 items-center justify-center rounded-full bg-green-700 px-6 py-3.5 font-bold text-white transition hover:bg-green-800"
            >
              📞 Contact Us
            </a>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center rounded-full bg-[#25D366] px-6 py-3.5 font-bold text-white transition hover:bg-[#1ebe5d]"
            >
              💬 WhatsApp
            </a>

          </div>

          {/* Maybe Later */}
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="mt-4 text-sm text-gray-500 underline underline-offset-4 hover:text-gray-700"
          >
            Maybe later
          </button>

        </div>
      </div>
    </div>
  );
}

