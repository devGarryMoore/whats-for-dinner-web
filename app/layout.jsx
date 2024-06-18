import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

//the icon is pretty shitty. Maybe we can find a way to fix it later

export const metadata = {
  title: "What's For Dinner App",
  description:
    "Can't Decide What's for Dinner? Use this app that takes the decision out of your hands.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
