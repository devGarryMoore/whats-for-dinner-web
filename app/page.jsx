import Link from "next/link";
import Image from "next/image";
import gmail from "@/assets/gmail.png";
import facebook from "@/assets/facebook-logo.png";
import twitter from "@/assets/twitter.png";
import logo from "@/assets/Logo.png";

export default function Authentication() {
  return (
    <main>
      <div className="container">
        <section id="auth-card">
          {/* Find a way to make the text go to the left... because I'm a scrub... we moving on for now */}
          <h1>What's For</h1>
          <h1>Dinner?</h1>
          <p>Sign in to find out...</p>
          <div className="socials">
            <Link className="slink" href="/home">
              <Image src={gmail} width={50} alt="gmail icon" />
            </Link>
            <Link className="slink" href="/home">
              <Image src={facebook} width={50} alt="facebook icon" />
            </Link>
            <Link className="slink" href="/home">
              <Image src={twitter} width={50} alt="twitter icon" />
            </Link>
          </div>
        </section>
        <section id="logo">
          {/* Fix the size of the logo image */}
          <Image src={logo} width={700} alt="logo" id="logo" />
        </section>
      </div>
    </main>
    // Authentication Box
    // Logo
  );
}
