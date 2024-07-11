import {
  ClerkProvider,
  SignIn,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import "./globals.css";
import Image from "next/image";
import logo from "@/assets/Logo.png";
import { neobrutalism } from "@clerk/themes";

//the icon is pretty shitty. Maybe we can find a way to fix it later

export const metadata = {
  title: "What's For Dinner App",
  description:
    "Can't Decide What's for Dinner? Use this app that takes the decision out of your hands.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: [neobrutalism],
      }}
    >
      <html lang="en">
        <body>
          <SignedOut>
            <div className="container">
              <SignIn routing="hash" id="auth-card" />
              <section id="logo">
                {/* Fix the size of the logo image */}
                <Image src={logo} width={700} alt="logo" id="logo" />
              </section>
            </div>
          </SignedOut>
          <SignedIn>
            <UserButton showName />
            {children}
          </SignedIn>
        </body>
      </html>
    </ClerkProvider>
  );
}
