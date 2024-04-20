import Link from "next/link";

export default function Community() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>Community</h1>
      <p style={{ textAlign: "center" }}>
        <Link
          href="/"
          style={{ color: "white", textAlign: "center", fontSize: "20px" }}
        >
          Comeback
        </Link>
      </p>
    </main>
  );
}
