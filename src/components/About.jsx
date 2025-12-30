import profile from "../data/profile";

export default function About() {
  return (
    <section>
      <h2>Обо мне</h2>
      <p>{profile.description}</p>
    </section>
  );
}
