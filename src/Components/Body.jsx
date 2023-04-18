import Reviews from "./Reviews";

export default function Body({ reviews }) {
  return (
    <div className="Body mb-10">
      {console.log(reviews)}
      <p>Body Start</p>
      <Reviews reviews={reviews} />
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p>Mid</p>
      <p></p>
      <p></p>
      <p></p>
      <p>End</p>
    </div>
  );
}
