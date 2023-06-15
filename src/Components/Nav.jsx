import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <Link to={`/`} key={crypto.randomUUID()}>
        <button className="border  rounded-full text-black hover:text-orange-400 opacity-100 px-4 py-2 hover:bg-grey-400 bg-white">
          Home
        </button>
      </Link>

      <Link to={`/reviews`} key={crypto.randomUUID()}>
        <button className="border  rounded-full text-black hover:text-orange-400 opacity-100 px-4 py-2 hover:bg-grey-400 bg-white">
          Reviews
        </button>
      </Link>
    </div>
  );
}
