import Reviews from "./Reviews";

export default function Body({ reviews }) {
  return (
    <div className="Body mb-10 mt-10 p-5">
      <Reviews reviews={reviews} />
    </div>
  );
}
