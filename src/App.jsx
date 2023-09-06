import { useEffect, useRef } from "react";
import AudioPlayer from "./components/audioPlayer";
import "./App.css";
function App() {
  const count = useRef(0);
  function handleAdd() {
    count.current = count.current + 1;
    alert(count.current);
  }
  function delay(duration) {
    let start = Date.now();
    while (Date.now() - start < duration) {}
  }
  function handleDelay(duration) {
    delay(duration);
  }

  return (
    <section className="App">
      <section>
        <button onClick={handleAdd}>count+</button>
      </section>
      <section>
        <button type="primary" onClick={() => handleDelay(5000)}>
          延时5s
        </button>
      </section>
      <div className="cir circle2"></div>
      <div className="cir circle1"></div>
      <AudioPlayer />
    </section>
  );
}

export default App;
