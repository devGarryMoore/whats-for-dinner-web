import "./globals.css";

export const metadata = {
  title: "What's For Dinner App",
  description:
    "Can't Decide What's for Dinner? Use this app that takes the decision out of your hands.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
