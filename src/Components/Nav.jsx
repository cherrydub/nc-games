import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <Link to={`/`} key={crypto.randomUUID()}>
        <button className="rounded-full text-black opacity-50 px-4 py-2 hover:opacity-100 bg-gray-300">
          Home
        </button>
      </Link>

      <Link to={`/reviews`} key={crypto.randomUUID()}>
        <button className="rounded-full text-black opacity-50 px-4 py-2 hover:opacity-100 bg-gray-300">
          Reviews
        </button>
      </Link>
    </div>
  );
}
