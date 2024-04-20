export default function DetailMeals({ params }) {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>Detail Meals</h1>
      <p style={{ color: "white", textAlign: "center" }}>{params.slug}</p>
    </main>
  );
}
