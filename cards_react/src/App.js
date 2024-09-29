import "./styles.css";
import questions from "./questionsData.js";
import FlashCards from "./components/FlashCards.jsx";
import Counter from "./components/Counter.jsx";

export default function App() {
  return (
    <div className="App">
      <FlashCards questions={questions} />
      <Counter />
    </div>
  );
}



