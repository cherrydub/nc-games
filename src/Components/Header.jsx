import Nav from "./Nav";

export default function Header() {
  return (
    <div className="Header font-gamefont vh50 bg-green-300 p-4 text-center">
      <h1 id="nc-header">NC Games</h1>
      <Nav />
    </div>
  );
}
