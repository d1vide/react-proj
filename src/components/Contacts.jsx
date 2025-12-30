import profile from "../data/profile";

export default function Contacts() {
  return (
    <section>
      <h2>Контакты</h2>
      <p>Email: {profile.contacts.email}</p>
      <p>Telegram: {profile.contacts.telegram}</p>
    </section>
  );
}
