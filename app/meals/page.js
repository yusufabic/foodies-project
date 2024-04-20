import Link from "next/link";

export default function Meals() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>Meals </h1>
      <p style={{ textAlign: "center" }}>
        <Link
          href="/meals/share"
          style={{ color: "white", textAlign: "center", fontSize: "20px" }}
        >
          Share
        </Link>
      </p>

      <p style={{ textAlign: "center" }}>
        <Link
          href="/meals/detail-1"
          style={{ color: "white", textAlign: "center", fontSize: "20px" }}
        >
          Detail-1
        </Link>
      </p>
      <p style={{ textAlign: "center" }}>
        <Link
          href="/meals/detail-2"
          style={{ color: "white", textAlign: "center", fontSize: "20px" }}
        >
          Detail-2
        </Link>
      </p>

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
