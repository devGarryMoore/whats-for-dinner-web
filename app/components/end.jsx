import { SignOutButton } from "@clerk/nextjs";

export default function End() {
  const message = "You're outta luck. Guess you're cooking at home tonight...";
  return (
    <div className="search-box">
      <div>
        <p>{message}</p>
      </div>
      <SignOutButton>
        <div className="logoutBtn">
          <button className="btn2">Bye 👋</button>
        </div>
      </SignOutButton>
    </div>
  );
}
