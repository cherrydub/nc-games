import { useState, useEffect } from "react";
import { getReviews, getCategories } from "./api";
import "./App.css";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // setIsLoading(true);
    getReviews().then((data) => {
      console.log(data, "dat");
      setReviews(data);
      // setIsLoading(false);
    });
  }, []);

  console.log(reviews, "reviews here");
  return (
    <div className="App">
      <Header />

      <Body reviews={reviews} />

      <Footer />
    </div>
  );
}

export default App;
