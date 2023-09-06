import { useRef } from "react";
import "./index.css";
function TransformDemo() {
  function delay(duration) {
    let start = Date.now();
    while (Date.now() - start < duration) {}
  }
  function handleDelay(duration) {
    delay(duration);
  }

  return (
    <section>
      <section>
        <button type="primary" onClick={() => handleDelay(5000)}>
          延时5s
        </button>
      </section>
      <div className="cir circle2"></div>
      <div className="cir circle1"></div>
    </section>
  );
}

export default TransformDemo;
