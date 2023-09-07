import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import "./index.css";
function TransformDemo() {
  const theme = useContext(ThemeContext);
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
        <button
          type={theme === "dark" ? "primary dark" : "primary"}
          onClick={() => handleDelay(5000)}
        >
          延时5s
        </button>
      </section>
      <div className="cir circle2"></div>
      <div className="cir circle1"></div>
    </section>
  );
}

export default TransformDemo;
