import { useState } from "react";
import { ThemeContext } from "./context/ThemeContext";
import ThemeWidget from "./components/ThemeWidget";
import Panel from "./components/Panel";
import AudioPlayer from "./components/audioPlayer";
import TransformDemo from "./components/tranformDemo";
import GameTicTacToe from "./components/ticTacToe";
import "./App.css";
function App() {
  const [theme, setTheme] = useState("light");
  function onToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
    if (theme === "light") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }
  return (
    <ThemeContext.Provider value={theme}>
      <ThemeWidget onClick={onToggleTheme} />
      <section className="container">
        <Panel title="transorm动画运行在合成线程上(本地运行才生效)">
          <TransformDemo />
        </Panel>
        <Panel title="井字小游戏">
          <GameTicTacToe />
        </Panel>
        <Panel title="歌词滚动效果">
          <AudioPlayer />
        </Panel>
      </section>
    </ThemeContext.Provider>
  );
}

export default App;
