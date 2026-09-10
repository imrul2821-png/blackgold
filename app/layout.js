import "./globals.css";

export const metadata = {
  title: "BlackGold — Premium Digital Experiences",
  description:
    "A modern premium portfolio and business website built with Next.js.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
