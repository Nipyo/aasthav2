import Link from "next/link";
import Image from "next/image";
import {
  CLINIC_NAME,
  CLINIC_PHONES,
  CLINIC_EMAIL,
  CLINIC_ADDRESS,
  CLINIC_TAGLINE,
  NAV_LINKS,
} from "@/lib/constants";

export default function Footer() {
  const googleMapsUrl =
    "https://www.google.com/maps/place/Aastha+Nature+Cure+Clinic/@27.6887926,85.3112,17z/data=!3m1!4b1!4m6!3m5!1s0x39eb1961dcfaba3d:0x5051a47f08c1f68c!8m2!3d27.6887879!4d85.3137749!16s%2Fg%2F11nvy1zpzh?entry=ttu";

  return (
    <footer className="bg-green-900 text-green-50">
      {/* Top wave */}
      <div
        className="w-full overflow-hidden leading-none"
        style={{ height: 48 }}
      >
        <svg
          viewBox="0 0 1440 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 48V24C240 0 480 48 720 24C960 0 1200 48 1440 24V48H0Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-5 pb-10 pt-8 lg:px-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="inline-block rounded-xl bg-white px-3 py-2">
              <Image
                src="/images/logo.png"
                alt={CLINIC_NAME}
                width={180}
                height={68}
                className="h-12 w-auto"
              />
      

              
            </div>
                     <div>
    <h1 className="
      font-serif
      text-xl sm:text-xl md:text-xl
      font-semibold
      tracking-tight
      text-white-800
    ">
      Aastha Nature Cure Clinic
    </h1>

    <div className="flex items-center gap-2 mt-1 text-center">
      {/* <span className="h-[1px] w-6 bg-[#c99b4a]" /> */}

      {/* <span className="
        text-xs sm:text-sm
        font-medium
        text-green-700
        ml-2
      

      ">
        Pvt. Ltd.
      </span> */}

      {/* <span className="h-[1px] w-6 bg-[#c99b4a]" /> */}
    </div>

    {/* <p className="
      mt-1 
      text-xs sm:text-sm
      font-medium
      text-green-700
      
                                           
      ">
      स्वस्थं जीवनम्
    </p> */}
  </div>

            <p className="mt-3 font-display text-sm italic text-green-300">
              {CLINIC_TAGLINE}
            </p>

            <p className="mt-3 max-w-xs font-body text-xs leading-relaxed text-green-200">
              Holistic, drug-free healing through physiotherapy, acupuncture,
              naturopathy and yoga in the heart of Kathmandu.
            </p>

            {/* Social Media */}
            <div className="mt-5">
              <p className="mb-3 font-body text-xs font-700 uppercase tracking-wider text-green-400">
                Follow Us
              </p>

              <div className="flex items-center gap-2">

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/people/Aastha-Nature-Cure-Clinic/61593873347565/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-green-800 text-white transition-all hover:scale-110 hover:bg-blue-600"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.6 1.6-1.6h1.7V3.8c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5V10H7v3h2.8v8h3.7Z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/aasthanaturecureclinic/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-green-800 text-white transition-all hover:scale-110 hover:bg-pink-600"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-5 w-5"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="5"
                    />
                    <circle cx="12" cy="12" r="4" />
                    <circle
                      cx="17.5"
                      cy="6.5"
                      r="1"
                      fill="currentColor"
                      stroke="none"
                    />
                  </svg>
                </a>

                {/* X / Twitter */}
                <a
                  href="https://x.com/AasthaNaturecc"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-green-800 text-white transition-all hover:scale-110 hover:bg-black"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.214-6.817-5.967 6.817H1.68l7.73-8.835L1.254 2.25h6.826l4.713 6.231 5.451-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/aastha-nature-cure-clinic"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-green-800 text-white transition-all hover:scale-110 hover:bg-blue-700"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.64h.05c.53-1 1.82-2.04 3.75-2.04C21.6 8.6 22 11.02 22 14.15V21h-4v-6.08c0-1.45-.03-3.32-2.02-3.32-2.02 0-2.33 1.58-2.33 3.21V21h-4V9Z" />
                  </svg>
                </a>

              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="mb-4 font-body text-xs font-700 uppercase tracking-wider text-green-400">
              Quick Links
            </p>

            <ul className="space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="focus-ring font-body text-sm text-green-200 transition-colors hover:text-white"
                  >
                    › {l.label}
                  </Link>
                </li>
              ))}

              <li>
                <Link
                  href="https://bookings.suga360.com/7fa8d61c-85d9-410e-915d-5897a48614d7"
                  className="focus-ring font-body text-sm font-700 text-green-300 transition-colors hover:text-white"
                >
                  › Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="mb-4 font-body text-xs font-700 uppercase tracking-wider text-green-400">
              Our Services
            </p>

            <ul className="space-y-2">
              {[
                "Physiotherapy",
                "Acupuncture",
                "Cupping Therapy",
                "Naturopathy",
                "Massage Therapy",
                "Shirodhara",
                "Yoga",
              ].map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="focus-ring font-body text-xs text-green-200 transition-colors hover:text-white"
                  >
                    🌿 {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-4 font-body text-xs font-700 uppercase tracking-wider text-green-400">
              Contact Us
            </p>

            <div className="space-y-3">

              {/* Address */}
              <div className="flex items-start gap-2 font-body text-sm text-green-200">
                <span className="mt-0.5">📍</span>

                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  {CLINIC_ADDRESS}
                </a>
              </div>

              {/* Get Directions */}
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-green-700 px-4 py-2 font-body text-xs font-semibold text-white transition-all hover:bg-green-600 hover:shadow-lg"
              >
                📍 Get Directions
              </a>

              {/* Phone Numbers */}
              {CLINIC_PHONES.map((p) => (
                <a
                  key={p}
                  href={`tel:${p}`}
                  className="focus-ring flex items-center gap-2 font-body text-sm text-green-200 transition-colors hover:text-white"
                >
                  📞 {p}
                </a>
              ))}

              {/* Email */}
              <a
                href={`mailto:${CLINIC_EMAIL}`}
                className="focus-ring flex items-center gap-2 break-all font-body text-xs text-green-200 transition-colors hover:text-white"
              >
                ✉️ {CLINIC_EMAIL}
              </a>

              {/* Opening Hours */}
              <div className="flex items-center gap-2 font-body text-xs text-green-200">
                🕐 Open daily, 7:00 AM – 6:00 PM
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col gap-3 border-t border-green-800 pt-6 font-body text-xs text-green-400 sm:flex-row sm:items-center sm:justify-between">

          <span>
            © {new Date().getFullYear()} {CLINIC_NAME}. All rights reserved.
          </span>

          <span className="flex items-center gap-1">
            🌿 Members enjoy 10% discount on select treatments
          </span>

        </div>
      </div>
    </footer>
  );
}