import profile from "../data/profile";

export default function Header() {
  return (
    <header className="header">
      <img src="/images/avatar.jpg" alt="avatar" />
      <h1>{profile.name}</h1>
      <p>{profile.university}</p>
    </header>
  );
}
