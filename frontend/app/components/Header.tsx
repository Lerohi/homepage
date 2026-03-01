import Link from "next/link";

export default function Header() {
  return (
    <header>
      <h1>lerohi</h1>
      <header style={{ padding: "1rem", borderBottom: "1px solid #ddd" }}>
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
      </nav>
    </header>
    </header>
  );
}
