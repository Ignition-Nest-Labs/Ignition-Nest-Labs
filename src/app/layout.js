import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ignition Nest Labs",
  description: "Ignition Nest Labs is a platform that connects businesses with top-tier freelancers. We offer a wide range of services, including web development, UI/UX design, and social media management. Partner with us to access top-tier talent and exceed your expectations. Contact us to begin.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/favicon.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
