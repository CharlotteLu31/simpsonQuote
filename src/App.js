import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import QuoteCard from "./components/QuoteCard";

function App() {
  const [quote, setQuote] = useState({});
  const getQuote = () => {
    axios
    .get('https://simpsons-quotes-api.herokuapp.com/quotes')
    .then ((response) => response.data)
    .then ((data) => {
      setQuote(data[0]);
    })
  };
  useEffect(() => {
    getQuote()
  }, []);
  return <div className="App">
    <QuoteCard quote={quote} />
    <button onClick={getQuote}>Nouvelle citation</button>
  </div>;
}

export default App;
