import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <div className="px-5">
      <Nav />
      <main>{children}</main>
    </div>
  );
}
