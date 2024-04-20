import Link from "next/link";
export default function Home() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Time to get started!
      </h1>
      <p style={{ textAlign: "center" }}>
        <Link
          href="/meals"
          style={{ color: "white", textAlign: "center", fontSize: "20px" }}
        >
          Meals
        </Link>
      </p>
      <p style={{ textAlign: "center" }}>
        <Link
          href="/community"
          style={{ color: "white", textAlign: "center", fontSize: "20px" }}
        >
          Community
        </Link>
      </p>
    </main>
  );
}
