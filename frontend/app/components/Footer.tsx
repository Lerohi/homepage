export default function Footer() {
  return (
    <footer style={{ padding: "1rem", borderTop: "1px solid #ddd" }}>
      <small>© {new Date().getFullYear()}</small>
    </footer>
  );
}
