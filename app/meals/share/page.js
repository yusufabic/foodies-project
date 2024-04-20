import Link from "next/link";

export default function Share() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>Share</h1>
      <p style={{ textAlign: "center" }}>
        <Link
          href="/meals"
          style={{ color: "white", textAlign: "center", fontSize: "20px" }}
        >
          Comeback
        </Link>
      </p>
    </main>
  );
}
