import Link from "next/link";
import Image from "next/image";
import gmail from "@/assets/gmail.png";
import facebook from "@/assets/facebook-logo.png";
import twitter from "@/assets/twitter.png";
import logo from "@/assets/Logo.png";

export default function Authentication() {
  return (
    <main>
      <section id="auth-card">
        <h1>What's For Dinner?</h1>
        <p>Sign in to find out...</p>
        <Link href="https://www.google.com/">
          <Image src={gmail} width={50} alt="gmail icon" />
        </Link>
        <Link href="https://www.facebook.com/">
          <Image src={facebook} width={50} alt="facebook icon" />
        </Link>
        <Link href="https://www.google.com/">
          <Image src={twitter} width={50} alt="twitter icon" />
        </Link>
      </section>
      <section id="logo">
        <Image src={logo} width={500} alt="logo" />
      </section>
    </main>
    // Authentication Box
    // Logo
  );
}
