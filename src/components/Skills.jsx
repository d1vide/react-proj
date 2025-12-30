import profile from "../data/profile";

export default function Skills() {
  return (
    <section>
      <h2>Навыки</h2>
      <ul>
        {profile.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}
