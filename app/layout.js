import { Playfair_Display, Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimator from "@/components/ScrollAnimator";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.aasthanaturecureclinic.com.np"),

  title: {
    default: "Aastha Nature Cure Clinic Pvt. Ltd. — Kathmandu",
    template: "%s | Aastha Nature Cure Clinic",
  },

  description:
    "Natural healing through physiotherapy, acupuncture, naturopathy and yoga. स्वस्थं जीवनम् — Healthy Living at Aastha Nature Cure Clinic, Kathmandu.",

  keywords: [
    "Aastha Nature Cure Clinic",
    "Aastha Nature Cure Clinic Kathmandu",
    "nature cure Kathmandu",
    "physiotherapy Kathmandu",
    "acupuncture Kathmandu",
    "naturopathy Kathmandu",
    "yoga Kathmandu",
    "cupping therapy Kathmandu",
    "natural healing Kathmandu",
    "holistic health Kathmandu",
  ],

  authors: [
    {
      name: "Aastha Nature Cure Clinic Pvt. Ltd.",
      url: "https://www.aasthanaturecureclinic.com.np",
    },
  ],

  creator: "Aastha Nature Cure Clinic Pvt. Ltd.",
  publisher: "Aastha Nature Cure Clinic Pvt. Ltd.",

  icons: {
    icon: [
      {
        url: "/logo.png",
        type: "image/png",
      },
    ],
    shortcut: ["/logo.png"],
    apple: [
      {
        url: "/logo.png",
        type: "image/png",
      },
    ],
  },

  openGraph: {
    title: "Aastha Nature Cure Clinic Pvt. Ltd. — Kathmandu",
    description:
      "Natural healing through physiotherapy, acupuncture, naturopathy and yoga.",
    url: "https://www.aasthanaturecureclinic.com.np/",
    siteName: "Aastha Nature Cure Clinic",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Aastha Nature Cure Clinic Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Aastha Nature Cure Clinic Pvt. Ltd. — Kathmandu",
    description:
      "Natural healing through physiotherapy, acupuncture, naturopathy and yoga.",
    images: ["/logo.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${nunito.variable}`}
    >
      <body className="flex min-h-screen flex-col font-body antialiased">
        <Navbar />

        <main className="flex-1">
          {children}
        </main>

        <Footer />

        <ScrollAnimator />
      </body>
    </html>
  );
}
