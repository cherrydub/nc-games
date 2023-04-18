import { useState, useEffect } from "react";
import { getReviews, getCategories } from "./api";
import "./App.css";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

function App() {
  // const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="App" id="app-top">
      <Header />

      <Body />

      <Footer />
    </div>
  );
}

export default App;
